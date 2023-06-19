import styles from './card.module.css'
import { TbTrash } from 'react-icons/tb'

export function Cards({ task }) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div />
            </button>

            <p>{task.title}</p>
            <button className={styles.deleteButton}>
                <TbTrash size={20} />
            </button>
        </div>
    )
}