import React from 'react';
import MovieCard from './MovieCard';
import './Watchlist.css';

function Watchlist({ watchlist, removeFromWatchlist }) {
  return (
    <div className="watchlist">
      <h2>🎞️ Your Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <div className="movie-grid">
          {watchlist.map((movie, idx) => (
            <MovieCard
              key={idx}
              movie={movie}
              isInWatchlist={true}
              onRemove={removeFromWatchlist}
              onAdd={() => {}} // Dummy no-op to prevent error
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;
