import { type JSX } from 'solid-js'
import './form.css'

export const Form = (props: any): JSX.Element => {
  const { onSubmit } = props
  return (
    <form onSubmit={onSubmit}>
      {props.children}
    </form>
  )
}
