import { type JSX } from 'solid-js'

interface TfootInterface {
  children: JSX.Element
}

export const Tfoot = (props: TfootInterface): JSX.Element => {
  return <tfoot>{props.children}</tfoot>
}
