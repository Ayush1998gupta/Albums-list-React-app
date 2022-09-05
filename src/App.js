import React, { useCallback, useEffect, useState } from 'react';

import AlbumsList from './components/AlbumsList';
import AddAlbums from './components/AddAlbums';
import './App.css';

function App() {
  const [albums, setAlbums] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [error, setError] = useState(null);


  // GET request
  const fetchAlbumsHandler = useCallback(async () => {
    setIsLoding(true);
    setError(null);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/albums'
      );

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      const transformedAlbums = data.map((AlbumsData) => {
        return {
          id: AlbumsData.id,
          title: AlbumsData.title,
        };
      });
      setAlbums(transformedAlbums);
    } catch (error) {
      setError(error.message);
    }
    setIsLoding(false);
  }, []);

  useEffect(() => {
    fetchAlbumsHandler();
  }, [fetchAlbumsHandler]);

  // POST request

  async function addAlbumsHandler(album) {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          body: JSON.stringify(album),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  }

  let content = <p>Found no Albums.</p>;

  if (albums.length > 0) {
    content = <AlbumsList albums={albums} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoding) {
    content = <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <section>
        <AddAlbums onAddAlbums={addAlbumsHandler} />
      </section>
      <section>
        <button onClick={fetchAlbumsHandler}>Fetch albums</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
