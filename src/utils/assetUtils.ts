import assets, { Asset } from '../assets'

export const getAssetUrl = (name: Asset) => {
  return `/assets/${assets[name].url}`
}

export const getAsset = (name: Asset) => {
  return assets[name]
}
