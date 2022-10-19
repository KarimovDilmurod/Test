import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
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
