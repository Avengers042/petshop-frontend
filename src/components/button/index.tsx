import { type JSX } from 'solid-js'

export const Button = (props: any): JSX.Element => {
  const { message, type } = props

  return (
    <button type={type}>{message}</button>
  )
}
