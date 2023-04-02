import style from './Clock.module.scss'

interface ClockProps {
  time?: number
}

function Clock({ time = 0}: ClockProps) {
   const minutes = Math.floor(time / 60)
   const seconds = time % 60
   const [minutesInTen, minutesInUnit] = String(minutes).padStart(2, "0")
   const [secondsInTen, secondsInUnit] = String(seconds).padStart(2, "0")

   return (
    <>
      <span className={style.clockNumber}>{minutesInTen}</span>
      <span className={style.clockNumber}>{minutesInUnit}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secondsInTen}</span>
      <span className={style.clockNumber}>{secondsInUnit}</span>
    </>
  )
}

export default Clock
