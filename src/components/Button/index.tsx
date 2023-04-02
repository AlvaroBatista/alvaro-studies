import { ReactNode } from "react"
import style from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
}

function Button({children, type = "button", onClick} : ButtonProps)  {
  return (
    <button onClick={onClick} type={type} className={style.button}>
     {children}
    </button>
  )
}

export default Button
