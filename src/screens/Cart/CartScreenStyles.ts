import {StyleSheet} from 'react-native';
import {vs, s, ms} from 'react-native-size-matters';
import R from 'res';

export const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: s(10),
    paddingVertical: vs(10),
  },
  itemContent: {
    paddingVertical: vs(10),
    paddingHorizontal: s(5),
    borderRadius: s(8),
    backgroundColor: '#48C9B0',
    borderWidth: 1,
  },
  title: {
    color: 'white',
    fontSize: ms(16),
    fontFamily: R.fonts.Poppins.semiBold,
    marginBottom: vs(10),
  },
  subTitle: {
    color: '#d01c1f',
    fontSize: ms(16),
    fontFamily: R.fonts.Poppins.thin,
  },
  infoText: {
    fontSize: ms(18),
    color: '#48C9B0',
    fontFamily: R.fonts.Poppins.thin,
  },
  space: {
    height: vs(10),
  },
  flatlist_container: {
    flex: 1,
  },
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: s(20),
    paddingVertical: vs(10),
    alignItems: 'center',
  },
  totalPrice: {
    color: '#d01c1f',
    fontSize: ms(16),
    fontFamily: R.fonts.Poppins.semiBold,
  },
});
