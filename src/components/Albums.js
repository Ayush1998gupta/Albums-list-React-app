import React from 'react';

import classes from './Albums.module.css';

const Albums = (props) => {
  return (
    <li className={classes.albums}>
      <h2>{props.title}</h2>
    </li>
  );
};

export default Albums;
