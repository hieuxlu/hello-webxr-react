/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'
import { Door, DoorMaterial } from '../stations/Door'
import { InfoPanel } from '../stations/InfoPanel'
import INFO_DATA from '../stations/InfoPanelsData'
import { getAssetUrl, useTextureAsset } from '../utils/assetUtils'

export function HallModel(props: any) {
  const { nodes, materials } = useGLTF(getAssetUrl('hall_model')) as any
  const lightMapTexture = useTextureAsset('lightmap_tex')
  const foxTexture = useTextureAsset('foxr_tex')
  const skyTexture = useTextureAsset('sky_tex')
  const cloudTexture = useTextureAsset('clouds_tex')
  const mozillamr_tex = useTextureAsset('mozillamr_tex')
  const newsticker_tex = useTextureAsset('newsticker_tex')
  const painting_bosch_tex = useTextureAsset('painting_bosch_tex')
  const painting_degas_tex = useTextureAsset('painting_degas_tex')
  const painting_rembrandt_tex = useTextureAsset('painting_rembrandt_tex')
  const painting_seurat_tex = useTextureAsset('painting_seurat_tex')
  const painting_sorolla_tex = useTextureAsset('painting_sorolla_tex')

  return (
    <group {...props} dispose={null}>
      <group position={[8.14, 2.02, -1.85]}>
        <mesh
          geometry={nodes.bosch.geometry}
          material={materials.default}
          position={[0.14, -0.19, -0.32]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <meshBasicMaterial map={painting_bosch_tex} />
        </mesh>
        <mesh
          geometry={nodes.degas.geometry}
          material={materials.default}
          position={[0.14, -0.91, 4.32]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <meshBasicMaterial map={painting_degas_tex} />
        </mesh>
        <mesh
          geometry={nodes.rembrandt.geometry}
          material={materials.default}
          position={[0.14, -0.42, 2.75]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <meshBasicMaterial map={painting_rembrandt_tex} />
        </mesh>
        <mesh
          geometry={nodes.seurat.geometry}
          material={materials.default}
          position={[0.13, 0.01, 4.32]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <meshBasicMaterial map={painting_seurat_tex} />
        </mesh>
        <mesh
          geometry={nodes.sorolla.geometry}
          material={materials.default}
          position={[0.14, -0.22, -3.79]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <meshBasicMaterial map={painting_sorolla_tex} />
        </mesh>
      </group>
      <group position={[1.7, 0.9, -2.59]}>
        <mesh geometry={nodes.xnote000.geometry} material={materials.default} position={[0, 0.03, 0.48]} />
        <mesh geometry={nodes.xnote001.geometry} material={materials.default} position={[0, 0.03, 0.41]} />
        <mesh geometry={nodes.xnote002.geometry} material={materials.default} position={[0, 0.03, 0.35]} />
        <mesh geometry={nodes.xnote003.geometry} material={materials.default} position={[0, 0.03, 0.28]} />
        <mesh geometry={nodes.xnote004.geometry} material={materials.default} position={[0, 0.03, 0.21]} />
        <mesh geometry={nodes.xnote005.geometry} material={materials.default} position={[0, 0.03, 0.14]} />
        <mesh geometry={nodes.xnote006.geometry} material={materials.default} position={[0, 0.03, 0.07]} />
        <mesh geometry={nodes.xnote007.geometry} material={materials.default} position={[0, 0.02, 0]} />
        <mesh geometry={nodes.xnote008.geometry} material={materials.default} position={[0, 0.03, -0.07]} />
        <mesh geometry={nodes.xnote009.geometry} material={materials.default} position={[0, 0.03, -0.14]} />
        <mesh geometry={nodes.xnote010.geometry} material={materials.default} position={[0, 0.03, -0.21]} />
        <mesh geometry={nodes.xnote011.geometry} material={materials.default} position={[0, 0.03, -0.28]} />
        <mesh geometry={nodes.xnote012.geometry} material={materials.default} position={[0, 0.03, -0.35]} />
        <mesh
          geometry={nodes.xylobolts.geometry}
          material={materials.default}
          position={[0, 0.02, 0.49]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </group>
      <mesh geometry={nodes.foxr.geometry} position={[4.04, 2.68, -7.21]} rotation={[Math.PI / 2, 0, 0]} scale={2.65}>
        <meshBasicMaterial map={foxTexture} transparent />
      </mesh>
      <mesh geometry={nodes.lightpanels.geometry} position={[-4.14, 3.96, 2.76]} rotation={[0, 0, -Math.PI]}>
        <meshBasicMaterial />
      </mesh>
      <mesh geometry={nodes.hall.geometry} position={[-3.42, 0.49, 0.06]}>
        <meshBasicMaterial map={lightMapTexture} />
      </mesh>
      <mesh geometry={nodes.teleport.geometry} position={[-3.42, 0.49, 0.06]} scale={[0.1, 0.5, 0.1]}>
        <meshBasicMaterial visible={false} />
      </mesh>
      <mesh geometry={nodes.sky.geometry} scale={[1, 0.67, 1]}>
        <meshBasicMaterial map={skyTexture} />
      </mesh>
      <mesh geometry={nodes.clouds.geometry} rotation={[0.09, -0.68, 0.04]} scale={[0.75, 0.5, 0.75]}>
        <meshBasicMaterial map={cloudTexture} transparent />
      </mesh>
      <mesh geometry={nodes['xylostick-left'].geometry} position={[1.7, 0.83, -2.03]} rotation={[1.64, -0.02, 0]}>
        <meshBasicMaterial map={lightMapTexture} />
        <mesh geometry={nodes['xylostickball-left'].geometry} position={[0, 0, -0.33]}>
          <meshBasicMaterial map={lightMapTexture} />
        </mesh>
      </mesh>
      <mesh geometry={nodes['xylostick-right'].geometry} position={[1.7, 0.84, -3.01]} rotation={[1.54, 0.06, 0]}>
        <meshBasicMaterial map={lightMapTexture} />
        <mesh geometry={nodes['xylostickball-right'].geometry} position={[0, 0, -0.33]}>
          <meshBasicMaterial map={lightMapTexture} />
        </mesh>
      </mesh>
      <mesh geometry={nodes.screen.geometry} position={[-3.42, 0.49, 0.06]}>
        <meshBasicMaterial map={newsticker_tex} />
      </mesh>
      <mesh
        geometry={nodes.graffiti.geometry}
        material={materials.default}
        position={[-3.42, 0.49, 0.05]}
        scale={[0.99, 1.02, 1]}
      />
      <InfoPanel infoData={INFO_DATA[0]} geometry={nodes.infopanel000.geometry} position={[-1.03, 0.67, -0.56]} />
      <InfoPanel infoData={INFO_DATA[1]} geometry={nodes.infopanel001.geometry} position={[1.3, 0.99, -3.53]} />
      <InfoPanel infoData={INFO_DATA[2]} geometry={nodes.infopanel002.geometry} position={[2.77, 0.67, 0.28]} />
      <InfoPanel infoData={INFO_DATA[3]} geometry={nodes.infopanel003.geometry} position={[-5.03, 0.67, 3.67]} />
      <InfoPanel infoData={INFO_DATA[4]} geometry={nodes.infopanel004.geometry} position={[-4.58, 0.67, -0.71]} />
      <InfoPanel infoData={INFO_DATA[5]} geometry={nodes.infopanel005.geometry} position={[-2.34, 0.67, -6.69]} />
      <InfoPanel infoData={INFO_DATA[6]} geometry={nodes.infopanel006.geometry} position={[2.86, 0.67, -6.28]} />
      <InfoPanel infoData={INFO_DATA[7]} geometry={nodes.infopanel007.geometry} position={[7.65, 0.45, -5.49]} />
      <InfoPanel infoData={INFO_DATA[8]} geometry={nodes.infopanel008.geometry} position={[7.76, 0.45, -2.12]} />
      <InfoPanel infoData={INFO_DATA[9]} geometry={nodes.infopanel009.geometry} position={[7.77, 0.65, 0.93]} />
      <InfoPanel infoData={INFO_DATA[10]} geometry={nodes.infopanel010.geometry} position={[7.59, 0.54, 3.31]} />
      <InfoPanel infoData={INFO_DATA[12]} geometry={nodes.infopanel012.geometry} position={[3.69, 0.67, 5.95]} />
      <InfoPanel infoData={INFO_DATA[13]} geometry={nodes.infopanel013.geometry} position={[-1.82, 0.67, 5.24]} />
      <InfoPanel infoData={INFO_DATA[11]} geometry={nodes.infopanel011.geometry} position={[7.59, 1.19, 3.31]} />
      <InfoPanel infoData={INFO_DATA[14]} geometry={nodes.infopanel014.geometry} position={[6.39, 0.77, -0.49]} />
      {/* <mesh geometry={nodes.infopanel.geometry} position={[3.39, 1.47, 5.95]} /> */}
      <mesh
        geometry={nodes.mozillamr.geometry}
        position={[2.03, 2.27, -7.2]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.18}
      >
        <meshBasicMaterial map={mozillamr_tex} transparent />
      </mesh>
      <InfoPanel infoData={INFO_DATA[15]} geometry={nodes.infopanel015.geometry} position={[0.75, 0.71, 2.19]} />
      <Door geometry={nodes.doorC.geometry} position={[-1.72, 1.47, -7.24]}></Door>
      <Door geometry={nodes.doorA.geometry} position={[4.41, 1.45, 6.74]} rotation={[Math.PI, 0, Math.PI]}></Door>
      <Door geometry={nodes.doorB.geometry} position={[-5.7, 1.41, 2.78]} rotation={[0, 1.57, 0]}></Door>
    </group>
  )
}

useGLTF.preload(getAssetUrl('hall_model'))
