import React from 'react';

import Albums from './Albums';
import classes from './AlbumsList.module.css';

const AlbumsList = (props) => {
  const onEditHAndler = (enteredEdit) => {
    props.onEdit(enteredEdit);
  };

  const onDeleteHandler = (deleteAlbum) => {
    props.onDelete(deleteAlbum);
  };
  return (
    <ul className={classes['albums-list']}>
      {props.albums.map((albums) => (
        <Albums
          key={albums.id}
          title={albums.title}
          id={albums.id}
          userId={albums.userId}
          onEdit={onEditHAndler}
          onDelete={onDeleteHandler}
        />
      ))}
    </ul>
  );
};

export default AlbumsList;
