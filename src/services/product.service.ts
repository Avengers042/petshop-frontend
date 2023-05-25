import api from './api'

interface ResponseProduct {
  statusCode: string
  data: object
}

interface Product {
  productId?: number
  name?: string
  description?: string
  supplierId?: number
}

export async function findAllProducts (): Promise<ResponseProduct> {
  const response = api.get('/products')
    .then((res) => { return { statusCode: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function findProduct (id: number): Promise<ResponseProduct> {
  const response = api.get(`/products/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function addProduct (product: Product): Promise<ResponseProduct> {
  const response = api.post('/products', product)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function updateProduct (id: number, product: Product): Promise<ResponseProduct> {
  let response

  if (product.productId != null && product.name != null && product.description != null && product.supplierId != null) {
    response = api.put(`/products/${id}`, product)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  } else {
    response = api.patch(`/products/${id}`, product)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  }

  return await response
}

export async function deleteProduct (id: number): Promise<ResponseProduct> {
  const response = api.delete(`/products/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}
