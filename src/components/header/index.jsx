import styles from'./header.module.css'
import logo from '../../assets/logo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai' 

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} className={styles.logo} />
            <h1>ToDo</h1>
            <form className={styles.newTaskForm}>
                <input type="text" placeholder='Add new task' />
                <button>
                    Create task
                    <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}