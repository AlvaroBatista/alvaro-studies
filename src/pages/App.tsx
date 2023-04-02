import React, { useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'
import StopWatch from '../components/Stopwatch';
import { ITask } from '../components/types/task';
import style from './App.module.scss'

function App() {
  const [tasks, setTaks] = useState<ITask[]>([])
  const [selected, setSelected] = useState<ITask>()

  function selectedTask(selectedTask: ITask) {
    setSelected(selectedTask)
    setTaks(oldTasks => oldTasks.map(task => ({...task, selected: task.id === selectedTask.id})))
  }

  function completedTask() {
    setSelected(undefined)
    if (selected) {
      setTaks(oldTasks => oldTasks.map(tasks => {
        if (tasks.id === selected.id) {
          return {
            ...tasks,
            selected: false,
            completed: true
          }
        }
        return tasks
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTaks={setTaks}/>
      <List tasks={tasks} selectedTask={selectedTask}/>
      <StopWatch selected={selected} completedTask={completedTask}/>
    </div>
  );
}

export default App
