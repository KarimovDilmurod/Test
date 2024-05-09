import {StyleSheet} from 'react-native';
import {vs, s, ms} from 'react-native-size-matters';
import R from 'res';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    paddingHorizontal: s(20),
    paddingVertical: vs(10),
  },
  back: {
    paddingHorizontal: s(15),
    paddingVertical: vs(10),
  },
  itemContent: {
    paddingVertical: vs(10),
    paddingHorizontal: s(5),
    borderRadius: s(8),
    backgroundColor: '#48C9B0',
  },
  title: {
    color: 'white',
    fontSize: ms(16),
    fontFamily: R.fonts.Poppins.semiBold,
    marginBottom: vs(10),
  },
  subTitle: {
    color: '#f2f2f7',
    fontSize: ms(16),
    fontFamily: R.fonts.Poppins.thin,
  },
  infoText: {
    fontSize: ms(18),
    color: '#48C9B0',
    fontFamily: R.fonts.Poppins.thin,
  },
  text: {
    fontSize: ms(18),
    color: '#000',
    fontFamily: R.fonts.Poppins.semiBold,
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
  delete_btn: {
    marginTop: s(10),
  },
});
