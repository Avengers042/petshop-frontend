import { type JSX } from 'solid-js'

interface OptionInterface extends JSX.OptionHTMLAttributes<HTMLOptionElement> {
  text: string
}

export const Option = (props: OptionInterface): JSX.Element => {
  const { value, text } = props
  return <option value={value}>{text}</option>
}
