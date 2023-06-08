import api from './api'

interface ResponseUser {
  statusCode: string
  data: User
}

interface ResponseUserList {
  statusCode: string
  data: User[]
}

interface ResponseLogin {
  access_token: string
  token_type: string
}

interface User {
  userId?: number
  firstName?: string
  lastName?: string
  cpf?: string
  email?: string
  birthday?: Date
  password?: string
  addressId?: number
  shoppingCartId?: number
}

export async function findAllUsers (): Promise<ResponseUserList> {
  const response = api.get('/users')
    .then((res) => { return { statusCode: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function findUser (id: number): Promise<ResponseUser> {
  const response = api.get(`/users/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function addUser (user: User): Promise<ResponseUser> {
  const response = api.post('/users', user)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function updateUser (user: User): Promise<ResponseUser> {
  let response

  const id = user.userId ?? 0

  if (user.firstName != null && user.lastName != null && user.cpf != null && user.email != null && user.birthday != null && user.password != null && user.addressId != null && user.shoppingCartId != null) {
    response = api.put(`/users/${id}`, user)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  } else {
    response = api.patch(`/users/${id}`, user)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  }

  return await response
}

export async function deleteUser (id: number): Promise<ResponseUser> {
  const response = api.delete(`/users/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function loginUser (user: User): Promise<ResponseLogin> {
  const response = api.post('/login', user)
    .then(res => { return res })
    .catch((err) => { return err })

  return await response
}

export async function logoutUser (user: User): Promise<ResponseLogin> {
  const response = api.post('/logout', user)
    .then(res => { return res })
    .catch((err) => { return err })

  return await response
}
