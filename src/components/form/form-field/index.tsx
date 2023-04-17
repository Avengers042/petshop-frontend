import { type JSX } from 'solid-js'
import './form-field.css'

interface FormFieldProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  text: string
}

export const FormField = (props: FormFieldProps): JSX.Element => {
  const { id, name, type, text, required, placeholder, value } = props

  return (
    <div class="input-field">
      <label for={id}>{text}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} required={required} value={value} />
    </div>
  )
}
