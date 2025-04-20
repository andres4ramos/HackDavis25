import { createClient } from '@supabase/supabase-js'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

// Supabase setup - using YOUR credentials
const supabase = createClient(
  'https://qucavksdoegmobjgunpp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y2F2a3Nkb2VnbW9iamd1bnBwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTEwNTIzNCwiZXhwIjoyMDYwNjgxMjM0fQ.Tq5IPsK-4lqjTgxla-jVtMj4cZRbmZXDoPUD57wLrxw'
)

const PARKING_LOTS = [
  { name: 'Lot 5', lat: 36.812153, lng: -119.740887, serves: ['ART'] },
  { name: 'Lot 2', lat: 36.809216, lng: -119.745097, serves: ['MUS'] },
  { name: 'Lot 20', lat: 36.816088, lng: -119.750922, serves: ['EE'] },
  { name: 'Lot 15', lat: 36.814925, lng: -119.750922, serves: ['MCL'] },
  { name: 'Lot 6', lat: 36.814037, lng: -119.741711, serves: ['S2'] },
  { name: 'Lot 1', lat: 36.80929, lng: -119.744865, serves: ['KE'] }
]

const CAPACITY_LIMIT = 80

async function checkCapacity(building, hour) {
  const { data } = await supabase
    .from('Classes')
    .select('students')
    .eq('building', building)
    .like('start_time', `${hour}:%`)

  const totalStudents = data.reduce((sum, c) => sum + c.students, 0)
  return totalStudents
}

app.post('/api/parking-suggestions', async (req, res) => {
  try {
    const results = await Promise.all(
      req.body.schedule.map(async ({ building, start_time }) => {
        const [hour] = start_time.split(':')

        const servingLots = PARKING_LOTS.filter(lot =>
          lot.serves.includes(building)
        )

        if (servingLots.length === 0) {
          return {
            building,
            start_time,
            error: `No parking lots configured for ${building}`,
            debug: `Available buildings: ${[...new Set(PARKING_LOTS.flatMap(l => l.serves))].join(', ')}`
          }
        }

        const lotInfo = await Promise.all(
          servingLots.map(async lot => {
            const students = await checkCapacity(building, hour)
            return {
              ...lot,
              students,
              mapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${lot.lat},${lot.lng}`,
              message: students >= CAPACITY_LIMIT
                ? `❌ All lots near ${building} are likely full. Try a remote lot.`
                : `🅿️ Park at ${lot.name} (${students} students at this hour)`
            }
          })
        )

        return {
          building,
          start_time,
          parking: lotInfo[0]
        }
      })
    )

    res.json({ results })
  } catch (error) {
    res.status(500).json({
      error: error.message,
      debug: "Check that your building codes match exactly (case sensitive)"
    })
  }
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
