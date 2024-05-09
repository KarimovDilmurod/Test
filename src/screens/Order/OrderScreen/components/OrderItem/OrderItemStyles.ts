import {StyleSheet} from 'react-native';
import {vs, s, ms} from 'react-native-size-matters';
import R from 'res';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(15),
    paddingVertical: vs(10),
    borderRadius: s(4),
    backgroundColor: '#73C6B6',
  },
  back: {
    paddingHorizontal: s(15),
    paddingVertical: vs(10),
  },
  content: {
    flex: 1,
    paddingHorizontal: s(20),
  },
  title: {
    fontSize: ms(17),
    fontFamily: R.fonts.Poppins.semiBold,
    lineHeight: vs(22),
    color: '#ffffff',
  },
});
