import React from 'react';
import CampusHero from '../components/CampusHero';
import ParkingForm from '../components/ParkingForm';
import LotRecommendation from '../components/LotRecommendation';
import { useParkingContext } from '../context/ParkingContext';
import { Car, Clock, MapPin, Map } from 'lucide-react';
import ClassScheduler from '../components/ClassScheduler';

const HomePage: React.FC = () => {
  const { recommendation } = useParkingContext();

  return (
    <div className="min-h-screen bg-gray-50">
      <CampusHero />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Smart Parking Assistant</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enter your class schedule below and we'll recommend the best parking lot based on availability,
              distance to your building, and historical parking patterns.
            </p>
          </div>

          <div className="relative mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <ParkingForm />

                {recommendation && (
                  <div className="md:hidden mt-6">
                    <LotRecommendation />
                  </div>
                )}
              </div>

              <div className="w-full md:w-1/2 hidden md:block">
                {recommendation ? (
                  <LotRecommendation />
                ) : (
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-center items-center">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Enter Class Schedule</h2>
                    <ClassScheduler />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our smart algorithm analyzes historical parking data to help you find the best spot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 text-center transition-transform hover:scale-105">
              <div className="bg-red-100 rounded-full p-3 inline-flex mb-4">
                <Clock className="text-red-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Enter Class Details</h3>
              <p className="text-gray-600">
                Tell us when and where your class is located on campus.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center transition-transform hover:scale-105">
              <div className="bg-red-100 rounded-full p-3 inline-flex mb-4">
                <Car className="text-red-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Get Recommendations</h3>
              <p className="text-gray-600">
                We'll suggest the best lots based on availability and location.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center transition-transform hover:scale-105">
              <div className="bg-red-100 rounded-full p-3 inline-flex mb-4">
                <MapPin className="text-red-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Find Your Spot</h3>
              <p className="text-gray-600">
                Park with confidence knowing exactly how far you'll need to walk.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Campus Parking Map</h2>
            <p className="text-white/90 mb-8">
              View the entire campus parking map with real-time availability indicators.
            </p>
            <button className="bg-white text-red-700 hover:bg-gray-100 px-6 py-3 rounded-md transition-colors font-medium inline-flex items-center">
              <Map className="mr-2" size={20} />
              Open Interactive Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
