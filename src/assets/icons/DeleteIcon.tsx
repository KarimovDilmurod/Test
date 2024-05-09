import React from 'react';
import {ColorValue} from 'react-native';
import {s, vs} from 'react-native-size-matters/extend';
import Svg, {Path, Line, Polyline} from 'react-native-svg';

interface IProps {
  color?: ColorValue;
  size?: number;
}

const DeleteIcon = (props: IProps) => {
  const {color = '#d01c1f', size = 22} = props;

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
      <Polyline points="3 6 5 6 21 6" />
      <Path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <Line x1="10" y1="11" x2="10" y2="17" />
      <Line x1="14" y1="11" x2="14" y2="17" />
    </Svg>
  );
};

export default DeleteIcon;
