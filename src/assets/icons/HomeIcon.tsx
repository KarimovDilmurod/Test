import React from 'react';
import {ColorValue} from 'react-native';
import {s, vs} from 'react-native-size-matters/extend';
import Svg, {Path, Polyline} from 'react-native-svg';

interface IProps {
  color?: ColorValue;
  size?: number;
}

const HomeIcon = (props: IProps) => {
  const {color = '#333333', size = 22} = props;

  return (
    <Svg
      width={s(size)}
      height={vs(size)}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <Polyline points="9 22 9 12 15 12 15 22" />
    </Svg>
  );
};

export default HomeIcon;
