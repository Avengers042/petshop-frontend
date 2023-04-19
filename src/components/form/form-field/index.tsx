import { type JSX } from 'solid-js'

interface FormFieldProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
  text: string
  className?: string
}

export const FormField = (props: FormFieldProps): JSX.Element => {
  let className = 'input-field '
  const {
    id,
    name,
    type,
    text,
    step,
    required,
    placeholder,
    minLength,
    maxLength,
    value
  } = props

  if (props.className != null) { className = className.concat(props.className) }

  return (
    <div class={className}>
      <label for={id}>{text}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        step={step}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        value={value}
      />
    </div>
  )
}
