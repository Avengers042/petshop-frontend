import api from './api'

interface ResponseStock {
  statusCode: string
  data: Stock
}

interface ResponseStockList {
  statusCode: string
  data: Stock[]
}

interface Stock {
  productId?: number
  amount?: number
}

export async function findAllStocks (): Promise<ResponseStockList> {
  const response = api.get('/stocks')
    .then((res) => { return { statusCode: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function findStock (id: number): Promise<ResponseStock> {
  const response = api.get(`/stocks/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function addStock (stock: Stock): Promise<ResponseStock> {
  const response = api.post('/stocks', stock)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function updateStock (stock: Stock): Promise<ResponseStock> {
  let response

  const id = stock.productId ?? 0

  if (stock.productId != null && stock.amount != null) {
    response = api.put(`/stocks/${id}`, stock)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  } else {
    response = api.patch(`/stocks/${id}`, stock)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  }

  return await response
}

export async function deleteStock (id: number): Promise<ResponseStock> {
  const response = api.delete(`/stocks/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}
