import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Text, View } from 'react-native'

import stylesConfig from './ProfileScreen.styles'

export default function ProfileScreen() {
  const styles = useStyles(stylesConfig)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>profile</Text>
    </View>
  )
}
