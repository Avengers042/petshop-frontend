import { createSignal, useContext, type JSX } from 'solid-js'

import { Button } from '../../components/button'
import { Footer } from '../../components/footer/'
import { Form } from '../../components/form'
import { FormField } from '../../components/form/form-field'
import { NavBar } from '../../components/navbar/'

import { AuthContext } from '../../contexts/AuthContext'

import './login.css'

export const Login = (): JSX.Element => {
  const signIn = useContext(AuthContext)?.signIn
  const [getEmail, setEmail] = createSignal<string>()
  const [getPassword, setPassword] = createSignal<string>()

  const handleEmail = (event: any): void => {
    setEmail(event.target.value)
  }

  const handlePassword = (event: any): void => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: any): void => {
    event.preventDefault()

    try {
      const user = {
        email: getEmail() ?? 'error@email',
        password: getPassword() ?? 'error@password'
      }

      if (signIn === undefined) {
        throw Error('signIn is undefined')
      }

      const sign = async (): Promise<void> => {
        await signIn(user)
      }
      void sign()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <NavBar />
      <main id="login" class="content container">
        <h1>Login</h1>

        <section class="form">
          <Form onSubmit={handleSubmit}>
            <FormField
              id="email"
              name="email"
              type="email"
              text="Email"
              placeholder="Email do usuário"
              value=""
              onChange={handleEmail}
              required
            />
            <FormField
              id="password"
              name="password"
              type="password"
              text="Senha"
              placeholder="Senha do usuário"
              value=""
              onChange={handlePassword}
              required
            />
            <a href="#" class="label">
              Esqueci a senha
            </a>

            <Button className="btn btn-black" type="submit" text="Entrar" />
            <p class="signup">
              Não possui cadastro? <a href="/user-signup">Clique aqui</a>
            </p>
          </Form>
        </section>
      </main>
      <Footer />
    </>
  )
}
