/* eslint-disable react/prop-types */
import styles from './task.module.css'
import { Cards } from '../Card/index'

export function Tasks({ tasks, onComplete, onDelete }) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;
    return(
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Active tasks</p>
                    <span>{tasksQuantity}</span>
                </div>

                <div>
                    <p>Completed tasks</p>
                    <span>{completedTasks} of {tasksQuantity}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map(task => (
                    <Cards key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
                ))}
                
            </div>
        </section>
    )
}