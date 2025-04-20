import React, { useState } from 'react';

const CampusHero: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

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
          <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md transition-colors font-medium">
            Find Parking Now
          </button>
          <button 
            onClick={() => setShowMap(true)}
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md transition-colors font-medium"
          >
            Campus Parking Map
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showMap && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="relative bg-white p-4 rounded-lg max-w-[90%] max-h-[90%] overflow-auto shadow-lg">
      
      {/* Close Button */}
      <button
        onClick={() => setShowMap(false)}
        className="absolute top-2 right-2 text-gray-700 hover:text-black text-3xl font-bold z-50"
      >
        &times;
      </button>

      {/* Image */}
      <img 
        src="/campus-map.jpg" 
        alt="Campus Parking Map" 
        className="w-full h-auto rounded"
      />
      </div>
      </div>
    )}
    </div>
    );
  };

export default CampusHero;