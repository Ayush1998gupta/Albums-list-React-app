import React from 'react';

import Albums from './Albums';
import classes from './AlbumsList.module.css';

const AlbumsList = (props) => {
  return (
    <ul className={classes['albums-list']}>
      {props.albums.map((albums) => (
        <Albums
          key={albums.id}
          title={albums.title}
        />
      ))}
    </ul>
  );
};

export default AlbumsList;
