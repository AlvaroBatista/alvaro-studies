import { useEffect, useState } from "react"
import { timeToSeconds } from "../../common/utils/time"
import Button from "../Button"
import { ITask } from "../types/task"
import Clock from "./Clock"
import style from './Stopwatch.module.scss'

interface StopWatchProps {
  selected: ITask | undefined
}
function StopWatch({selected}: StopWatchProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected?.time])

  return (
    <div className={style.stopwatch}>
      <p className={style.title}> Escolha um card e inicie o cronômetro </p>
      Time: {time}
      <div className={style.clockWrapper}>
      <Clock/>
      </div>
      <Button>
        Começar!
      </Button>
    </div>
  )
}

export default StopWatch
