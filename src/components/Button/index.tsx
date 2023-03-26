import { ReactNode } from "react"
import style from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
  type?: "button" | "submit" | "reset" | undefined
}

function Button({children, type = "button"} : ButtonProps)  {
  return (
    <button type={type} className={style.button}>
     {children}
    </button>
  )
}

export default Button
