import { Building, ParkingLot } from '../types/types';

export const buildings: Building[] = [
  { id: 'agriculture', name: 'Agriculture Building', location: { lat: 36.8175, lng: -119.7512 } },
  { id: 'art', name: 'Conley Art Building', location: { lat: 36.8119, lng: -119.7478 } },
  { id: 'dorms', name: 'Dorms', location: { lat: 36.8075, lng: -119.7535 } },
  { id: 'engineeringEast', name: 'Engineering East', location: { lat: 36.8155, lng: -119.7523 } },
  { id: 'engineeringWest', name: 'Engineering West', location: { lat: 36.8158, lng: -119.7527 } },
  { id: 'familyFoodSci', name: 'Family & Food Sciences Building', location: { lat: 36.8143, lng: -119.7488 } },
  { id: 'IT', name: 'Grosse Industrial Technology Building', location: { lat: 36.8163, lng: -119.7525 } },
  { id: 'joyal', name: 'Joyal Administration Building', location: { lat: 36.8114, lng: -119.7501 } },
  { id: 'kremen', name: 'Kremen Education Building', location: { lat: 36.8103, lng: -119.7475 } },
  { id: 'library', name: 'Fresno State Library', location: { lat: 36.8142, lng: -119.7504 } },
  { id: 'mcLane', name: 'McLane Hall', location: { lat: 36.8131, lng: -119.7472 } },
  { id: 'mckeefisk', name: 'McKee-Fisk Building', location: { lat: 36.8166, lng: -119.7490 } },
  { id: 'north', name: 'North Gymnasium', location: { lat: 36.8137, lng: -119.7510 } },
  { id: 'peters', name: 'Peters Business Building', location: { lat: 36.8125, lng: -119.7515 } },
  { id: 'rec', name: 'Student Recreation Center', location: { lat: 36.8107, lng: -119.7530 } },
  { id: 'scienceII', name: 'Science II', location: { lat: 36.8136, lng: -119.7485 } },
  { id: 'socialSciences', name: 'Social Sciences', location: { lat: 36.8164, lng: -119.7495 } },
  { id: 'south', name: 'South Gymnasium', location: { lat: 36.8126, lng: -119.7512 } },
  { id: 'speech', name: 'Speech Arts Building', location: { lat: 36.8116, lng: -119.7483 } }
];

