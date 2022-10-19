import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    height: '154@vs',
    justifyContent: 'center',
    backgroundColor: colors.backroundPrimary,
    borderRadius: '10@s',
    marginVertical: '10@vs',
  },
  textbottom: {
    color: colors.textSecondary,
    textAlign: 'center',
    fontSize: '12@s',
  },
  itemContent: {
    height: '122@vs',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  leftItem: {
    justifyContent: 'center',
    width: '139.5@s',
    marginHorizontal: '15@s',
    alignItems: 'center',
  },
  rightItem: {
    width: '139.5@s',
    marginHorizontal: '15@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brContainer: {
    height: '122@vs',
    alignItems: 'center',
    justifyContent: 'center',
  },
  br: {
    width: '1@s',
    height: '50@vs',
    backgroundColor: colors.textSecondary,
  },
  ImageContainer: {
    borderColor: colors.textPrimary,
  },
  image: {
    width: '107@s',
    height: '71@vs',
  },
  leftTextContainer: {
    height: '40@vs',
    // borderColor: colors.textPrimary,
    // borderWidth: '1@s',
    marginTop: '10@s',
    width: '108@s',
    justifyContent: 'center',
  },
  rightTextContainer: {
    height: '40@vs',
    // borderColor: colors.textPrimary,
    // borderWidth: '1@s',
    marginTop: '10@s',
    width: '108@s',
    justifyContent: 'center',
  },
  topText: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '16@s',
  },
}))
