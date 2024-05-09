import {StyleSheet} from 'react-native';
import {vs, s, ms} from 'react-native-size-matters';
import R from 'res';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    paddingHorizontal: s(10),
    paddingVertical: vs(5),
    justifyContent: 'center',
  },
  info_content: {
    paddingHorizontal: s(20),
    paddingVertical: vs(10),
    alignItems: 'center',
  },
  itemContent: {
    paddingVertical: vs(10),
    paddingHorizontal: s(5),
    borderRadius: s(8),
    backgroundColor: '#48C9B0',
  },
  title: {
    color: '#000',
    fontSize: ms(16),
    fontFamily: R.fonts.Poppins.semiBold,
    marginBottom: vs(5),
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
    textAlign: 'center',
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
    color: '#f2f2f7',
    opacity: s(1),
    paddingBottom: vs(5),
  },
  nameInputSize: {
    fontSize: ms(20),
    fontFamily: R.fonts.Poppins.semiBold,
    lineHeight: vs(24),
    paddingBottom: vs(6),
    backgroundColor: '#f2f2f7',
  },
  image: {
    width: s(60),
    height: s(60),
    borderRadius: s(40),
    marginBottom: vs(10),
  },
  btn: {
    marginTop: vs(10),
  },
});
