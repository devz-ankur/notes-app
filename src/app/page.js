'use client'

import React, { useEffect, useState } from 'react';


import NoteContainer from '../Components/NoteContainer/NoteContainer';
import Sidebar from '../Components/Sidebar/Sidebar';



const page = () => {
  const [notes, setnotes] = useState([]);

  // Load notes from localStorage on the client side
  useEffect(() => {
    const localData = localStorage.getItem('notes-app');
    if (localData) {
      setnotes(JSON.parse(localData));
    }
  }, []);

  const addNote = ((color) => {
    const tempNotes = [...notes]

    tempNotes.push({
      id: Date.now() + '' + Math.floor(Math.random() * 78),
      color: color,
      text: '',
      time: Date.now()
    });
    setnotes(tempNotes);
  });
  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index === -1) return;
    tempNotes.splice(index, 1);
    setnotes(tempNotes);

  };
  const updateText = (text, id) => {
    console.log(text, id);
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index === -1) return;

    tempNotes[index].text = text;
   
    setnotes(tempNotes);
  }


  useEffect(() => {
    localStorage.setItem('notes-app', JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <div className='app'>
        <Sidebar addNote={addNote} />
        <NoteContainer
          notes={notes}
          deleteNote={deleteNote}
          updateText={updateText}
        />
      </div>
    </>
  )
}

export default page;