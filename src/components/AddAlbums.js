import React, { useRef } from 'react';

import classes from './AddAlbums.module.css';

function AddAlbums(props) {
  const titleRef = useRef('');
  function submitHandler(event) {
    event.preventDefault();
    const album = {
      title: titleRef.current.value,
    };

    props.onAddAlbums(album);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <button>Add Album</button>
    </form>
  );
}

export default AddAlbums;
