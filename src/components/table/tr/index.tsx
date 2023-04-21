import { type JSX } from 'solid-js'

interface TrInterface {
  children: JSX.Element
}

export const Tr = (props: TrInterface): JSX.Element => {
  return <tr>{props.children}</tr>
}
