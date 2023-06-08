import { type Address, type User } from '../contexts/SignUpContext'
import { addUser, loginUser } from '../services/user.service'
import { addAddress } from '../services/address.service'
import { addShoppingCart } from '../services/shopping-cart.service'

interface ReturnSignIn {
  token: Token
  user: User
}

interface ReturnSignUp {
  data: User
  statusCode: string
}

interface Token {
  access_token: string
  token_type: string
}

export const signInRequest = async ({ email, password }: User): Promise<ReturnSignIn> => {
  const user: User = { email, password }

  const token = await loginUser(user) as Token

  return { token, user }
}

export const signUpRequest = async (user: User, address: Address): Promise<ReturnSignUp> => {
  const userToAdd: User = user

  const { data: addressData } = await addAddress(address)

  userToAdd.addressId = addressData.addressId

  if (user.shoppingCartId !== undefined) {
    const { data: shoppingCartData } = await addShoppingCart({})
    userToAdd.shoppingCartId = shoppingCartData.shoppingCartId
  }

  return await addUser(userToAdd)
}

export const recoverUserInformation = async (): Promise<User> => {
  const user: User = {
    firstName: 'Fulano de Tal',
    email: 'fulano@gmail.com'
  }

  return user
}
