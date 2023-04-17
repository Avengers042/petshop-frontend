import { type JSX } from 'solid-js'
import { getURLImage } from '../../services/image-cdn'

interface ImageInterface {
  url: string
  alt: string
}

export const Image = (props: ImageInterface): JSX.Element => {
  const { url, alt } = props

  return (
    <img src={getURLImage(url)} alt={alt} />
  )
}
