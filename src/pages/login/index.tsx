import { type JSX } from 'solid-js'
import './login.css'
import { NavBar } from '../../components/navbar/'
import { Footer } from '../../components/footer/'
import { Form } from '../../components/form'
import { FormField } from '../../components/form/form-field'
import { Button } from '../../components/button'

export const Login = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <main id="login" class="content container">
        <h1>Login</h1>

        <section class="form">
          <Form>
            <FormField id="email" name="email" type="email" text="Email" placeholder="Email do usuário" />
            <FormField id="password" name="password" type="password" text="Senha" placeholder="Senha do usuário" />
            <a href="#" class="label">Esqueci a senha</a>

            <Button className="black" type="submit" text="Entrar" />
            <p class="signup">Não possui cadastro? <a href="#">Clique aqui</a></p>
          </Form>
        </section>

      </main>
      <Footer />
    </>
  )
}
