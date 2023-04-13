import { type JSX } from 'solid-js'
import './card.css'

export interface CardInterface {
  className?: string
  children?: JSX.Element
}

export const Card = (props: CardInterface): JSX.Element => {
  const { className } = props

  if (className != null) {
    return (
    <div class={`card ${className}`}>
      {props.children}
    </div>
    )
  }

  return (
    <div class="card">
      {props.children}
    </div>
  )
}
