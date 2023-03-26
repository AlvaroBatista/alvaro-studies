import React, { useState } from 'react'
import Form from '../components/Form'
import List from '../components/List'
import StopWatch from '../components/Stopwatch';
import { ITaks } from '../components/types/task';
import style from './App.module.scss'

function App() {
  const [tasks, setTaks] = useState<ITaks[]>([])
  return (
    <div className={style.AppStyle}>
      <Form setTaks={setTaks}/>
      <List tasks={tasks}/>
      <StopWatch />
    </div>
  );
}

export default App
