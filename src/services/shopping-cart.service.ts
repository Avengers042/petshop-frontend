import api from './api'

interface ResponseShoppingCart {
  statusCode: string
  data: ShoppingCart
}

interface ResponseShoppingCartList {
  statusCode: string
  data: ShoppingCart[]
}

interface ShoppingCart {
  shoppingCartId?: number
  productId?: number
  amount?: number
}

export async function findAllShoppingCart (): Promise<ResponseShoppingCartList> {
  const response = api.get('/carts')
    .then((res) => { return { statusCode: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function findShoppingCart (id: number): Promise<ResponseShoppingCart> {
  const response = api.get(`/carts/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function addShoppingCart (shoppingCart: ShoppingCart): Promise<ResponseShoppingCart> {
  const response = api.post('/carts', shoppingCart)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function updateShoppingCart (shoppingCart: ShoppingCart): Promise<ResponseShoppingCart> {
  let response

  const id = shoppingCart.shoppingCartId ?? 0

  if (shoppingCart.shoppingCartId != null && shoppingCart.productId != null && shoppingCart.amount != null) {
    response = api.put(`/carts/${id}`, shoppingCart)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  } else {
    response = api.patch(`/carts/${id}`, shoppingCart)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  }

  return await response
}

export async function deleteShoppingCart (id: number): Promise<ResponseShoppingCart> {
  const response = api.delete(`/carts/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}
