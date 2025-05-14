import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ id, title, year, poster }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={`/posters/${poster}`} alt={title} className="movie-card-img" />
      <div className="movie-card-info">
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
