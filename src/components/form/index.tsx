import { type JSX } from 'solid-js'
import './form.css'

export const Form = (props: any): JSX.Element => {
  return (
    <form>
      {props.children}
    </form>
  )
}
