import {StyleSheet} from 'react-native';
import {vs, s, ms} from 'react-native-size-matters';
import R from 'res';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: vs(10),
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
  hr: {
    height: vs(10),
  },
  flatlist_container: {
    // flex: 1,
  },
  space: {
    height: vs(40),
  },
});
