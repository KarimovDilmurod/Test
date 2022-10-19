import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    flex: 1,
    backgroundColor: colors.backroundSecondary,
  },
  text: {
    color: colors.textPrimary,
  },
}))
