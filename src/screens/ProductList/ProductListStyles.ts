import {StyleSheet} from 'react-native';
import {vs, s, ms} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContent: {
    paddingBottom: vs(50),
    paddingHorizontal: s(7),
  },
  headerContent: {
    paddingVertical: vs(10),
    paddingHorizontal: s(20),
  },
  title: {
    fontSize: ms(18),
    fontWeight: 'bold',
  },
  loadingStyle: {
    marginVertical: vs(20),
  },
  titleContent: {
    alignItems: 'center',
  },
  space: {
    height: vs(10),
  },
  search: {
    paddingVertical: vs(10),
    paddingHorizontal: s(10),
    borderRadius: s(8),
    backgroundColor: '#ffffff',
    marginTop: vs(10),
  },
});
