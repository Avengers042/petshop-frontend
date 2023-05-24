import api from './api'

interface ResponseUser {
  statusCode: string
  data: object
}

export async function findAllUsers (): Promise<ResponseUser> {
  const response = api.get('/users')
    .then((res) => { return { statusCode: res.status, data: { ...res.data } } })
    .catch((err) => { return err })

  return response
}

export async function findUser (id: any): Promise<ResponseUser> {
  const response = api.get(`/users/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return response
}

// export async function addUser (user: User): Promise<void> {
//   api.get(`/users/${id}`)
//     .then((res) => { return { status: res.status, data: res.data } })
//     .catch((err) => { return err })
// }

// export async function updateUser (user: User): Promise<void> {
//   api.get(`/users/${id}`)
//     .then((res) => { return { status: res.status, data: res.data } })
//     .catch((err) => { return err })
// }

export async function deleteUser (id: any): Promise<void> {
  const response = api.delete(`/users/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return response
}
