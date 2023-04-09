import { type JSX } from 'solid-js'
import './form-field.css'

interface FormFieldProps {
  id: string
  name: string
  message: string
  type: string
  placeholder: string
}

export const FormField = (props: FormFieldProps): JSX.Element => {
  const { id, name, type, message, placeholder } = props
  return (
    <div class="input-field">
      <label for={id}>{message}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  )
}
