import style from '../List.module.scss'

interface ItemProps {
  name: string
  time: string
}

function Item({ name, time}: ItemProps ) {
  return (
    <li className={style.item}>
    <h3>{name}</h3>
    <span>{time}</span>
  </li>
  )
}

export default Item
