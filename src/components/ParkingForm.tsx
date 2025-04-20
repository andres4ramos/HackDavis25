import React from 'react';
import { useParkingContext } from '../context/ParkingContext';
import { weekdays, timeslots } from '../data/parkingData';
import { Clock, Calendar, Building } from 'lucide-react';

const ParkingForm: React.FC = () => {
  const { 
    selectedDay, 
    setSelectedDay,
    selectedTime, 
    setSelectedTime,
    selectedBuilding, 
    setSelectedBuilding,
    buildingOptions,
    getRecommendation,
    isLoading
  } = useParkingContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getRecommendation();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Parking</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="day" className="flex items-center space-x-2 text-gray-700 font-medium">
            <Calendar size={18} className="text-red-700" />
            <span>Class Day</span>
          </label>
          <select
            id="day"
            className="w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-50 focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            required
          >
            <option value="">Select a day</option>
            {weekdays.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="time" className="flex items-center space-x-2 text-gray-700 font-medium">
            <Clock size={18} className="text-red-700" />
            <span>Class Time</span>
          </label>
          <select
            id="time"
            className="w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-50 focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          >
            <option value="">Select a time</option>
            {timeslots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="building" className="flex items-center space-x-2 text-gray-700 font-medium">
            <Building size={18} className="text-red-700" />
            <span>Building</span>
          </label>
          <select
            id="building"
            className="w-full rounded-md border-gray-300 shadow-sm px-4 py-2 bg-gray-50 focus:border-red-500 focus:ring focus:ring-red-200 transition duration-150 ease-in-out"
            value={selectedBuilding?.id || ''}
            onChange={(e) => {
              const building = buildingOptions.find(b => b.id === e.target.value);
              setSelectedBuilding(building || null);
            }}
            required
          >
            <option value="">Select a building</option>
            {buildingOptions.map((building) => (
              <option key={building.id} value={building.id}>
                {building.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className={`w-full flex items-center justify-center space-x-2 rounded-md px-4 py-3 bg-red-700 text-white font-medium transition-colors
            ${selectedDay && selectedTime && selectedBuilding ? 'hover:bg-red-800' : 'opacity-70 cursor-not-allowed'}
            ${isLoading ? 'animate-pulse' : ''}
          `}
          disabled={!selectedDay || !selectedTime || !selectedBuilding || isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Finding Best Spot...</span>
            </>
          ) : (
            <span>Find Parking</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ParkingForm;