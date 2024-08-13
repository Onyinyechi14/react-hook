import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="container mt-4">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <div className="embed-responsive embed-responsive-16by9 mb-4">
        <iframe 
          className="embed-responsive-item" 
          src={movie.trailerLink} 
          title={movie.title} 
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
