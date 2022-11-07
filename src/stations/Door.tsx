import { MeshProps, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh, ShaderMaterial, ShaderMaterialParameters } from 'three'
import { clock } from '../core/constants'
import { shaders } from '../lib/shaders'
import { getAsset, useTextureAsset } from '../utils/assetUtils'

export const DoorMaterial = () => {
  const doorfx_tex = useTextureAsset('doorfx_tex')
  const ref = useRef<ShaderMaterial>(null)

  useFrame((state, delta, frame) => {
    if (!ref.current) return

    ref.current.uniforms.time.value = frame
  })

  return (
    <shaderMaterial
      ref={ref}
      args={[
        {
          uniforms: {
            time: { value: 0 },
            selected: { value: 0 },
            tex: { value: doorfx_tex }
          },
          vertexShader: shaders.basic_vert,
          fragmentShader: shaders.door_frag
        } as ShaderMaterialParameters
      ]}
    ></shaderMaterial>
  )
}

export const Door = ({ ...props }: MeshProps) => {
  const ref = useRef<Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return

    const delta = clock.getDelta()
    const elapsedTime = clock.elapsedTime
    const shaderMaterial = ref.current.material as ShaderMaterial
    shaderMaterial.uniforms.time.value = elapsedTime

    const zScale = ref.current.scale.z
    if (zScale > 1) {
      ref.current.scale.z = Math.max(zScale - delta * zScale, 1)
    }
  })

  return (
    <mesh ref={ref} {...props}>
      <DoorMaterial />
    </mesh>
  )
}
