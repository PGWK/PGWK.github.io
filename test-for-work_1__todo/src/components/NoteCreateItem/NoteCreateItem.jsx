import React from 'react'
import styles from './NoteCreateItem.module.css'

const NoteCreateItem = ({ todo, setTodo, noteName, setNoteName, noteDescription, setNoteDescription}) => {

    function cleanUpNoteInfo() { // Чистит поля ввода после сохранения.
        setNoteName('')
        setNoteDescription('')  
    }

    function reWriteNote() { // Перезаписывает описание (перезаписываем state todo).
        let newTodo = [...todo].map (item => {
            if (item.title === noteName) {
                item.description = noteDescription             
            }
            return item
        })
            
        setTodo(newTodo)
        cleanUpNoteInfo()
        
    }

    function saveNoteItem() { // Сохраняет заметку. Добавляет новую в список, если поменялись и название и описание.
        [...todo].find( item => item.title === noteName || item.description === noteDescription )
        ?
        reWriteNote()  // Если поменялось только описание.
        :
        setTodo(  // Добавляет новую в список, если поменялись и название и описание.
            [...todo,
            {
                id: todo.length,
                title: noteName,
                description: noteDescription,
                backgroundColor: '#4D4F53'
            }],
            cleanUpNoteInfo()    
        )         
    }    

    return (
        <div className={styles.noteCreateItemContainer}>
            <div className={styles.topContainer}>
                <div className={styles.top}>
                    <input
                        className={styles.noteNameInput}
                        type="text" placeholder='Note name..'
                        defaultValue={noteName}
                        value={noteName}
                        onChange={ (e) => setNoteName(e.target.value) } />  
                    <div className={styles.date}>
                        <img src="calendar.png" alt="" />
                        <div className={styles.dateValue}>Current Date</div>
                    </div>        
                </div>
                <div className={styles.underline}></div>
            </div>
            <textarea
                className={styles.noteDescriptionInput}
                placeholder="Description..."
                type={'text'}
                value={noteDescription}
                onChange={ (e) => setNoteDescription(e.target.value)}></textarea>
            <div className={styles.bottomContainer}>
                <div className={styles.buttonsContainer}> 
                    <button onClick={() => saveNoteItem()} style={{background:'none', border:'none'}}>
                        <img style={{width:80, height:80}} src="noteItemAcceptButton.png" alt="" /> 
                    </button>

                    {/* (Кнопка с галочкой в поле редактирования) - добавляет или обновляет заметки */}

                    <button onClick={() => cleanUpNoteInfo()} style={{background:'none', border:'none'}}> 
                        <img style={{width:80, height:80}} src="noteItemRemoveButton.png" alt="" />
                    </button>

                    {/* (Кнопка с крестиком в поле редактирования) - стирает все введенные значения в полях ввода в заметке*/}

                </div>
            </div>
        </div>
    )
}

export default NoteCreateItem 