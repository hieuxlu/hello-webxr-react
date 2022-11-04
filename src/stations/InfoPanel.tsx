import { Text } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import { BufferGeometry } from 'three'
import { BillBoard } from '../systems/BillBoard'
import { IInfoData } from './InfoPanelsData'

interface IInfoPanelProps extends MeshProps {
  infoData: IInfoData
}

const getBoundBox = (geometry?: BufferGeometry) => {
  let width = 0
  let height = 0
  geometry?.computeBoundingBox()
  if (geometry?.boundingBox) {
    width = geometry.boundingBox.max.x - geometry.boundingBox.min.x
    height = geometry.boundingBox.max.y - geometry.boundingBox.min.y
  }

  return { width, height }
}

export const InfoPanel = ({ geometry, infoData: { title, description, offsety = 0 }, ...props }: IInfoPanelProps) => {
  const { width, height } = getBoundBox(geometry)

  return (
    <BillBoard geometry={geometry} {...props}>
      <meshBasicMaterial color={'#040404'} transparent />
      <Text
        color="#ffffff"
        fontSize={0.05}
        renderOrder={1}
        textAlign="left"
        anchorX="left"
        anchorY="top"
        maxWidth={0.85 * width}
        lineHeight={1.3}
        position={[(-width / 2) * 0.85, (height / 2) * 0.65 + offsety, 0.01]}
      >
        {title + '\n \n' + description}
        <meshBasicMaterial />
      </Text>
    </BillBoard>
  )
}
