import React, { useState } from 'react';

import classes from './Albums.module.css';
import Edit from './Edit';

const Albums = (props) => {
  const [isEditing, SetIsEditing] = useState(false);

  

  const editHandler = (isEditing) => {
    SetIsEditing(true);
  };
  const stopEditingHandler = () => {
    SetIsEditing(false);
  };

  const deleteHandler = () => {};
  return (
    <li className={classes.albums}>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div className="icon">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1827/1827933.png"
          alt="logo"
          onClickCapture={editHandler}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
          alt="logo"
          onClick={deleteHandler}
        />
      </div>
      {isEditing && <Edit onCancle={stopEditingHandler} />}
    </li>
  );
};

export default Albums;
