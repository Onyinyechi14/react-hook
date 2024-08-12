// src/App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'https://image-url.com/inception.jpg',
      rating: 8.8,
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc.',
      posterURL: 'https://image-url.com/darkknight.jpg',
      rating: 9.0,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = () => {
    const newMovie = {
      title: prompt('Enter the movie title:'),
      description: prompt('Enter the movie description:'),
      posterURL: prompt('Enter the poster URL:'),
      rating: parseFloat(prompt('Enter the movie rating (0-10):')),
    };
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <div className="App" style={styles.app}>
      <h1>My Favorite Movies</h1>
      <Filter
        onTitleChange={(title) => setFilterTitle(title)}
        onRatingChange={(rating) => setFilterRating(Number(rating))}
      />
      <button onClick={addMovie} style={styles.button}>Add New Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
}

const styles = {
  app: {
    padding: '20px',
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    marginBottom: '20px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #ddd',
    backgroundColor: '#007bff',
    color: '#fff',
  },
};

export default App;
