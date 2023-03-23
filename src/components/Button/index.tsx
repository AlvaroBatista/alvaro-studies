import { ReactNode } from "react"
import style from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
}

function Button({children} : ButtonProps)  {
  return (
    <button className={style.button}>
     {children}
    </button>
  )
}

export default Button
