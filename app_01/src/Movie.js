import React from 'react';

function Movie(props) {
  const { title, director, year, studio, poster } = props;

  return (
    <div className="movie">
      <img src={poster} alt={title} />
      <h2>{title}</h2>
      <p>Director: {director}</p>
      <p>Year: {year}</p>
      <p>Studio: {studio}</p>
    </div>
  );
}

export default Movie;