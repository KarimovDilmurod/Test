import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Text, View } from 'react-native'
import R from 'res'

import stylesConfig from './HomeScreen.styles'

const HomeScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigation = useSmartNavigation()

  const goDetail = () => {
    // @ts-ignore
    navigation.navigate(R.routes.SCREEN_DETAIL)
  }
  return (
    <View>
      <Text>home</Text>
      <Text onPress={goDetail} style={styles.detail}>
        go Detail screen
      </Text>
    </View>
  )
}

export default HomeScreen
