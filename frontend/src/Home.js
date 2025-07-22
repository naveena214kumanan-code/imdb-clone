import React from 'react';
import MovieCard from './MovieCard';
import './Home.css';

const movies = [
  {
    title: 'Interstellar',
    year: 2014,
    description: 'A team travels through a wormhole in space.',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX',
    category: 'Sci-Fi',
    rating: 5,
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    description: 'Batman faces the Joker in Gotham City.',
    poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA',
    category: 'Action',
    rating: 5,
  },
  {
    title: 'Inception',
    year: 2010,
    description: 'A thief steals corporate secrets through dreams.',
    poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw',
    category: 'Sci-Fi',
    rating: 4,
  },
  {
    title: 'Jai Bhim',
    year: 2021,
    description: 'A lawyer fights for justice for a tribal man.',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFbXxEfLTuFL6-r184rnD_o3DzqThzc7naXvOXVLbG6gHyN1Td3CU9hZEi9JjlEiF4G75gSw',
    category: 'Drama',
    rating: 4,
  },
  {
    title: '96',
    year: 2018,
    description: 'Two high school sweethearts meet at a reunion.',
    poster: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJi8r3p1ofcc8GwLAjqrENm2YYAOTGOHSnc7jV9UMtSpR1k12D',
    category: 'Romance',
    rating: 4,
  },
  {
    title: 'Vikram',
    year: 2022,
    description: 'A black ops team takes down a drug syndicate.',
    poster: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVn0y7RuNHnktmebSF6Uf_bv6Ue5ZxMmrRR1I_Yz9Bvs51_P1AMV5ku8qB98PmOVTFK_oh',
    category: 'Action',
    rating: 5,
  },
];

function Home({ addToWatchlist, removeFromWatchlist, watchlist, selectedCategory }) {
  const filteredMovies =
    selectedCategory === 'All'
      ? movies
      : movies.filter((movie) => movie.category === selectedCategory);

  return (
    <div className="home">
      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.title}
            movie={movie}
            addToWatchlist={addToWatchlist}
            removeFromWatchlist={removeFromWatchlist}
            isWatchlisted={watchlist.some((item) => item.title === movie.title)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
