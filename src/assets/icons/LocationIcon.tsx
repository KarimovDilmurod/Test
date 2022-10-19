import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
}

const LocationIcon = (props: IProps) => {
  const { color = '#1A94FF', size = 21 } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 16 20" fill="none">
      <Path
        d="M7.82609 0C4 0 0 2.95652 0 7.82609C0 12.4348 6.95652 19.4783 7.21739 19.7391C7.3913 19.913 7.56522 20 7.82609 20C8.08696 20 8.26087 19.913 8.43478 19.7391C8.69565 19.4783 15.6522 12.4348 15.6522 7.82609C15.6522 2.95652 11.6522 0 7.82609 0ZM7.82609 10.4348C6.34783 10.4348 5.21739 9.30435 5.21739 7.82609C5.21739 6.34783 6.34783 5.21739 7.82609 5.21739C9.30435 5.21739 10.4348 6.34783 10.4348 7.82609C10.4348 9.30435 9.30435 10.4348 7.82609 10.4348Z"
        fill={color}
      />
    </Svg>
  )
}

export default LocationIcon
