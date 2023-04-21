import { type JSX } from 'solid-js'

interface TableInterface {
  children: JSX.Element
}

export const Table = (props: TableInterface): JSX.Element => {
  return <table>{props.children}</table>
}
