import { type JSX } from 'solid-js'
import './form-field.css'

interface FormFieldProps {
  id: string
  name: string
  text: string
  type: string
  placeholder: string
}

export const FormField = (props: FormFieldProps): JSX.Element => {
  const { id, name, type, text, placeholder } = props
  return (
    <div class="input-field">
      <label for={id}>{text}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  )
}
