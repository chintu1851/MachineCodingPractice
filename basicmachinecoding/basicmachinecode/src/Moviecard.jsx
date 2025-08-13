import React, { useState } from 'react';

const MovieCard = () => {
  const [movieList, setMovieList] = useState([]);
  const [newMovie, setNewMovie] = useState('');
  const [error, setError] = useState('');

  const addMovie = () => {
    const trimmedName = newMovie.trim();

    // Empty check
    if (trimmedName === '') {
      setError('Movie name cannot be empty.');
      return;
    }

    // Duplicate check (case-insensitive)
    const isDuplicate = movieList.some(
      (movie) => movie.toLowerCase() === trimmedName.toLowerCase()
    );
    if (isDuplicate) {
      setError('This movie already exists.');
      return;
    }

    // Add movie
    setMovieList([...movieList, trimmedName]);
    setNewMovie('');
    setError('');
  };

  const removeMovie = (indexToRemove) => {
    const updatedList = movieList.filter((_, index) => index !== indexToRemove);
    setMovieList(updatedList);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter movie name"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
      />
      <button onClick={addMovie}>Add Movie</button>

      {/* Error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <h2>List of Movies</h2>
      {movieList.length === 0 && <p>No movies added yet</p>}

      {movieList.map((name, index) => (
        <div key={index}>
          <h2>{name}</h2>
          <button onClick={() => removeMovie(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
