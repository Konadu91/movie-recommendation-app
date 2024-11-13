import axios from 'axios';

// Base URL for the API
const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '4b0a1242b6517969e0716f2b60796018'; // Replace with your actual API key

// Function to fetch movie data by search term
export const fetchMovies = async (searchTerm) => {
  try {
    const response = await axios.get(`${API_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: searchTerm,
      },
    });
    return response.data; // Returning the movie data
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error;
  }
};
