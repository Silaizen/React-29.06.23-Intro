import React from 'react';
import Image from './1.jpg';

function App() {
  const musicGroup = {
    name: 'Eagles',
    members: ['Гленн Фрай', 'Дон Хенлі', 'Джо Волш', 'Тімоті Б. Шміт'],
    albums: [
      {
        title: 'Eagles',
        cover: Image,
      },
    ],
  };

  return (
    <div className="app">
      <h1>{musicGroup.name}</h1>
      <h2>Учасники:</h2>
      <ul>
        {musicGroup.members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
      <h2>Альбоми:</h2>
      <div className="album-covers">
        {musicGroup.albums.map((album, index) => (
          <div key={index} className="album-item">
            <h3>{album.title}</h3>
            <img src={album.cover} alt={album.title} className="album-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;