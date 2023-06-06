import api from './api'

interface ResponseAddress {
  statusCode: string
  data: Address
}

interface Address {
  addressId?: number
  number?: number
  cep?: string
  uf?: string
  district?: string
  publicPlace?: string
  complement?: string
}

export async function findAllAddresses (): Promise<ResponseAddress> {
  const response = api.get('/addresses')
    .then((res) => { return { statusCode: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function findAddress (id: number): Promise<ResponseAddress> {
  const response = api.get(`/addresses/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function addAddress (address: Address): Promise<ResponseAddress> {
  const response = api.post('/addresses', address)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function updateAddress (id: number, address: Address): Promise<ResponseAddress> {
  let response

  if (address.addressId != null && address.number != null && address.cep != null && address.uf != null && address.district != null && address.publicPlace != null && address.complement != null) {
    response = api.put(`/addresses/${id}`, address)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  } else {
    response = api.patch(`/addresses/${id}`, address)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  }

  return await response
}

export async function deleteAddress (id: number): Promise<ResponseAddress> {
  const response = api.delete(`/addresses/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}
