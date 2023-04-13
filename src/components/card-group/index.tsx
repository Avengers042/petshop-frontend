import { type JSX } from 'solid-js'
import './card-group.css'

export const CardGroup = (props: any): JSX.Element => {
  return (
    <div class="card-group">
      {props.children}
    </div>
  )
}
