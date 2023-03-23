import Item from './Item'
import style from './List.module.scss'

function List() {
  const tasks = [
    {
      name: "React",
      time: "02:00:00"
    },
    {
      name: "Javascript",
      time: "01:00:00"
    },
    {
      name: "Typescript",
      time: "03:00:00"
    }
]

  return (
    <aside className={style.listTasks}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item}/>
        ))}
      </ul>
    </aside>
  )
}

export default List
