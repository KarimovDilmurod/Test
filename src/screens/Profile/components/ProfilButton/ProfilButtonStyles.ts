import {StyleSheet} from 'react-native';
import {vs, s, ms} from 'react-native-size-matters';
import R from 'res';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: vs(10),
    backgroundColor: 'red',
    borderRadius: s(8),
  },
  text: {
    fontSize: ms(18),
    color: '#ffffff',
    fontFamily: R.fonts.Poppins.semiBold,
    textAlign: 'center',
  },
});
