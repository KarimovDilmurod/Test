import {StyleSheet} from 'react-native';
import {vs, s, ms} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  searchContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: s(10),
    paddingVertical: vs(2),
    backgroundColor: '#ffffff',
    borderRadius: s(4),
    alignItems: 'center',
    marginVertical: vs(10),
  },
  search: {
    width: '70%',
    height: vs(30),
    color: '#2C3E50',
    fontSize: ms(14),
    alignItems: 'center',
  },
  searchBtn: {
    backgroundColor: '#82E0AA',
    paddingHorizontal: s(5),
    paddingVertical: vs(5),
    borderRadius: s(4),
    marginRight: s(5),
  },
});
