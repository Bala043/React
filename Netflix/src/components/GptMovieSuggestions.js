import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieName, gptMovies } = gpt;

  if (!movieName || !gptMovies) return null;

  return (
    <div
      className="m-4 bg-black bg-opacity-90 text-white rounded-lg p-4
                 animate-fadeIn"
      style={{ animationDuration: '0.7s', animationTimingFunction: 'ease-in-out' }}
    >
      <div className="space-y-6">
        {movieName.map((movie, index) => (
          <div
            key={movie}
            className="transform transition-transform duration-300 hover:scale-105"
          >
            <MovieList title={movie} movies={gptMovies[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
