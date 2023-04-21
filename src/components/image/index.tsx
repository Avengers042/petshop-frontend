import { type JSX } from 'solid-js'
import { getURLImage } from '../../services/image-cdn'

export interface ImageInterface {
  url: string
  alt: string
  type: string
}

export const Image = (props: ImageInterface): JSX.Element => {
  const { url, alt, type } = props

  if (type === 'remote') {
    return (
      <img src={getURLImage(url)} alt={alt} />
    )
  } else if (type === 'local') {
    return <img src={url} alt={alt} />
  }
}
