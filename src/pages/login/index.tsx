import { type JSX } from 'solid-js'
import './login.css'
import { NavBar } from '../../components/navbar/'
import { Footer } from '../../components/footer/'
import { Form } from '../../components/form'
import { FormField } from '../../components/form/form-field'

export const Login = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <main id="login" class="content container">
        <h1>Login</h1>

        <section class="form">
          <Form>
            <FormField id="email" name="email" type="email" message="Email" placeholder="Email do usuário" />
            <FormField id="password" name="password" type="password" message="Senha" placeholder="Senha do usuário" />
          </Form>
        </section>

      </main>
      <Footer />
    </>
  )
}
