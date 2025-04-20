import React from 'react';
import { Car, Clock, Users, Database, Bot } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-red-700 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">About Bulldog Parking</h1>
            <p className="text-white/90 text-lg">
              A smart solution to help Fresno State students find parking efficiently
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Bulldog Parking was created to solve one of the most common frustrations for Fresno State 
              students: finding parking before class. As former students ourselves, we know the stress 
              of circling parking lots, running late to class, and the feeling of defeat when you finally 
              park far from your building.
            </p>
            <p className="text-gray-600">
              Our mission is to leverage technology and data analytics to help students make smarter 
              parking decisions, reduce time spent searching for spots, and ultimately improve the 
              campus experience for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-2 mt-1">
                    <Clock className="text-red-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Historical Data Analysis</h3>
                    <p className="text-gray-600">
                      We analyze parking patterns across different days and times to predict lot availability.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-2 mt-1">
                    <Users className="text-red-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Crowd Prediction</h3>
                    <p className="text-gray-600">
                      Our algorithm estimates how full each lot will be based on class schedules and events.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-2 mt-1">
                    <Car className="text-red-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Smart Recommendations</h3>
                    <p className="text-gray-600">
                      We suggest optimal parking based on availability, walking distance, and your preferences.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Technology</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <Database className="text-blue-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Data Analytics</h3>
                    <p className="text-gray-600">
                      Backend algorithms process parking data to identify patterns and make predictions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <Bot className="text-blue-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">AI Integration</h3>
                    <p className="text-gray-600">
                      Future versions will incorporate machine learning to improve recommendations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-blue-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.5 12H14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12.5 9L15.5 12L12.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Google Maps Integration</h3>
                    <p className="text-gray-600">
                      Accurate distance calculations and walking routes to your building.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Team</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-red-700 text-3xl font-bold">SC</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Student Creators</h3>
                  <p className="text-gray-600 mt-2">
                    Built by students, for students. Our team of Fresno State computer science majors developed this solution.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg p-6 text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-blue-700 text-3xl font-bold">FS</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Faculty Support</h3>
                  <p className="text-gray-600 mt-2">
                    With guidance from the Computer Science department and support from campus administration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;