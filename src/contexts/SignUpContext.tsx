import { parseCookies } from 'nookies'
import { createContext, createEffect, type JSX } from 'solid-js'
import { createStore } from 'solid-js/store'
import { useNavigate } from 'solid-start/router'

import { recoverUserInformation, signInRequest } from '../services/auth'

interface User {
  email: string
  name: string
}

interface SignUpData {
  email: string
  password: string
}

export const SignUpContext = createContext()

export const SignUpProvider = (props: any): JSX.Element => {
  const [getUser, setUser] = createStore<User>({
    email: 'error',
    name: 'error'
  })
  const registered = Boolean(getUser)

  createEffect(() => {
    const { petshop_token: token } = parseCookies()

    if (token.length > 0) {
      recoverUserInformation()
        .then((response) => {
          setUser(response.user)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])

  const navigate = useNavigate()

  async function signUp ({ email, password }: SignUpData): Promise<void> {
    const { token, user } = await signInRequest({ email, password })

    if (registered) {
      console.log('Cadastrado com sucesso')
      navigate('/login', { replace: true })
    } else {
      console.log('Não Cadastrado, ocorreu algum erro')
    }
  }

  return (
    <SignUpContext.Provider value={{ user: getUser, registered, signUp }}>
      {props.children}
    </SignUpContext.Provider>
  )
}
