// import './App.css';

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Search from './components/search';
// import Header from './components/Header';
// import Footer from './components/footer';
// import MovieList from './components/MovieList';
// import MovieDetails from './pages/MovieDetails';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         {/* Header component will be displayed on all pages */}
//         <Header />
        
//         {/* Search component could be displayed on all pages if necessary */}
//         <Search />

//         <Routes>
//           {/* Movie list will be shown on the main page */}
//           <Route path="/" element={<MovieList />} />
          
//           {/* Movie details will be shown when a movie is selected */}
//           <Route path="/movie/:id" element={<MovieDetails />} />
//         </Routes>

//         {/* Footer component will be displayed on all pages */}
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;



// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import MovieList from './components/MovieList';
import MovieDetails from './pages/MovieDetails';
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
