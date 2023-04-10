import { type JSX } from 'solid-js'
import './button.css'

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  className: string
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { text, type, className } = props

  return (
    <button type={type} class={className}>{text}</button>
  )
}
