import React, { useState } from 'react'

const CampusHero: React.FC = () => {
  const [showMap, setShowMap] = useState(false)
  const [loading, setLoading] = useState(false)
  const [parkingResults, setParkingResults] = useState<any[] | null>(null)

  const handleFindParking = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:3000/api/parking-suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          schedule: [
            { building: 'MCL', start_time: '10:00' },
            { building: 'S2', start_time: '11:00' }
          ]
        })
      })

      const data = await response.json()
      setParkingResults(data.results)
    } catch (err) {
      console.error('Error:', err)
      setParkingResults([{ error: 'Server not responding. Is backend running?' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/library-at-sunset.jpg" 
          alt="Fresno State Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 max-w-xl">
          <span className="text-red-500">Fresno State</span> Smart Parking Assistant
        </h1>
        <p className="text-xl text-gray-200 max-w-lg mb-6">
          Find the perfect parking spot before your next class. Save time and avoid the parking hunt.
        </p>
        <div className="flex flex-wrap gap-4">
          
          <button 
            onClick={() => setShowMap(true)}
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md transition-colors font-medium"
          >
            Campus Parking Map
          </button>
        </div>
      </div>

      {/* Results Modal */}
      {parkingResults && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="relative bg-white p-6 rounded-lg max-w-md shadow-xl">
            <button
              onClick={() => setParkingResults(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-4">Parking Suggestions</h2>
            <ul className="space-y-3 max-h-[400px] overflow-y-auto">
              {parkingResults.map((result, i) => (
                <li key={i}>
                  {result?.parking ? (
                    <>
                      <p>
                        🏫 <strong>{result.building}</strong> at {result.start_time}
                      </p>
                      <p>
                        🅿 <strong>{result.parking.name}</strong> — {result.parking.students} students
                      </p>
                      <a 
                        href={result.parking.mapsUrl} 
                        target="_blank" 
                        className="text-blue-600 underline"
                        rel="noreferrer"
                      >
                        Get Directions
                      </a>
                    </>
                  ) : (
                    <p className="text-red-500">{result?.error || 'No result'}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Map Modal */}
      {showMap && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="relative bg-white p-4 rounded-lg max-w-[90%] max-h-[90%] overflow-auto shadow-lg">
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-black text-3xl font-bold z-50"
            >
              &times;
            </button>
            <img 
              src="/campus-map.jpg" 
              alt="Campus Parking Map" 
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default CampusHero