export const parkingLots: ParkingLot[] = [
  {
    id: 'p1',
    name: 'Parking Lot P1',
    capacity: 450,
    location: { lat: 36.8118, lng: -119.7512 },
    crowdLevels: {
      'Monday': {
        '8:00 AM': 'high', '10:00 AM': 'high', '12:00 PM': 'medium',
        '2:00 PM': 'medium', '4:00 PM': 'low', '6:00 PM': 'low'
      },
      'Tuesday': {
        '8:00 AM': 'high', '10:00 AM': 'high', '12:00 PM': 'high',
        '2:00 PM': 'medium', '4:00 PM': 'low', '6:00 PM': 'low'
      },
      'Wednesday': {
        '8:00 AM': 'high', '10:00 AM': 'high', '12:00 PM': 'medium',
        '2:00 PM': 'medium', '4:00 PM': 'low', '6:00 PM': 'low'
      },
      'Thursday': {
        '8:00 AM': 'high', '10:00 AM': 'high', '12:00 PM': 'high',
        '2:00 PM': 'medium', '4:00 PM': 'low', '6:00 PM': 'low'
      },
      'Friday': {
        '8:00 AM': 'medium', '10:00 AM': 'medium', '12:00 PM': 'medium',
        '2:00 PM': 'low', '4:00 PM': 'low', '6:00 PM': 'low'
      }
    },
    availableSpots: {
      'Monday': {
        '8:00 AM': 50, '10:00 AM': 75, '12:00 PM': 150,
        '2:00 PM': 200, '4:00 PM': 300, '6:00 PM': 350
      },
      'Tuesday': {
        '8:00 AM': 30, '10:00 AM': 45, '12:00 PM': 80,
        '2:00 PM': 175, '4:00 PM': 280, '6:00 PM': 380
      },
      'Wednesday': {
        '8:00 AM': 60, '10:00 AM': 70, '12:00 PM': 140,
        '2:00 PM': 210, '4:00 PM': 320, '6:00 PM': 360
      },
      'Thursday': {
        '8:00 AM': 35, '10:00 AM': 50, '12:00 PM': 90,
        '2:00 PM': 180, '4:00 PM': 290, '6:00 PM': 370
      },
      'Friday': {
        '8:00 AM': 120, '10:00 AM': 150, '12:00 PM': 200,
        '2:00 PM': 300, '4:00 PM': 350, '6:00 PM': 400
      }
    },
    permitType: 'Student'
  },
  {
    id: 'p2',
    name: 'Parking Lot P2',
    capacity: 320,
    location: { lat: 36.8135, lng: -119.7535 },
    crowdLevels: {
      'Monday': {
        '8:00 AM': 'medium', '10:00 AM': 'high', '12:00 PM': 'high',
        '2:00 PM': 'medium', '4:00 PM': 'low', '6:00 PM': 'low'
      },
      'Tuesday': {
        '8:00 AM': 'medium', '10:00 AM': 'high', '12:00 PM': 'high',
        '2:00 PM': 'medium', '4:00 PM': 'medium', '6:00 PM': 'low'
      },
      'Wednesday': {
        '8:00 AM': 'medium', '10:00 AM': 'high', '12:00 PM': 'high',
        '2:00 PM': 'medium', '4:00 PM': 'low', '6:00 PM': 'low'
      },
      'Thursday': {
        '8:00 AM': 'medium', '10:00 AM': 'high', '12:00 PM': 'high',
        '2:00 PM': 'medium', '4:00 PM': 'medium', '6:00 PM': 'low'
      },
      'Friday': {
        '8:00 AM': 'low', '10:00 AM': 'medium', '12:00 PM': 'medium',
        '2:00 PM': 'low', '4:00 PM': 'low', '6:00 PM': 'low'
      }
    },
    availableSpots: {
      'Monday': {
        '8:00 AM': 95, '10:00 AM': 60, '12:00 PM': 50,
        '2:00 PM': 120, '4:00 PM': 220, '6:00 PM': 270
      },
      'Tuesday': {
        '8:00 AM': 85, '10:00 AM': 45, '12:00 PM': 40,
        '2:00 PM': 110, '4:00 PM': 180, '6:00 PM': 240
      },
      'Wednesday': {
        '8:00 AM': 100, '10:00 AM': 55, '12:00 PM': 45,
        '2:00 PM': 125, '4:00 PM': 210, '6:00 PM': 280
      },
      'Thursday': {
        '8:00 AM': 90, '10:00 AM': 40, '12:00 PM': 35,
        '2:00 PM': 115, '4:00 PM': 190, '6:00 PM': 250
      },
      'Friday': {
        '8:00 AM': 150, '10:00 AM': 130, '12:00 PM': 120,
        '2:00 PM': 180, '4:00 PM': 250, '6:00 PM': 290
      }
    },
    permitType: 'Student'
  },
  {
    id: 'p30',
    name: 'Parking Lot P30',
    capacity: 580,
    location: { lat: 36.8155, lng: -119.7465 },
    crowdLevels: {
      'Monday': {
        '8:00 AM': 'medium', '10:00 AM': 'high', '12:00 PM': 'high',
        '2:00 PM': 'high', '4:00 PM': 'medium', '6:00 PM': 'low'
      },
      'Tuesday': {
        '8:00 AM': 'medium', '10:00 AM': 'high', '12:00 PM': 'high',
        '2:00 PM': 'high', '4:00 PM': 'medium', '6:00 PM': 'low'
      },
      'Wednesday': {
        '8:00 AM': 'medium', '10:00 AM': 'high', '12:00 PM': 'high',
        '2:00 PM': 'high', '4:00 PM': 'medium', '6:00 PM': 'low'
      },
      'Thursday': {
        '8:00 AM': 'medium', '10:00 AM': 'high', '12:00 PM': 'high',
        '2:00 PM': 'high', '4:00 PM': 'medium', '6:00 PM': 'low'
      },
      'Friday': {
        '8:00 AM': 'low', '10:00 AM': 'medium', '12:00 PM': 'medium',
        '2:00 PM': 'low', '4:00 PM': 'low', '6:00 PM': 'low'
      }
    },
    availableSpots: {
      'Monday': {
        '8:00 AM': 200, '10:00 AM': 100, '12:00 PM': 80,
        '2:00 PM': 90, '4:00 PM': 220, '6:00 PM': 400
      },
      'Tuesday': {
        '8:00 AM': 210, '10:00 AM': 90, '12:00 PM': 75,
        '2:00 PM': 85, '4:00 PM': 210, '6:00 PM': 390
      },
      'Wednesday': {
        '8:00 AM': 195, '10:00 AM': 85, '12:00 PM': 70,
        '2:00 PM': 80, '4:00 PM': 200, '6:00 PM': 380
      },
      'Thursday': {
        '8:00 AM': 205, '10:00 AM': 95, '12:00 PM': 80,
        '2:00 PM': 90, '4:00 PM': 215, '6:00 PM': 395
      },
      'Friday': {
        '8:00 AM': 300, '10:00 AM': 220, '12:00 PM': 180,
        '2:00 PM': 290, '4:00 PM': 350, '6:00 PM': 450
      }
    },
    permitType: 'Student'
  },
  {
    id: 'p15',
    name: 'Parking Lot P15',
    capacity: 410,
    location: { lat: 36.8170, lng: -119.7510 },
    crowdLevels: {
      'Monday': {
        '8:00 AM': 'low', '10:00 AM': 'medium', '12:00 PM': 'high',
        '2:00 PM': 'medium', '4:00 PM': 'low', '6:00 PM': 'low'
      },
      'Tuesday': {
        '8:00 AM': 'low', '10:00 AM': 'medium', '12:00 PM': 'high',
        '2:00 PM': 'medium', '4:00 PM': 'low', '6:00 PM': 'low'
      },
      'Wednesday': {
        '8:00 AM': 'low', '10:00 AM': 'medium', '12:00 PM': 'high',
        '2:00 PM': 'medium', '4:00 PM': 'low', '6:00 PM': 'low'
      },
      'Thursday': {
        '8:00 AM': 'low', '10:00 AM': 'medium', '12:00 PM': 'high',
        '2:00 PM': 'medium', '4:00 PM': 'low', '6:00 PM': 'low'
      },
      'Friday': {
        '8:00 AM': 'low', '10:00 AM': 'low', '12:00 PM': 'medium',
        '2:00 PM': 'low', '4:00 PM': 'low', '6:00 PM': 'low'
      }
    },
    availableSpots: {
      'Monday': {
        '8:00 AM': 280, '10:00 AM': 200, '12:00 PM': 100,
        '2:00 PM': 180, '4:00 PM': 270, '6:00 PM': 350
      },
      'Tuesday': {
        '8:00 AM': 290, '10:00 AM': 210, '12:00 PM': 90,
        '2:00 PM': 170, '4:00 PM': 280, '6:00 PM': 340
      },
      'Wednesday': {
        '8:00 AM': 285, '10:00 AM': 205, '12:00 PM': 95,
        '2:00 PM': 175, '4:00 PM': 275, '6:00 PM': 345
      },
      'Thursday': {
        '8:00 AM': 295, '10:00 AM': 215, '12:00 PM': 85,
        '2:00 PM': 165, '4:00 PM': 285, '6:00 PM': 335
      },
      'Friday': {
        '8:00 AM': 330, '10:00 AM': 280, '12:00 PM': 210,
        '2:00 PM': 290, '4:00 PM': 350, '6:00 PM': 380
      }
    },
    permitType: 'Student'
  }
];

