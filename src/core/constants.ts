import { Clock } from 'three'

export const PUBLIC_URL = process.env.PUBLIC_URL || ''
export const BASIS_LIB_PATH = PUBLIC_URL + '/vendor/'
export const ASSETS_PATH = PUBLIC_URL + '/assets/'
export const clock = new Clock()
