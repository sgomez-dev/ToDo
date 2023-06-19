import styles from './task.module.css'
import { Cards } from '../Card/index'

export function Tasks({ tasks }) {
    return(
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Create tasks</p>
                    <span>10</span>
                </div>

                <div>
                    <p>Completed tasks</p>
                    <span>1 of 10</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map(task => (
                    <Cards key={task.id} task={task} />
                ))}
                
            </div>
        </section>
    )
}