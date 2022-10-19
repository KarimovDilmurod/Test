import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Text, View } from 'react-native'

import stylesConfig from './OrderScreen.styles'

export default function OrderScreen() {
  const styles = useStyles(stylesConfig)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Order</Text>
    </View>
  )
}
