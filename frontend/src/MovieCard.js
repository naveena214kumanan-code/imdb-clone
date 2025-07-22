import React from 'react';
import './MovieCard.css';

function MovieCard({ movie, isInWatchlist, onAdd, onRemove }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title} ({movie.year})</h2>
      <p>{movie.description}</p>
      <p><strong>Category:</strong> {movie.category}</p>
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < movie.rating ? 'filled' : ''}>★</span>
        ))}
      </div>
      <button
        className="watchlist-btn"
        onClick={() => isInWatchlist ? onRemove(movie.title) : onAdd(movie)}
      >
        {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
      </button>
    </div>
  );
}

export default MovieCard;
