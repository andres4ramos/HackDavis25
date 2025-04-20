export interface Building {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface ParkingLot {
  id: string;
  name: string;
  capacity: number;
  location: {
    lat: number;
    lng: number;
  };
  crowdLevels: {
    [key: string]: {
      [key: string]: string; // "low" | "medium" | "high"
    };
  };
  availableSpots: {
    [key: string]: {
      [key: string]: number;
    };
  };
  permitType: string;
}

export interface ParkingRecommendation {
  lot: ParkingLot;
  distance: string;
  walkingTime: string;
  crowdLevel: string;
  availableSpots: number;
  tip: string;
}