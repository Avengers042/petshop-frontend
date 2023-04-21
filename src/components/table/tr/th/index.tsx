import { type JSX } from 'solid-js'

interface ThInterface {
  children: JSX.Element
  className?: string
}

export const Th = (props: ThInterface): JSX.Element => {
  const { children, className } = props

  return <th class={className}>{children}</th>
}
