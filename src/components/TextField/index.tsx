import React from 'react';
import {
  TextInput,
  Text,
  TextStyle,
  StyleProp,
  View,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import R from 'res';

interface IProps {
  textStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;
  error?: boolean;
  title?: string;
  errorText?: string;
  editable?: boolean;
  container?: object;
}

const FormField: React.FC<IProps & TextInputProps> = ({
  textStyle,
  error,
  title,
  errorText,
  inputStyle,
  titleStyle,
  editable = true,
  container,
  ...props
}) => {
  return (
    <View style={[styles.container, container]}>
      {title ? <Text style={[styles.title, titleStyle]}>{title}</Text> : null}

      <TextInput
        {...props}
        style={[styles.input, inputStyle]}
        editable={editable}
        placeholderTextColor="#B3B6B7"
      />

      {error && errorText ? (
        <Text style={[styles.errorText, textStyle]}>{errorText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  title: {
    fontFamily: R.fonts.Poppins.regular,
    fontSize: 14,
    lineHeight: 17,
    marginBottom: 6,
    opacity: 0.64,
    color: '#4F0F90',
  },
  text: {fontSize: 20},
  errorText: {
    fontFamily: R.fonts.Poppins.regular,
    fontSize: 11,
    paddingHorizontal: 4,
    paddingVertical: 2,
    color: 'red',
  },
  required: {},
  input: {
    padding: 0,
    margin: 0,
    fontFamily: R.fonts.Poppins.bold,
    fontSize: 20,
    lineHeight: 41,
    color: '#000000FF',
    backgroundColor: '#FFFFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#000000FF',
  },
  errorInput: {
    borderBottomColor: 'red',
  },
  phone_input: {
    padding: 0,
    margin: 0,
    fontFamily: R.fonts.Poppins.semiBold,
    fontSize: 20,
    lineHeight: 24,
    color: '#000000FF',
    borderBottomWidth: 1,
    borderBottomColor: '#000000FF',
  },
});

export default React.memo(FormField);
