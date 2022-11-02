import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { VRButton, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { Cloud, MapControls, Sky } from '@react-three/drei'
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
          <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
        </XR>
      </Canvas>
    </>
  )
}

export default App