export const timeslots = [
  '8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'
];

export const weekdays = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
];

export const getTip = (lot: ParkingLot, day: string, time: string): string => {
  const crowdLevel = lot.crowdLevels[day][time];
  
  if (crowdLevel === 'high') {
    return `${lot.name} usually fills by ${time}, arrive 20-30 minutes early.`;
  } else if (crowdLevel === 'medium') {
    return `${lot.name} is moderately full at ${time}, allow 10-15 minutes to find a spot.`;
  } else {
    return `${lot.name} typically has plenty of open spots at ${time}.`;
  }
};

export const calculateWalkingTime = (lot: ParkingLot, building: Building): string => {
  // Simple mock calculation - would use Google Distance Matrix API in production
  const latDiff = Math.abs(lot.location.lat - building.location.lat);
  const lngDiff = Math.abs(lot.location.lng - building.location.lng);
  
  // Convert to meters (very rough approximation)
  const distanceInMeters = (latDiff + lngDiff) * 111000;
  
  // Average walking speed: 1.4 meters per second
  const walkingTimeInSeconds = distanceInMeters / 1.4;
  const walkingTimeInMinutes = Math.round(walkingTimeInSeconds / 60);
  
  return `${walkingTimeInMinutes} minutes`;
};

export const calculateDistance = (lot: ParkingLot, building: Building): string => {
  // Simple mock calculation - would use Google Distance Matrix API in production
  const latDiff = Math.abs(lot.location.lat - building.location.lat);
  const lngDiff = Math.abs(lot.location.lng - building.location.lng);
  
  // Convert to meters (very rough approximation)
  const distanceInMeters = (latDiff + lngDiff) * 111000;
  
  if (distanceInMeters < 1000) {
    return `${Math.round(distanceInMeters)} meters`;
  } else {
    return `${(distanceInMeters / 1000).toFixed(1)} km`;
  }
};