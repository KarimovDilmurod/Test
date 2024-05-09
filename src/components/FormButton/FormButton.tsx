import React from 'react';
import {useFormikContext} from 'formik';
import {styles} from './FormButton.styles';
import {ActivityIndicator, TouchableOpacity, Text} from 'react-native';

interface IProps {
  text: string;
  onPress?: (() => void) | undefined;
  transparent?: boolean;
  style?: object;
  textStyle?: object;
  loading?: boolean;
  disabled?: boolean;
  disabledSecondStyle?: boolean;
  disableSubmit?: boolean;
}

const FormButton = ({
  text,
  onPress,
  transparent = false,
  style,
  textStyle,
  loading = false,
  disabled = false,
  disableSubmit = false,
  disabledSecondStyle = false,
}: IProps) => {
  const form = useFormikContext();

  const onSubmitPress = () => {
    if (!disableSubmit) {
      form.handleSubmit();
    }

    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled || loading || !form.isValid}
      style={[
        styles.button,
        transparent ? styles.transparent : {},
        (disabled || !form.isValid) &&
          (disabledSecondStyle ? styles.disabledSecond : styles.disabled),
        style,
      ]}
      onPress={onSubmitPress}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[styles.inputText, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default FormButton;
