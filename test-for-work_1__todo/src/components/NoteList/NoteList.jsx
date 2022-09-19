import React from 'react';
import styles from './NoteList.module.css'

const NoteList = ({ todo, setTodo, setNoteName , setNoteId, setNoteDescription }) => {

    function editTodo(id, title, description) { // При нажатии на соответствующую кнопку (конкретной заметки) переносит значения по дефолту в импуты в поле для редактирования.
        setNoteId(id)
        setNoteName(title)
        setNoteDescription(description) 
        console.log(id, title, description) 
    }

    function noteListItemDelete(id) { // Удаляет заметку из списка.
        let newTodo = [...todo].filter(item => item.id!==id)
        setTodo(newTodo)    
    }

    function changeStatus(id, color) { // Меняет цвет заметки соот-нно статусу (зел: выполнена, син: в работе, сер: в ожидании)
        let newTodo = [...todo].map (item => {
            if (item.id === id) {
                item.backgroundColor = color            
            }
            return item
        })
            
        setTodo(newTodo)
    }

    return (
        <div className={styles.noteListContainer}>
            <div className={styles.noteList}>
                <div className={styles.title}>
                    <span className={styles.text}>List</span>
                    <div className={styles.underline}/>
                </div>
                <div className={styles.items}> {/*отображает список заметок, перебирая массив стэйта todo*/}
                    {todo.map(item => (
                        <div className={styles.itemContainer} style={{backgroundColor: item.backgroundColor}}>
                            <div className={styles.item} key={item.id}>
                                {
                                    item.title.length>17 // Делает скролл на заметке, если имя превышает ширину.
                                    ?
                                    <div className={styles.itemTextScroll}>{item.title}</div>
                                    :
                                    <div className={styles.itemText}>{item.title}</div>
                                }
                                <div className={styles.buttonsContainer}>
                                    <button onClick={() => editTodo(item.id, item.title, item.description, item.status)} className={styles.itemButton}>
                                        <img src="noteListEditButton.png" alt="" />
                                    </button>

                                    {/*Кнопка редактирования*/}

                                    <button onClick={() => noteListItemDelete(item.id)} className={styles.itemButton}>
                                        <img src="noteListRemoveButton.png" alt="" />                               
                                    </button>

                                    {/*Кнопка удаления*/}

                                    <div className={styles.statusButtonsContainer}>
                                        <button onClick={() => changeStatus(item.id, 'rgba(124, 189, 72, 0.5)')} className={styles.itemButton}>
                                            <img style={{width:30, height:30}} src="noteListStateChangeButton_done.png" alt="" />
                                        </button>

                                        {/* Меняет на статус: выполнена */}

                                        <button onClick={() => changeStatus(item.id, '#497DD5')} className={styles.itemButton}>
                                            <img style={{width:30, height:30}} src="noteListStateChangeButton_inWork.png" alt="" />
                                        </button>

                                        {/* Меняет на статус: в работе */}

                                        <button onClick={() => changeStatus(item.id, '#4D4F53')} className={styles.itemButton}>
                                            <img style={{width:30, height:30}} src="noteListStateChangeButton_waiting.png" alt="" />
                                        </button>

                                        {/* Меняет на статус: в ожидании */}

                                    </div>
                                </div>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NoteList;