import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query) {
      dispatch(fetchMovies(query)); // Dispatch the fetchMovies action with the query
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
