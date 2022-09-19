import React from 'react';
import NoteCreateItem from '../NoteCreateItem/NoteCreateItem'
import styles from './NoteCreate.module.css';

const NoteCreate = ({ todo, setTodo, noteName, setNoteName, noteDescription, setNoteDescription, setValue }) => {

    return (
        <div className={styles.noteCreateContainer}>
            <div className={styles.title}>
                <div className={styles.text}>Creation</div>
                <div className={styles.underline} />
            </div>
            <div className={styles.searchContainer}>
                <div className={styles.search}>
                    <div
                        className={styles.searchIcon}>
                            <img src="noteSearchButton.png" alt="" />
                    </div>
                    <input
                        className={styles.searchInput}
                        type={'text'}
                        onChange={(e) => setValue(e.target.value)} // Записываем значение инпута в строке поиска по имени в state.
                        placeholder='Search for note name..' />
                </div>
            </div>    
            <NoteCreateItem 
                todo={todo} 
                setTodo={setTodo} 
                noteName={noteName} 
                setNoteName={setNoteName} 
                noteDescription={noteDescription} 
                setNoteDescription={setNoteDescription}
            />
        </div>
    );
};

export default NoteCreate;