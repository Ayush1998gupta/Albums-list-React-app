import React, { useRef } from 'react';
import classes from './Edit.module.css';

export default function Edit(props) {
  const titleRef = useRef('');
  function submitHandler(event) {
    event.preventDefault();
    const album = {
      title: titleRef.current.value,
    };
    props.onEditData(album);
  }
  return (
    <form onSubmit={submitHandler} className={classes.edit}>
      <div className={classes.input}>
        <label htmlFor="title"></label>
        <input type="text" id="title" ref={titleRef} placeholder="Title" />
        <button className={classes.btn}>Edit</button>
        <button type="button" onClick={props.onCancle}>
          Cancle
        </button>
      </div>
    </form>
  );
}
