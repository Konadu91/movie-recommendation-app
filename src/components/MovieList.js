// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const MovieList = () => {
//     const { movies, status } = useSelector((state) => state.movies);
  
//     if (status === 'loading') return <p>Loading...</p>;
  
//     return (
//       <div>
//         {movies.map((movie) => (
//           <div key={movie.id}>
//             <Link to={`/movie/${movie.id}`}>
//               <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
//               <h3>{movie.title}</h3>
//             </Link>
//             <p>Release Date: {movie.release_date}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };
// // import React from 'react';

// // function MovieList() {
// //   return <div>Movie List Component</div>;
// // }
  
//   export default MovieList;



// src/components/MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './MovieList.css';

const MovieList = () => {
  const { movies, status } = useSelector((state) => state.movies);

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </Link>
          <p>Release Date: {movie.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
