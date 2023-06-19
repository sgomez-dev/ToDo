import { Header } from "./components/header/index.jsx"
import { Tasks } from "./components/task/index.jsx"
import { useState } from "react";

function App() {
  const [tasks, setTask] = useState([]);

  function addTask(taskTitle){
    setTask([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }
  return (
    <>
    <Header onAddTask={addTask} />
    <Tasks tasks={tasks} />
    </>
  )
}

export default App
