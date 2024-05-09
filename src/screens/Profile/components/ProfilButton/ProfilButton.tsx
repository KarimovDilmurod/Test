import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './ProfilButtonStyles';

interface IProps {
  text: string;
  onPress: () => void;
  style?: object;
}
const ProfilButton = ({text, onPress, style}: IProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={0.7}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ProfilButton;
