import { type JSX } from 'solid-js'

export const Form = (props: any): JSX.Element => {
  return (
    <form method="post">
      {props.children}
    </form>
  )
}
