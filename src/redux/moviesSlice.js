// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { BASE_URL, API_KEY } from '../config';

// export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (query) => {
//   const response = await axios.get(`${BASE_URL}/search/movie`, {
//     params: {
//       api_key: API_KEY,
//       query,
//     },
//   });

//   //console.log(`Fetching from URL: ${BASE_URL}/some/endpoint`);

//   return response.data.results;
// });

// const moviesSlice = createSlice({
//   name: 'movies',
//   initialState: {
//     movies: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMovies.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchMovies.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.movies = action.payload;
//       })
//       .addCase(fetchMovies.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default moviesSlice.reducer;


// src/redux/moviesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../config';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data.results;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
