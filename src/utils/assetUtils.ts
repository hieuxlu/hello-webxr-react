/* eslint-disable react-hooks/rules-of-hooks */
import { useTexture } from '@react-three/drei'
import assets, { Asset } from '../assets'
import { ASSETS_PATH } from '../core/constants'
import { useBasisTexture } from '../hooks/useBasisLoader'

export const getAssetUrl = (name: Asset) => {
  return `${ASSETS_PATH}${assets[name].url}`
}

export const getAsset = (name: Asset) => {
  return assets[name]
}
const loaders: any = {
  gif: (url: string, onLoad?: any) => useTexture(ASSETS_PATH + url, onLoad),
  png: (url: string, onLoad?: any) => useTexture(ASSETS_PATH + url, onLoad),
  jpg: (url: string, onLoad?: any) => useTexture(ASSETS_PATH + url, onLoad),
  basis: (url: string, onLoad?: any) => useBasisTexture({ url: ASSETS_PATH + url }, onLoad)
}

export const useTextureAsset = (name: Asset) => {
  const { url, options } = getAsset(name)
  const ext = url.substring(url.lastIndexOf('.') + 1, url.length).toLowerCase()

  const useLoader: any = loaders[ext]
  const texture = useLoader(url, (tex: any) => {
    if (options) {
      for (const prop in options) {
        tex[prop] = options[prop]
      }
    }
  })

  return texture
}
