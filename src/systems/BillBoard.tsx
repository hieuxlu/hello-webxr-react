import { MeshProps, useFrame, useThree } from '@react-three/fiber'
import { PropsWithChildren, useRef } from 'react'
import { Group, Material, MathUtils, Mesh, Vector3 } from 'three'

interface IBillBoardProps extends MeshProps {
  showDistance?: number
  follow?: boolean
}

const SHOW_DISTANCE = 4

export const BillBoard = ({
  children,
  follow = true,
  showDistance = SHOW_DISTANCE,
  ...props
}: PropsWithChildren<IBillBoardProps>) => {
  const localRef = useRef<Mesh>(null)
  const { camera } = useThree()
  useFrame(() => {
    if (!follow || !localRef.current) return

    const cameraPosition = new Vector3()
    camera.getWorldPosition(cameraPosition)
    const distance = cameraPosition.distanceTo(localRef.current.position)
    let opacity = 0
    if (distance < showDistance) {
      opacity = MathUtils.clamp(Math.sqrt(SHOW_DISTANCE - distance), 0, 1)
      localRef.current.lookAt(cameraPosition)
    }

    if (localRef.current.material) {
      ;(localRef.current.material as Material).opacity = opacity
    }

    localRef.current.children?.forEach((item) => {
      const mesh: Mesh = item as Mesh
      if (mesh.material) {
        ;(mesh.material as Material).opacity = opacity
      }
    })
  })

  return (
    <mesh ref={localRef} {...props}>
      {children}
    </mesh>
  )
}
