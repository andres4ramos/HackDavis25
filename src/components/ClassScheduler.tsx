import React, { useState } from 'react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const times = ['8:00 AM', '9:30 AM', '11:00 AM', '12:30 PM', '2:00 PM', '3:30 PM'];
const buildings = ['Engineering East', 'Science 2', 'Music', 'Library', 'Social Sciences'];

const ClassScheduler: React.FC = () => {
  const [slots, setSlots] = useState([{ day: '', time: '', building: '' }]);

  const updateSlot = (index: number, field: string, value: string) => {
    const updated = [...slots];
    (updated[index] as any)[field] = value;
    setSlots(updated);
  };

  const addSlot = () => {
    setSlots([...slots, { day: '', time: '', building: '' }]);
  };

  const removeSlot = (index: number) => {
    const updated = [...slots];
    updated.splice(index, 1);
    setSlots(updated);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">Enter Your Class Schedule</h2>
      {slots.map((slot, index) => (
        <div key={index} className="mb-4 space-y-2">
          <div className="flex gap-2">
            <select
              value={slot.day}
              onChange={(e) => updateSlot(index, 'day', e.target.value)}
              className="flex-1 px-3 py-2 border rounded-md"
            >
              <option value="">Day</option>
              {days.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            <select
              value={slot.time}
              onChange={(e) => updateSlot(index, 'time', e.target.value)}
              className="flex-1 px-3 py-2 border rounded-md"
            >
              <option value="">Time</option>
              {times.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            <select
              value={slot.building}
              onChange={(e) => updateSlot(index, 'building', e.target.value)}
              className="flex-1 px-3 py-2 border rounded-md"
            >
              <option value="">Building</option>
              {buildings.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>

            {slots.length > 1 && (
              <button onClick={() => removeSlot(index)} className="text-red-600 px-2">
                ✕
              </button>
            )}
          </div>
        </div>
      ))}
      <button
        onClick={addSlot}
        className="mt-2 text-sm text-red-700 underline hover:text-red-900"
      >
        + Add another slot
      </button>
    </div>
  );
};

export default ClassScheduler;
