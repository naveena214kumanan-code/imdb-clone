import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Watchlist from './Watchlist';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleAddToWatchlist = (movie) => {
    if (!watchlist.some((item) => item.title === movie.title)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const handleRemoveFromWatchlist = (title) => {
    setWatchlist(watchlist.filter((movie) => movie.title !== title));
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <header>
        <h1>IMDB Clone 🎬</h1>
        <div className="nav-buttons">
          <Link to="/">Home</Link>
          <Link to="/watchlist">Watchlist ({watchlist.length})</Link>
          <button onClick={toggleDarkMode}>
            {darkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </header>

      <div className="filter-bar">
        <label>Filter by Category:</label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Romance">Romance</option>
        </select>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToWatchlist={handleAddToWatchlist}
              selectedCategory={selectedCategory}
              watchlist={watchlist}
              removeFromWatchlist={handleRemoveFromWatchlist}
            />
          }
        />
        <Route
          path="/watchlist"
          element={
            <Watchlist
              watchlist={watchlist}
              removeFromWatchlist={handleRemoveFromWatchlist}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
