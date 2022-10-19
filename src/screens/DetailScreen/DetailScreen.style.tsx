import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  lienar: {
    paddingHorizontal: '16@s',
    marginVertical: '10@vs',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor: 'white',
    Left: '20@s',
  },
  leftIcon: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '35@s',
    height: '32@vs',
    borderRadius: '16@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcon: {
    width: '74@s',
    height: '24@vs',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.05)',
    flexDirection: 'row',
    paddingVertical: '15@vs',
    paddingHorizontal: '8@s',
    borderRadius: '20@s',
  },
  verticalLine: {
    width: '1@s',
    height: '15@vs',
    backgroundColor: 'rgba(0,0,0,0.2)',
    // borderWidth: '1@s',
  },
  imageCard: {
    backgroundColor: 'white',
    marginTop: '12@s',
    borderRadius: '10@s',
    marginBottom: '12@vs',
  },
  image: {
    width: '100%',
    height: '343@vs',
    resizeMode: 'stretch',
  },
  titleCard: {
    padding: '16@s',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  heartIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  firsTitle: {
    color: 'black',
    fontWeight: '500',
    fontSize: '16@s',
    lineHeight: '24@vs',
  },
  secondTitle: {
    color: 'black',
    fontWeight: '300',
    fontSize: '14@s',
    lineHeight: '21@vs',
  },
  tesx: {
    color: colors.red,
  },
  scrool: {
    // marginBottom: '20@vs',
    // paddingVertical: '20@vs',
  },
}))
