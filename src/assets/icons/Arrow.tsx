import React from 'react';
import {ColorValue} from 'react-native';
import {s, vs} from 'react-native-size-matters/extend';
import Svg, {Line, Polyline} from 'react-native-svg';

interface IProps {
  color?: ColorValue;
  size?: number;
}

const ArrowIcon = (props: IProps) => {
  const {color = '#000', size = 22} = props;

  return (
    <Svg
      width={s(size)}
      height={vs(size)}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Line x1="19" y1="12" x2="5" y2="12" />
      <Polyline points="12 19 5 12 12 5" />
    </Svg>
  );
};

export default ArrowIcon;
