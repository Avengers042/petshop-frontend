import api from './api'

interface ResponseUser {
  statusCode: string
  data: object
}

interface User {
  firstName?: string
  lastName?: string
  cpf?: string
  email?: string
  age?: number
  password?: string
  addressId?: number
}

export async function findAllUsers (): Promise<ResponseUser> {
  const response = api.get('/users')
    .then((res) => { return { statusCode: res.status, data: { ...res.data } } })
    .catch((err) => { return err })

  return await response
}

export async function findUser (id: any): Promise<ResponseUser> {
  const response = api.get(`/users/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function addUser (user: User): Promise<void> {
  const response = api.post('/users', user)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function updateUser (id: any, user: User): Promise<void> {
  let response

  if (user.firstName != null && user.lastName != null && user.cpf != null && user.email != null && user.age != null && user.password != null && user.addressId != null) {
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

export async function deleteUser (id: any): Promise<void> {
  const response = api.delete(`/users/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}
