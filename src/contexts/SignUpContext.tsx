import { createContext, type JSX } from 'solid-js'
import { createStore } from 'solid-js/store'
import { useNavigate } from 'solid-start/router'

import { signUpRequest } from '../services/auth'

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

export interface Address {
  addressId?: number
  number?: number
  cep?: string
  uf?: string
  district?: string
  publicPlace?: string
  complement?: string
}

export interface SignUpContextType {
  user: User
  signUp: (user: User, address: Address) => Promise<void>
}

export const SignUpContext = createContext<SignUpContextType>()

export const SignUpProvider = (props: any): JSX.Element => {
  const [user] = createStore<User>()

  const navigate = useNavigate()

  async function signUp (user: User, address: Address): Promise<void> {
    try {
      await signUpRequest(user, address)

      console.log('Cadastrado com sucesso')
      navigate('/login', { replace: true })
    } catch (e) {
      console.log('Não cadastrado, ocorreu algum erro: ', e)
    }
  }

  return (
    <SignUpContext.Provider value={{ user, signUp }}>
      {props.children}
    </SignUpContext.Provider>
  )
}
