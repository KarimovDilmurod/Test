import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    backgroundColor: colors.backroundPrimary,
    height: '156@vs',
    marginVertical: '10@vs',
    borderRadius: '10@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    height: '124@vs',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemPhoneList: {
    height: '62@vs',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemAdressList: {
    height: '62@vs',
    alignItems: 'center',
    justifyContent: 'center',
  },
  adressContent: {
    height: '50@vs',
    flexDirection: 'row',
  },
  phoneContent: {
    height: '50@vs',
    flexDirection: 'row',
  },
  iconContainer: {
    height: '46@vs',
    marginHorizontal: '10@s',
  },
  textContainer: {
    width: '278@s',
    height: '46@vs',
    paddingHorizontal: '10@s',
  },
  textTop: {
    color: colors.textPrimary,
    fontSize: '14@s',
    marginBottom: '10@s',
  },
  textBottom: {
    color: colors.textPrimary,
    fontSize: '16@s',
    fontWeight: 'bold',
  },
  br: {
    width: '325@s',
    height: '1@vs',
    backgroundColor: colors.textSecondary,
    marginVertical: '8@vs',
  },
}))
