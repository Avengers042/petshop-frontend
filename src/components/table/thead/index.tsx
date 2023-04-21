import { type JSX } from 'solid-js'

interface TheadInterface {
  children: JSX.Element
}

export const Thead = (props: TheadInterface): JSX.Element => {
  return <thead>{props.children}</thead>
}
