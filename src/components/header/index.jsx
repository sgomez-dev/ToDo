import styles from'./header.module.css'
import logo from '../../assets/logo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai' 
import { useState } from 'react'

export function Header({ onAddTask }) {
    const [title, setTitle] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        onAddTask(title);
        setTitle('');
    }
    
    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={logo} className={styles.logo} />
            <h1>ToDo</h1>
            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input type="text" placeholder='Add new task' value={title} onChange={onChangeTitle} />
                <button>
                    Create task
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}