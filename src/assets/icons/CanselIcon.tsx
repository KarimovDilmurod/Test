import React from 'react';
import {ColorValue} from 'react-native';
import {s, vs} from 'react-native-size-matters/extend';
import Svg, {Rect, Line} from 'react-native-svg';

interface IProps {
  color?: ColorValue;
  size?: number;
}

const CanselIcon = (props: IProps) => {
  const {color = '#d01c1f', size = 24} = props;

  return (
    <Svg
      width={s(size)}
      height={vs(size)}
      viewBox="0 0 24 24"
      fill="white"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Line x1="9" y1="9" x2="15" y2="15" />
      <Line x1="15" y1="9" x2="9" y2="15" />
    </Svg>
  );
};

export default CanselIcon;
