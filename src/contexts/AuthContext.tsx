import { parseCookies, setCookie } from 'nookies'
import { createContext, createEffect, type JSX } from 'solid-js'
import { createStore } from 'solid-js/store'
import { useNavigate } from 'solid-start/router'

import { recoverUserInformation, signInRequest } from '../services/auth'

export interface User {
  name: string
  email: string
  avatar_url: string
}

interface SignInData {
  email: string
  password: string
}

export interface AuthContextType {
  user: User
  isAutenticated: boolean
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext<AuthContextType>()

export const AuthProvider = (props: any): JSX.Element => {
  const [getUser, setUser] = createStore<User>({ email: 'error', name: 'error', avatar_url: '' })
  const isAutenticated = Boolean(getUser)

  createEffect(() => {
    const { petshop_token: token } = parseCookies()

    if (token.length > 0) {
      recoverUserInformation().then((response) => {
        setUser(response.user)
      })
        .catch(error => { console.log(error) })
    }
  }, [])

  const navigate = useNavigate()

  async function signIn ({ email, password }: SignInData): Promise<void> {
    const { token, user } = await signInRequest({ email, password })

    setCookie(null, 'petshop_token', token, {
      maxAge: 60 * 60 * 1, // 1 hora,
      sameSite: 'lax',
      secure: true
    })

    setUser(user)

    if (isAutenticated) {
      console.log('Autenticado com sucesso')
      navigate('/product-list', { replace: true })
    } else {
      console.log('Não Autenticado, acesso negado')
    }
  }

  return (
    <AuthContext.Provider value={{ user: getUser, isAutenticated, signIn }}>
      {props.children}
    </AuthContext.Provider>
  )
}
