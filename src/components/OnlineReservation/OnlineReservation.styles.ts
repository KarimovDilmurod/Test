import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    backgroundColor: colors.backroundPrimary,
    height: '104@vs',
    borderRadius: '10@s',
    justifyContent: 'center',
    marginVertical: '10@vs',
  },
  itemContainer: {
    width: '343@s',
    height: '75@vs',
    alignItems: 'center',
  },
  itemContent: {
    width: '311@s',
    height: '74@vs',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    width: '195@s',
    height: '45@vs',
    marginRight: '7@s',
  },
  imageContainer: {},
  image: {
    width: '107@s',
    height: '74@vs',
  },
  textTop: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    fontSize: '17@s',
  },
  textBottom: {
    color: colors.textSecondary,
    fontSize: '12@s',
  },
}))
