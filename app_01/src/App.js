import React from 'react';
import Movie from './Movie';
import posterImage from './1.jpg';

function App() {
  const favoriteMovie = {
    title: 'Ведьмак: Кошмар волка',
    director: 'Хан Гван-иль',
    year: 	2021,
    studio: 'Cinesite Netflix',
    poster: posterImage,
  };

  return (
    <div className="app">
      <h1>Favorite Movie</h1>
      <Movie
        title={favoriteMovie.title}
        director={favoriteMovie.director}
        year={favoriteMovie.year}
        studio={favoriteMovie.studio}
        poster={favoriteMovie.poster}
      />  
    </div>
  );
}

export default App;