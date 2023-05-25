import api from './api'

interface ResponseSupplier {
  statusCode: string
  data: object
}

interface Supplier {
  supplierId?: number
  corporateName?: string
  tradeName?: string
  cnpj?: string
  email?: string
  commercialPhone?: number
  addressId?: number
}

export async function findAllSuppliers (): Promise<ResponseSupplier> {
  const response = api.get('/suppliers')
    .then((res) => { return { statusCode: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function findSupplier (id: number): Promise<ResponseSupplier> {
  const response = api.get(`/suppliers/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function addSupplier (supplier: Supplier): Promise<ResponseSupplier> {
  const response = api.post('/suppliers', supplier)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function updateSupplier (id: number, supplier: Supplier): Promise<ResponseSupplier> {
  let response

  if (supplier.supplierId != null && supplier.corporateName != null && supplier.tradeName != null && supplier.cnpj != null && supplier.email != null && supplier.commercialPhone != null && supplier.addressId != null) {
    response = api.put(`/suppliers/${id}`, supplier)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  } else {
    response = api.patch(`/suppliers/${id}`, supplier)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  }

  return await response
}

export async function deleteSupplier (id: number): Promise<ResponseSupplier> {
  const response = api.delete(`/suppliers/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}
