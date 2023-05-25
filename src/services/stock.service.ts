import api from './api'

interface ResponseStock {
  statusCode: string
  data: object
}

interface Stock {
  productId?: number
  amount?: number
}

export async function findAllStocks (): Promise<ResponseStock> {
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

export async function updateStock (id: number, stock: Stock): Promise<ResponseStock> {
  let response

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
