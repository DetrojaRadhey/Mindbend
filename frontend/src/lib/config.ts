// API configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_BACKEND_API || 'http://localhost:3000',
  MAPBOX_TOKEN: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
  
  // Helper function to get the full URL for a specific endpoint
  getApiUrl: (endpoint: string): string => {
    const baseUrl = API_CONFIG.BASE_URL;
    // Remove trailing slash from baseUrl if present and leading slash from endpoint if present
    const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.substring(1) : endpoint;
    
    return `${cleanBaseUrl}/${cleanEndpoint}`;
  }
}; 