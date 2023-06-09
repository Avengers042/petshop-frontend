import { createContext, createEffect, type JSX } from 'solid-js'
import { createStore } from 'solid-js/store'
import { useNavigate } from 'solid-start/router'

import { parseCookies, setCookie } from 'nookies'

import { api } from '../services/api'

import { recoverUserInformation, signInRequest } from '../services/auth'

export interface User {
  userId?: number
  firstName?: string
  lastName?: string
  cpf?: string
  email?: string
  birthday?: Date
  password?: string
  addressId?: number
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
  const [user, setUser] = createStore<User>()
  const isAutenticated = Boolean(user)

  createEffect(() => {
    const { petshop_token: token } = parseCookies()

    if (token !== undefined) {
      recoverUserInformation()
        .then((response) => {
          setUser(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])

  const navigate = useNavigate()

  createEffect(() => {
    async function loadStorageData (): Promise<void> {
      const storagedUser = localStorage.getItem('@EPETAuth:user_email')
      const storagedToken = localStorage.getItem('@EPETAuth:token')

      if ((storagedUser != null) && (storagedToken != null)) {
        setUser(JSON.parse(storagedUser))
      }
    }

    void loadStorageData()
  })

  async function signIn ({ email, password }: SignInData): Promise<void> {
    const { token, user } = await signInRequest({ email, password })

    setCookie(null, 'petshop_token', token.data.access_token, {
      maxAge: 60 * 60 * 1, // 1 hora,
      sameSite: 'lax',
      secure: true
    })

    api.defaults.headers.Authorization = `Bearer ${token.data.access_token}`

    localStorage.setItem('@EPETAuth:user_id', JSON.stringify(token.data.id))
    localStorage.setItem('@EPETAuth:user_email', JSON.stringify(user.email))
    localStorage.setItem('@EPETAuth:token', token.data.access_token)

    setUser(user)

    if (isAutenticated) {
      console.log('Autenticado com sucesso')
      navigate('/product-list', { replace: true })
    } else {
      console.log('Não Autenticado, acesso negado')
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAutenticated, signIn }}>
      {props.children}
    </AuthContext.Provider>
  )
}
