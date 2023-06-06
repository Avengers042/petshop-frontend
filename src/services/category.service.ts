import api from './api'

interface ResponseCategory {
  statusCode: string
  data: Category
}

interface Category {
  categoryId?: number
  name?: string
}

export async function findAllCategories (): Promise<ResponseCategory> {
  const response = api.get('/categories')
    .then((res) => { return { statusCode: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function findCategory (id: number): Promise<ResponseCategory> {
  const response = api.get(`/categories/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function addCategory (category: Category): Promise<ResponseCategory> {
  const response = api.post('/categories', category)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function updateCategory (category: Category): Promise<ResponseCategory> {
  let response

  const id = category.categoryId ?? 0

  if (category.name != null) {
    response = api.put(`/categories/${id}`, category)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  } else {
    response = api.patch(`/categories/${id}`, category)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  }

  return await response
}

export async function deleteCategory (id: number): Promise<ResponseCategory> {
  const response = api.delete(`/categories/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}
