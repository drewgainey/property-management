export interface Property {
  id: string;
  name: string;
  address: string;
  type: 'apartment' | 'house' | 'condo' | 'townhouse' | 'commercial';
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  rent: number;
  status: 'available' | 'occupied' | 'maintenance' | 'unavailable';
  description: string;
  amenities: string[];
  images: string[];
  createdAt: string;
  updatedAt: string;
}
