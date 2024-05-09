import {StyleSheet, Dimensions} from 'react-native';
import {vs, s, ms} from 'react-native-size-matters';
import R from 'res';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: s(20),
    paddingVertical: vs(5),
  },
  itemContent: {
    paddingVertical: vs(10),
    paddingHorizontal: s(5),
    borderRadius: s(8),
    backgroundColor: '#48C9B0',
  },
  title: {
    color: '#000',
    fontSize: ms(18),
    fontFamily: R.fonts.Poppins.semiBold,
    marginVertical: vs(10),
  },
  subTitle: {
    color: '#000',
    fontSize: ms(16),
    fontFamily: R.fonts.Poppins.thin,
    marginBottom: vs(10),
  },
  price: {
    color: '#d01c1f',
    fontSize: ms(18),
    fontFamily: R.fonts.Poppins.semiBold,
    marginBottom: vs(10),
  },
  infoText: {
    fontSize: ms(18),
    color: '#48C9B0',
    fontFamily: R.fonts.Poppins.thin,
  },
  back: {
    paddingHorizontal: s(15),
    paddingVertical: vs(10),
  },
  image: {
    width: '100%',
    backgroundColor: '#ECF0F1',
    height: width * 0.4 * 1.65,
    borderRadius: s(3),
  },
});
