// Reference three@0.112.1
// node_modules\three\examples\jsm\loaders\BasisTextureLoader.d.ts
import { CompressedTexture, Loader, LoadingManager, WebGLRenderer } from 'three'

export class BasisTextureLoader extends Loader {
  constructor(manager?: LoadingManager)
  transcoderBinary: ArrayBuffer | null
  transcoderPath: string
  transcoderPending: Promise<void> | null

  workerConfig: {
    format: number
    astcSupported: boolean
    etcSupported: boolean
    dxtSupported: boolean
    pvrtcSupported: boolean
  }
  workerLimit: number
  workerNextTaskID: number
  workerPool: object[]
  workerSourceURL: string

  detectSupport(renderer: WebGLRenderer): this
  dispose(): void
  load(
    url: string,
    onLoad: (texture: CompressedTexture) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void
  ): void
  setTranscoderPath(path: string): this
  setWorkerLimit(workerLimit: number): this
}
