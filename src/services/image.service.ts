import api from './api'

interface ResponseImage {
  statusCode: string
  data: Image
}

interface ResponseImageList {
  statusCode: string
  data: Image[]
}

interface Image {
  imageId?: number
  imageName?: string
  imageAlt?: string
}

export async function findAllImages (): Promise<ResponseImageList> {
  const response = api.get('/images')
    .then((res) => { return { statusCode: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function findImage (id: number): Promise<ResponseImage> {
  const response = api.get(`/images/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function addImage (image: Image): Promise<ResponseImage> {
  const response = api.post('/images', image)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}

export async function updateImage (image: Image): Promise<ResponseImage> {
  let response

  const id = image.imageId ?? 0

  if (image.name != null && image.alt != null) {
    response = api.put(`/images/${id}`, image)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  } else {
    response = api.patch(`/images/${id}`, image)
      .then((res) => { return { status: res.status, data: res.data } })
      .catch((err) => { return err })
  }

  return await response
}

export async function deleteImage (id: number): Promise<ResponseImage> {
  const response = api.delete(`/images/${id}`)
    .then((res) => { return { status: res.status, data: res.data } })
    .catch((err) => { return err })

  return await response
}
