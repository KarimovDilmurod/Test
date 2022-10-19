import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
}

const ProfileIcon = (props: IProps) => {
  const { color = '#808089', size = 21 } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 21 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.125 8.2C6.125 5.94229 7.85615 4 10.125 4C12.3938 4 14.125 5.94229 14.125 8.2V9.8C14.125 12.0577 12.3938 14 10.125 14C7.85615 14 6.125 12.0577 6.125 9.8V8.2ZM10.125 6C9.08035 6 8.125 6.92331 8.125 8.2V9.8C8.125 11.0767 9.08035 12 10.125 12C11.1697 12 12.125 11.0767 12.125 9.8V8.2C12.125 6.92331 11.1697 6 10.125 6Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.125 0C4.60215 0 0.125 4.47715 0.125 10C0.125 15.5228 4.60215 20 10.125 20C15.6478 20 20.125 15.5228 20.125 10C20.125 4.47715 15.6478 0 10.125 0ZM2.125 10C2.125 5.58172 5.70672 2 10.125 2C14.5433 2 18.125 5.58172 18.125 10C18.125 12.3905 17.0765 14.5362 15.4142 16.0021C14.3369 15.3714 12.8819 15 11.3535 15H8.89488C7.36037 15 5.91378 15.3594 4.83246 15.9992C3.17213 14.5333 2.125 12.389 2.125 10ZM6.83613 17.2949C7.83935 17.7479 8.95273 18 10.125 18C11.2938 18 12.4041 17.7493 13.405 17.2988C12.8114 17.1146 12.1109 17 11.3535 17H8.89488C8.12611 17 7.42613 17.1121 6.83613 17.2949Z"
        fill={color}
      />
    </Svg>
  )
}

export default ProfileIcon
