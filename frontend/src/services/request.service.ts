import axios from 'axios';
import { API_CONFIG } from '../lib/config';

const API_URL = `${import.meta.env.VITE_BACKEND_API}`;

export interface RequestLocation {
  request: {
    location: {
      type: string;
      coordinates: [number, number];
    };
    title: string;
    status: string;
    vehicleInfo: {
      type: string;
      number: string;
      name: string;
    };
    user: {
      name: string;
      mobile: string;
    };
  };
  serviceProviders: Array<{
    id: string;
    name: string;
    type: string;
    contact: {
      mobile: string;
      email: string;
    };
    location: {
      type: string;
      coordinates: [number, number];
    };
  }>;
}

export const requestService = {
  getRequestLocationMap: async (requestId: string): Promise<RequestLocation> => {
    try {
      const response = await axios.get(API_CONFIG.getApiUrl(`request/map/${requestId}`), {
        withCredentials: true
      });
      
      if (response.data.success) {
        return response.data.data;
      }
      throw new Error(response.data.message || 'Failed to fetch request map locations');
    } catch (error) {
      console.error('Error fetching request map locations:', error);
      throw error;
    }
  }
}; 