import { Canvas } from '@react-three/fiber'
import { VRButton, XR } from '@react-three/xr'
import { MapControls } from '@react-three/drei'
import { HallRoom } from './rooms/HallRoom'

function App() {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <HallRoom />
          <MapControls />
        </XR>
      </Canvas>
    </>
  )
}

export default App
