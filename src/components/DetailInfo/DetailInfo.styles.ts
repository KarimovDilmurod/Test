import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    backgroundColor: colors.backroundPrimary,
    width: '343@s',
    height: '156@vs',
    marginVertical: '10@vs',
    borderRadius: '10@s',
    justifyContent: 'center',
  },
  itemContainer: {
    width: '343@s',
    height: '124@vs',
    alignItems: 'center',
  },
  itemPhoneList: {
    width: '343@s',
    height: '62@vs',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemAdressList: {
    width: '343@s',
    height: '62@vs',
    alignItems: 'center',
    justifyContent: 'center',
  },
  adressContent: {
    width: '311@s',
    height: '50@vs',
    flexDirection: 'row',
  },
  phoneContent: {
    width: '311@s',
    height: '50@vs',
    flexDirection: 'row',
  },
  iconContainer: {
    width: '28@s',
    height: '46@vs',
    marginRight: '4@s',
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
    width: '311@s',
    height: '1@vs',
    backgroundColor: colors.textSecondary,
    marginBottom: '13@s',
  },
}))
