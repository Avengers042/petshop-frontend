import { lazy } from 'solid-js'

export const LazyImage = lazy(
  async () =>
    await import('../../components/image').then((module) => ({
      default: module.Image
    }))
)
