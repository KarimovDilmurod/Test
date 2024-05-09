import React from 'react';
import {ColorValue} from 'react-native';
import {s, vs} from 'react-native-size-matters/extend';
import Svg, {Path, Circle} from 'react-native-svg';

interface IProps {
  color?: ColorValue;
  size?: number;
}

const CartIcon = (props: IProps) => {
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
      <Circle cx="9" cy="21" r="1" />
      <Circle cx="20" cy="21" r="1" />
      <Path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </Svg>
  );
};

export default CartIcon;
