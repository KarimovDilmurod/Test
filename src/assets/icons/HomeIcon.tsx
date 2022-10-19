import React from 'react'
import { ColorValue } from 'react-native'
import { s } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: ColorValue
}

const HomeIcon = (props: IProps) => {
  const { color = '#808089', size = 21 } = props

  return (
    <Svg width={s(size)} height={s(size)} viewBox="0 0 19 18" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.26896 0.204568C9.62695 -0.0681894 10.123 -0.0681894 10.481 0.204568L18.481 6.29981C18.7293 6.48895 18.875 6.78315 18.875 7.09524V17C18.875 17.5523 18.4273 18 17.875 18H12.275C11.7227 18 11.275 17.5523 11.275 17V12.6667H8.475V17C8.475 17.5523 8.02728 18 7.475 18H1.875C1.32272 18 0.875 17.5523 0.875 17V7.09524C0.875 6.78315 1.02071 6.48895 1.26896 6.29981L9.26896 0.204568ZM2.875 7.59051V16H6.475V11.6667C6.475 11.1144 6.92272 10.6667 7.475 10.6667H12.275C12.8273 10.6667 13.275 11.1144 13.275 11.6667V16H16.875V7.59051L9.875 2.25718L2.875 7.59051Z"
        fill={color}
      />
    </Svg>
  )
}

export default HomeIcon
