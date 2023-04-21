import { type JSX } from 'solid-js'

interface TbodyInterface {
  children: JSX.Element
}

export const Tbody = (props: TbodyInterface): JSX.Element => {
  return <tbody>{props.children}</tbody>
}
