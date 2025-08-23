import React, { useState } from 'react';

const MovieCard = () => {
  const [movieList, setMovieList] = useState([]);
  const [newMovie, setNewMovie] = useState('');
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addMovie = () => {
    const trimmedName = newMovie.trim();

    if (trimmedName === '') {
      setError('Movie name cannot be empty.');
      return;
    }

    const isDuplicate = movieList.some(
      (movie) => movie.toLowerCase() === trimmedName.toLowerCase()
    );
    if (isDuplicate) {
      setError('This movie already exists.');
      return;
    }

    setMovieList([...movieList, trimmedName]);
    setNewMovie('');
    setError('');
  };

  const removeMovie = (indexToRemove) => {
    const updatedList = movieList.filter((_, index) => index !== indexToRemove);
    setMovieList(updatedList);
  };

  const filteredMovies = movieList.filter((movie) =>
    movie.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">🎬 My Movie List</h1>

      {/* Add Movie Section */}
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter movie name"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          className="input"
        />
        <button onClick={addMovie} className="add-btn">
          ➕ Add
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔎 Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search"
      />

      <h2 className="subtitle">List of Movies</h2>
      {filteredMovies.length === 0 && (
        <p className="no-movies">No movies found</p>
      )}

      <div className="list">
        {filteredMovies.map((name, index) => (
          <div key={index} className="card">
            <h3 className="movie-name">{name}</h3>
            <button onClick={() => removeMovie(index)} className="remove-btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
