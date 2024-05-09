import {StyleSheet, Dimensions} from 'react-native';
import {vs, s} from 'react-native-size-matters';
import R from 'res';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: vs(5),
    paddingHorizontal: s(5),
    borderRadius: s(3),
    backgroundColor: 'white',
    marginHorizontal: s(10),
  },
  title: {
    color: '#2E4053',
    fontSize: 14,
    fontFamily: R.fonts.Poppins.regular,
    marginTop: vs(5),
  },
  image: {
    width: '100%',
    backgroundColor: '#ECF0F1',
    height: width * 0.4 * 1.35,
    borderRadius: s(3),
  },
  price: {
    color: '#3498DB',
    fontSize: s(13),
    fontFamily: R.fonts.Poppins.regular,
    marginBottom: vs(5),
    fontWeight: '700',
  },
  text_content: {
    paddingHorizontal: s(5),
  },
});
