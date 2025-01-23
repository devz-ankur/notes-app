import React from 'react';
import Note from '../Note/Note';
import './NoteContainer.css';

const NoteContainer = (props) => {
  const reverseArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);

    }
    return array;
  };
  const notes = reverseArray(props.notes);
  return (
    <div className='note-container'>
      <h2>Your Notes:</h2>
      <div className='note-container-notes custom-scroll'>
        {notes.length > 0 ? (notes?.map((item) => (
          <Note key={item.id} note={item}
            deleteNote={props.deleteNote}
            updateText = {props.updateText}
          />))
        ) : (
          <h3>No Notes Here</h3>
        )}


        {/* {Array(12).fill().map((item, index) => (
          <Note key={index} note={{
            color: "cyan",
            text: `Write Something Here ${index}... `,
            time: "12:00",
          }} />
        ))} */}
      </div>
    </div>
  )
}

export default NoteContainer