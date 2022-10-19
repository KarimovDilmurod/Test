import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  detail: {
    color: colors.blue,
    fontSize: 35,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backroundSecondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.textPrimary,
  },
}))
