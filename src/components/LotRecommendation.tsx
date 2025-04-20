import React from 'react';
import { useParkingContext } from '../context/ParkingContext';
import { MapPin, Clock, Users, Car, ArrowRight } from 'lucide-react';

const LotRecommendation: React.FC = () => {
  const { recommendation, selectedBuilding } = useParkingContext();

  if (!recommendation) return null;

  const getCrowdLevelColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailabilityPercentage = () => {
    return Math.round((recommendation.availableSpots / recommendation.lot.capacity) * 100);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-auto mt-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended Parking</h2>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-red-700">{recommendation.lot.name}</h3>
            <p className="text-gray-600">{recommendation.lot.permitType} Parking</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCrowdLevelColor(recommendation.crowdLevel)}`}>
            {recommendation.crowdLevel.charAt(0).toUpperCase() + recommendation.crowdLevel.slice(1)} Traffic
          </span>
        </div>

        <div className="flex justify-between items-start gap-4">
          <div className="bg-blue-50 rounded-lg p-3 flex flex-col items-center justify-center">
            <Car className="text-blue-700 mb-1" size={24} />
            <span className="text-sm text-gray-700">Available</span>
            <span className="font-bold text-blue-700">{recommendation.availableSpots} spots</span>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-3 flex flex-col items-center justify-center">
            <MapPin className="text-blue-700 mb-1" size={24} />
            <span className="text-sm text-gray-700">Distance</span>
            <span className="font-bold text-blue-700">{recommendation.distance}</span>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-3 flex flex-col items-center justify-center">
            <Clock className="text-blue-700 mb-1" size={24} />
            <span className="text-sm text-gray-700">Walk Time</span>
            <span className="font-bold text-blue-700">{recommendation.walkingTime}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Users size={16} />
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className={`h-2.5 rounded-full ${
                getAvailabilityPercentage() > 60 ? 'bg-green-500' : 
                getAvailabilityPercentage() > 30 ? 'bg-yellow-500' : 'bg-red-500'
              }`} 
              style={{ width: `${getAvailabilityPercentage()}%` }}
            ></div>
          </div>
          <span className="whitespace-nowrap">{getAvailabilityPercentage()}% Available</span>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 flex items-start space-x-3">
          <div className="mt-1 flex-shrink-0">
            <ArrowRight className="text-blue-700" size={20} />
          </div>
          <p className="text-gray-700">{recommendation.tip}</p>
        </div>

        {selectedBuilding && (
          <div className="mt-4 text-center">
            <p className="text-gray-600 mb-2">Walking to: <span className="font-medium">{selectedBuilding.name}</span></p>
            <button className="mt-2 inline-flex items-center justify-center space-x-2 text-blue-700 hover:text-blue-800 transition-colors">
              <MapPin size={16} />
              <span>View on Campus Map</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LotRecommendation;