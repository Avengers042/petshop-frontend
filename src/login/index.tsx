import { Alert, Button, Form, FormControl, FormGroup } from 'solid-bootstrap'
import { createSignal, type JSX, useContext } from 'solid-js'
import { AuthContext } from '../contexts/AuthContext'

export const Login = (): JSX.Element => {
  const signIn = useContext(AuthContext)?.signIn
  const [getEmail, setEmail] = createSignal<string>()
  const [getPassword, setPassword] = createSignal<string>()

  const [getShow, setShow] = createSignal(false)
  const [getMessage, setMessage] = createSignal('')

  const capturaEmail = (event: any): void => {
    setEmail(event.target.value)
  }

  const capturaSenha = (event: any): void => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: any): void => {
    event.preventDefault()

    try {
      if (getEmail() === null || getPassword() === null) { throw new Error('invalid inputs') }
      const user = { email: getEmail() ?? 'error@email', password: getPassword() ?? 'error@password' }

      if (signIn === undefined || user === undefined) { throw Error('signIn is undefined') }

      const sign = async (): Promise<void> => { await signIn(user) }
      void sign()

      setMessage('Login realizado com sucesso!')
      setShow(true)
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message)
        setShow(true)
      }
    }

    setTimeout(() => {
      setShow(false)
    }, 5000)
  }

  return (
    <div class="w-50 m-auto">
      <Alert show={getShow()} variant="success">
        {getMessage()}
      </Alert>

      <h1 class="h3 mb-3 fw-normal">Faça seu Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControl
            id="email"
            type="email"
            name="email"
            class="form-control"
            placeholder="Insira seu email"
            onChange={capturaEmail}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            id="password"
            type="password"
            name="password"
            class="form-control"
            placeholder="Insira sua senha"
            onChange={capturaSenha}
            required
          />
        </FormGroup>

        <Button class="w-50" as="input" type="submit" value="Login" />
      </Form>
    </div>
  )
}
