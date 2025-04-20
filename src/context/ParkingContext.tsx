import React, { createContext, useContext, useState } from 'react';
import { Building, ParkingLot, ParkingRecommendation } from '../types/types';
import { buildings, parkingLots, calculateDistance, calculateWalkingTime, getTip } from '../data/parkingData';

interface ParkingContextType {
  selectedDay: string;
  setSelectedDay: (day: string) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  selectedBuilding: Building | null;
  setSelectedBuilding: (building: Building | null) => void;
  buildingOptions: Building[];
  recommendation: ParkingRecommendation | null;
  getRecommendation: () => void;
  isLoading: boolean;
}

const ParkingContext = createContext<ParkingContextType | undefined>(undefined);

export const ParkingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [selectedTime, setSelectedTime] = useState<string>('8:00 AM');
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null);
  const [recommendation, setRecommendation] = useState<ParkingRecommendation | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const buildingOptions = buildings;

  const getRecommendation = () => {
    if (!selectedBuilding) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Find best lot based on availability, crowd level, and distance
      const rankedLots = parkingLots.map(lot => {
        const availableSpots = lot.availableSpots[selectedDay][selectedTime];
        const crowdLevel = lot.crowdLevels[selectedDay][selectedTime];
        const distance = calculateDistance(lot, selectedBuilding);
        const walkingTime = calculateWalkingTime(lot, selectedBuilding);
        
        // Calculate score (lower is better)
        let score = 0;
        
        // Factor 1: Available spots
        score -= availableSpots;
        
        // Factor 2: Crowd level
        if (crowdLevel === 'high') score += 50;
        else if (crowdLevel === 'medium') score += 25;
        
        // Factor 3: Distance/walking time
        const walkingMinutes = parseInt(walkingTime.split(' ')[0]);
        score += walkingMinutes * 5;
        
        return {
          lot,
          score,
          distance,
          walkingTime,
          crowdLevel,
          availableSpots,
          tip: getTip(lot, selectedDay, selectedTime)
        };
      });
      
      // Sort by score (lower is better)
      rankedLots.sort((a, b) => a.score - b.score);
      
      // Take the best lot
      const bestLot = rankedLots[0];
      
      setRecommendation({
        lot: bestLot.lot,
        distance: bestLot.distance,
        walkingTime: bestLot.walkingTime,
        crowdLevel: bestLot.crowdLevel,
        availableSpots: bestLot.availableSpots,
        tip: bestLot.tip
      });
      
      setIsLoading(false);
    }, 1500); // Simulate loading for 1.5 seconds
  };

  return (
    <ParkingContext.Provider
      value={{
        selectedDay,
        setSelectedDay,
        selectedTime,
        setSelectedTime,
        selectedBuilding,
        setSelectedBuilding,
        buildingOptions,
        recommendation,
        getRecommendation,
        isLoading
      }}
    >
      {children}
    </ParkingContext.Provider>
  );
};

export const useParkingContext = () => {
  const context = useContext(ParkingContext);
  if (context === undefined) {
    throw new Error('useParkingContext must be used within a ParkingProvider');
  }
  return context;
};