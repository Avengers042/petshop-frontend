import api from './api'

interface ResponsePurchase {
  statusCode: string
  data: Purchase
}

interface Purchase {
  purchaseId?: number
  productId?: number
  userId?: number
}

// Nova interface, esperando atualização no back
// interface Purchase {
//   purchaseId?: number
//   userId?: number
//   productsId?: number[]
// }

export async function findAllPurchases (): Promise<ResponsePurchase> {
  const response = api.get('/purchases')
    .then((res) => { return { statusCode: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function findPurchase (id: number): Promise<ResponsePurchase> {
  const response = api.get(`/purchases/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function addPurchase (purchase: Purchase): Promise<ResponsePurchase> {
  const response = api.post('/purchases', purchase)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function updatePurchase (id: number, purchase: Purchase): Promise<ResponsePurchase> {
  let response

  if (purchase.purchaseId != null && purchase.productId != null && purchase.userId != null) {
    response = api.put(`/purchases/${id}`, purchase)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  } else {
    response = api.patch(`/purchases/${id}`, purchase)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  }

  return await response
}

export async function deletePurchase (id: number): Promise<ResponsePurchase> {
  const response = api.delete(`/purchases/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}
