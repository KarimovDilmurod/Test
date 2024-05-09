import {StyleSheet} from 'react-native';
import {vs, s, ms} from 'react-native-size-matters';
import R from 'res';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: vs(20),
  },
  back: {
    paddingHorizontal: s(15),
    paddingVertical: vs(10),
  },
  content: {
    flex: 1,
    paddingHorizontal: s(20),
  },
  input_text: {
    fontSize: ms(17),
    fontFamily: R.fonts.Poppins.regular,
    lineHeight: vs(22),
  },
  textFieldStyle: {
    fontFamily: R.fonts.Poppins.semiBold,
    fontSize: ms(20),
    lineHeight: vs(24),
    color: 'red',
    opacity: s(1),
    paddingBottom: vs(5),
  },
  nameInputSize: {
    fontSize: ms(20),
    fontFamily: R.fonts.Poppins.semiBold,
    lineHeight: vs(24),
    paddingBottom: vs(6),
    backgroundColor: '#EAF0F0',
  },
  btn_text: {
    fontSize: ms(17),
    fontFamily: R.fonts.Poppins.semiBold,
    lineHeight: vs(22),
    color: '#ffffff',
  },
  title: {
    fontSize: ms(17),
    fontFamily: R.fonts.Poppins.semiBold,
    lineHeight: vs(22),
    color: '#000',
    marginBottom: vs(10),
  },
});
