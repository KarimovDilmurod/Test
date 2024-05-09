import {StyleSheet, Dimensions} from 'react-native';
import {vs, s, ms} from 'react-native-size-matters';
import R from 'res';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  itemContent: {
    paddingVertical: vs(5),
    paddingHorizontal: s(5),
    borderRadius: s(4),
    backgroundColor: '#FDFEFE',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
  },
  title: {
    color: '#000',
    fontSize: ms(16),
    fontFamily: R.fonts.Poppins.semiBold,
    marginBottom: vs(10),
  },
  subTitle: {
    color: '#d01c1f',
    fontSize: ms(16),
    fontFamily: R.fonts.Poppins.semiBold,
  },
  image: {
    width: 60,
    backgroundColor: '#ECF0F1',
    height: width * 0.1 * 1.7,
    borderRadius: s(3),
  },
  count: {
    color: '#000',
    fontSize: ms(14),
    fontFamily: R.fonts.Poppins.bold,
    textAlign: 'center',
  },
  text_container: {
    paddingHorizontal: s(10),
  },
  icon_content: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});
