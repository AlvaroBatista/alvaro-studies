import { ITaks } from '../types/task'
import Item from './Item'
import style from './List.module.scss'


function List({ tasks }: {tasks: ITaks[]}) {
  return (
    <aside className={style.listTasks}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item}/>
        ))}
      </ul>
    </aside>
  )
}

export default List
