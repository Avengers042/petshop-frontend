import { type JSX } from 'solid-js'

interface TdInterface {
  children: JSX.Element
  className?: string
}

export const Td = (props: TdInterface): JSX.Element => {
  const { children, className } = props

  return <td class={className}>{children}</td>
}
