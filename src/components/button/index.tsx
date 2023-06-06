import { type JSX } from 'solid-js'

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  className: string
}

export const Button = (props: ButtonProps): JSX.Element => {
  const { text, type, className, onClick } = props

  return (
    <button type={type} class={className} onClick={onClick}>{text}</button>
  )
}
