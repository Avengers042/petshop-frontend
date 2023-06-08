import { v4 as uuid } from 'uuid'
import { type Address, type User } from '../contexts/SignUpContext'
import { addUser } from '../services/user.service'
import { addAddress } from '../services/address.service'
import { addShoppingCart } from '../services/shopping-cart.service'

interface ReturnSignIn {
  token: string
  user: User
}

interface ReturnSignUp {
  data: User
  statusCode: string
}

export const signInRequest = async ({ email, password }: User): Promise<ReturnSignIn> => {
  const user: User = { email, password }

  return { token: uuid.toString(), user }
}

export const signUpRequest = async (user: User, address: Address): Promise<ReturnSignUp> => {
  const userToAdd: User = user

  const { data: addressData } = await addAddress(address)

  userToAdd.addressId = addressData.addressId

  const { data: shoppingCartData } = await addShoppingCart({})

  userToAdd.shoppingCartId = shoppingCartData.shoppingCartId

  return await addUser(userToAdd)
}

export const recoverUserInformation = async (): Promise<User> => {
  const user: User = {
    firstName: 'Fulano de Tal',
    email: 'fulano@gmail.com'
  }

  return user
}
