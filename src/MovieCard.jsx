import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card" style={styles.card}>
      <img src={posterURL} alt={title} style={styles.image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}/10</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    width: '300px',
    margin: '10px',
  },
  image: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
  },
};

export default MovieCard;
