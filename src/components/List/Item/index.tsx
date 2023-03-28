import { ITask } from '../../types/task'
import style from './Item.module.scss'

interface ItemProps extends ITask {
  selectedTask: (selectedTask: ITask) => void
}

function Item({ selectedTask, name, time, selected, completed, id}: ItemProps ) {
  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ''}`}
      onClick={() => selectedTask({name, time, selected, completed, id})}>
    <h3>{name}</h3>
    <span>{time}</span>
  </li>
  )
}

export default Item
