import { v4 as uuid } from 'uuid'
import { type User } from '../contexts/AuthContext'

interface SignInRequestData {
  email: string
  password: string
}

interface TokenUser {
  token: string
  user: User
}

const delay = async (amount = 750): Promise<void> => {
  void new Promise((resolve) => setTimeout(resolve, amount))
}

interface ReturnUser {
  user: User
}

export const signInRequest = async (data: SignInRequestData): Promise<TokenUser> => {
  await delay()

  const { email } = data

  return {
    token: uuid.toString(),
    user: {
      email,
      name: 'Teste',
      avatar_url: 'https://www.github.com/wesleyclaudino.png'
    }
  }
}

export const recoverUserInformation = async (): Promise<ReturnUser> => {
  await delay()
  const user: User = {
    name: 'Fulano de Tal',
    email: 'fulano@gmail.com',
    avatar_url: 'https://www.github.com/wesleyclaudino.png'
  }

  return {
    user: { ...user }
  }
}
