import axios from 'axios';

export const API_URL = 'https://beaconcha.in/api/v1';

export const getTopValidators = async () => {
  try {
    const response = await axios.get(`${API_URL}/validator/leaderboard`);
    console.log('API Response:', response);
    return response.data.data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};
