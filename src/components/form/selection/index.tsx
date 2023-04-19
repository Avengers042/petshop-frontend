import { type JSX } from 'solid-js'

interface SelectionInterface
  extends JSX.SelectHTMLAttributes<HTMLSelectElement> {
  text: string
  children: JSX.Element
}

export const Selection = (props: SelectionInterface): JSX.Element => {
  const { text, name, id, children } = props

  return (
    <div class="input-field select-selected">
      <label for={id}>{text}</label>
      <select name={name} id={id}>
      {children}
    </select>
    </div>
  )
}
