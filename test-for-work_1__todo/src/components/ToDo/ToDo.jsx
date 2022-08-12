import React from 'react';
import Top from "../Top/Top";
import NoteList from "../NoteList/NoteList";
import NoteCreate from "../NoteCreate/NoteCreate";
import { useState } from 'react';
import styles from './ToDo.module.css'


const ToDo = () => {
  const [noteName, setNoteName] = useState('')
  const [noteDescription, setNoteDescription] = useState('')
  const [noteStatus, setNoteStatus] = useState('')
  const [noteId, setNoteId] = useState(0)

  const [todo, setTodo] = useState([
    { id: 0, title: 'first note', description: 'Olia', backgroundColor: '#4D4F53' },
    { id: 1, title: 'second note', description: 'Kunilingus', backgroundColor: '#4D4F53' },
    { id: 2, title: 'third note', description: 'Mops', backgroundColor: '#4D4F53' },
    { id: 3, title: 'fourth note', description: 'Musli', backgroundColor: '#4D4F53' },
    { id: 4, title: 'fifth note', description: 'Cirk', backgroundColor: '#4D4F53' },
    { id: 5, title: 'sixth note', description: 'Budilnik', backgroundColor: '#4D4F53' },
    { id: 6, title: 'seventh note', description: 'Zagadka Diri', backgroundColor: '#4D4F53' }
  ]);

  const [value, setValue] = useState('')

  return (
    <div className={styles.toDoContainer}>
      <Top />
      <div className={styles.mainContainer}>
        <NoteList
          todo={todo}
          setTodo={setTodo}
          value={value}
          setValue={setValue}
          noteId={noteId}
          setNoteId={setNoteId}
          noteName={noteName}
          setNoteName={setNoteName}
          noteDescription={noteDescription}
          setNoteDescription={setNoteDescription}
          noteStatus={noteStatus}
          setNoteStatus={setNoteStatus}
        />
        <NoteCreate
          todo={todo}
          setTodo={setTodo}
          value={value}
          setValue={setValue}
          noteId={noteId}
          setNoteId={setNoteId}
          noteName={noteName}
          setNoteName={setNoteName}
          noteDescription={noteDescription}
          setNoteDescription={setNoteDescription}
          noteStatus={noteStatus}
          setNoteStatus={setNoteStatus}
        />
      </div>
    </div>
  );
};

export default ToDo;
