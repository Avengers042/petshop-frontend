import api from './api'

interface ResponsePurchase {
  statusCode: string
  data: Purchase
}

interface ResponsePurchaseList {
  statusCode: string
  data: Purchase[]
}

interface Purchase {
  purchaseId?: number
  amount?: number
  shoppingCartId?: number
  userId?: number
  productId?: number
}

export async function findAllPurchases (): Promise<ResponsePurchaseList> {
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

export async function updatePurchase (purchase: Purchase): Promise<ResponsePurchase> {
  let response

  const id = purchase.purchaseId ?? 0

  if (purchase.purchaseId != null && purchase.amount != null && purchase.shoppingCartId != null && purchase.productId != null && purchase.userId != null) {
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
