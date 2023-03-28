import { ITask } from '../types/task'
import Item from './Item'
import style from './List.module.scss'

interface ListProps {
  tasks: ITask[]
  selectedTask: (selectedTask: ITask) => void
}

function List({ tasks, selectedTask }: ListProps) {
  return (
    <aside className={style.listTasks}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} selectedTask={selectedTask}/>
        ))}
      </ul>
    </aside>
  )
}

export default List
