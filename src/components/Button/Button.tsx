import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {styles} from './style';
import R from 'res';

interface IProps {
  text?: string;
  disabled?: boolean;
  handler: () => void;
  icon?: boolean;
  loading?: boolean;
  small?: boolean;
}

const Button: React.FC<IProps> = ({
  text,
  disabled,
  handler,
  icon,
  loading,
  small,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[small ? styles.small_content : styles.button_content]}
      disabled={disabled}
      onPress={() => handler()}>
      {loading ? (
        <ActivityIndicator color="#48C9B0" />
      ) : (
        <>
          <Text style={[small ? styles.small_text : styles.text]}>{text}</Text>
          {icon && <R.icons.BagIcon size={small ? 14 : 24} />}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
