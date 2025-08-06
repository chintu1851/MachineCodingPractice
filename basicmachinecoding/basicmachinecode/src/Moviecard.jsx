import React, { useState } from 'react';

const MovieCard = () => {
  const [movieList, setMovieList] = useState([]);
  const [newMovie, setNewMovie] = useState('');

  const addMovie = () => {
    if (newMovie.trim() !== '') {
      setMovieList([...movieList, newMovie]);
      setNewMovie('');
    }
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
