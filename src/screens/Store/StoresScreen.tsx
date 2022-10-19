import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Text, View } from 'react-native'

import stylesConfig from './StoresScreen.styles'

const StoresScreen = () => {
  const styles = useStyles(stylesConfig)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stores</Text>
    </View>
  )
}

export default StoresScreen
