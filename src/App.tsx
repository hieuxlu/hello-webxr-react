import { Canvas, useThree } from '@react-three/fiber'
import { VRButton, XR } from '@react-three/xr'
import { MapControls } from '@react-three/drei'
import { HallRoom } from './rooms/HallRoom'
import { useLayoutEffect } from 'react'

const CanvasContent = () => {
  const { camera } = useThree()
  useLayoutEffect(() => {
    camera.position.set(0, 1.6, 4)
    camera.near = 0.005
    camera.far = 10000
  }, [camera])

  return (
    <>
      <pointLight position={[-10, -10, -10]} />
      <directionalLight color={0xeeffff} name="sun" position={[0.2, 1, 0.1]} />
      <directionalLight color={0xfff0ee} name="fillLight" position={[-0.2, -1, -0.1]} intensity={0.3} />
      <HallRoom />
      <MapControls minPolarAngle={1} maxPolarAngle={Math.PI / 2 - 0.1} />
    </>
  )
}

function App() {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <CanvasContent />
        </XR>
      </Canvas>
    </>
  )
}

export default App
