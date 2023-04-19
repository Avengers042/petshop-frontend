import { type JSX } from 'solid-js'

interface TextareaInterface
  extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {
  text: string
}

export const Textarea = (props: TextareaInterface): JSX.Element => {
  const { text, name, id, placeholder, required } = props
  return (
    <div class="input-field">
      <label for={id}>{text}</label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  )
}
