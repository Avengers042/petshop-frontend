// Import the Cloudinary class.
import { Cloudinary } from '@cloudinary/url-gen'

const CloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY,
  apiSecret: import.meta.env.VITE_CLOUDINARY_API_SECRET
}

const cld = new Cloudinary({
  cloud: CloudinaryConfig
})

export const getURLImage = (imageUrl: string): string => {
  const myImage = cld.image(imageUrl)
  return myImage.toURL()
}
