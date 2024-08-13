import React from 'react';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology...",
    trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    poster: "path_to_inception_poster.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival...",
    trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
    poster: "path_to_interstellar_poster.jpg",
  },
  // Add more movies as needed
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
