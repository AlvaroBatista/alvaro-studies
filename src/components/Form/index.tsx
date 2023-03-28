import React, { useState } from 'react'
import Button from "../Button";
import { ITask } from '../types/task';
import style from './Form.module.scss'
import {v4 as uuidv4} from 'uuid'

interface FormProps {
  setTaks : React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({setTaks}: FormProps) {
  const [input, setInput] = useState({name: '', time: '00:00:00'})

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTaks(oldTasks =>
      [...oldTasks,
        {
          ...input,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ])
    setInput({name: '', time: '00:00:00'})
  }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          value={input.name}
          onChange={(event) => setInput({name: event.target.value, time: input.time})}
          placeholder="O que você quer estudar"
          required>
        </input>
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1" name="time"
          value={input.time}
          onChange={(event)=> setInput({name: input.name, time: event.target.value})}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required>
        </input>
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  )
}

export default Form;
