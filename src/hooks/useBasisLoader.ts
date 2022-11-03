import { useLoader, useThree } from '@react-three/fiber'
import { useLayoutEffect } from 'react'
import { CompressedTexture } from 'three'
import { BasisTextureLoader } from '../lib/BasisTextureLoader'
import { BASIS_LIB_PATH } from '../core/constants'

interface IBasisLoaderOptions {
  transcoderPath?: string
  url: string
}

export const useBasisTexture = (
  { url, transcoderPath = BASIS_LIB_PATH }: IBasisLoaderOptions = {} as any,
  onLoad?: (texture: CompressedTexture) => void
) => {
  const gl = useThree((state) => state.gl)
  const texture = useLoader(BasisTextureLoader, url, (loader) => {
    loader.setTranscoderPath(transcoderPath)
    loader.detectSupport(gl)
  })

  useLayoutEffect(() => {
    onLoad?.(texture)
  }, [onLoad])

  return texture
}

useBasisTexture.preload = (url: string) => useLoader.preload(BasisTextureLoader, url)
