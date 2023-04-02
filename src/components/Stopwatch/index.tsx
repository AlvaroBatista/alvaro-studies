import { useEffect, useState } from "react"
import { timeToSeconds } from "../../common/utils/time"
import Button from "../Button"
import { ITask } from "../types/task"
import Clock from "./Clock"
import style from './Stopwatch.module.scss'

interface StopWatchProps {
  selected: ITask | undefined
  completedTask: () => void
}
function StopWatch({selected, completedTask}: StopWatchProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected?.time])

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1)
        regressive(counter - 1)
      }
      if (counter === 0) completedTask()
    }, 1000)
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}> Escolha um card e inicie o cronômetro </p>
      <div className={style.clockWrapper}>
      <Clock time={time}/>
      </div>
      <Button onClick={() => regressive(time)}>
        Começar!
      </Button>
    </div>
  )
}

export default StopWatch
