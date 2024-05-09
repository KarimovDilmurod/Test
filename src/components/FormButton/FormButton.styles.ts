import {StyleSheet} from 'react-native';
import R from 'res';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: 'red',
  },
  transparent: {
    borderWidth: 1,
    borderColor: '#fffff',
    backgroundColor: '#000',
  },
  disabled: {
    backgroundColor: '#F1948A',
    shadowOpacity: 0,
    elevation: 0,
  },
  disabledSecond: {
    opacity: 0.3,
  },
  text: {
    color: '#000',
    fontSize: 24,
  },
  inputText: {
    color: '#fffff',
    fontSize: 18,
    lineHeight: 24,
    fontFamily: R.fonts.Poppins.regular,
  },
});
