


// src/pages/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, API_KEY } from '../config';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(`${BASE_URL}/movie/${id}`, {
          params: {
            api_key: API_KEY,
          },
        });
        setMovie(movieResponse.data);

        const recommendationsResponse = await axios.get(`${BASE_URL}/movie/${id}/recommendations`, {
          params: {
            api_key: API_KEY,
          },
        });
        setRecommendations(recommendationsResponse.data.results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <h3>Cast</h3>
      <ul>
        {movie.cast && movie.cast.map((actor) => <li key={actor.id}>{actor.name}</li>)}
      </ul>
      <h3>Recommendations</h3>
      <div>
        {recommendations.map((recommendedMovie) => (
          <div key={recommendedMovie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${recommendedMovie.poster_path}`}
              alt={recommendedMovie.title}
            />
            <h4>{recommendedMovie.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
