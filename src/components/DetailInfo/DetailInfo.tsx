import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Text, View } from 'react-native'

import stylesConfig from './DetailInfo.styles'

export const DetailInfo = () => {
  const styles = useStyles(stylesConfig)
  return (
    <View style={styles.container}>
      <Text>online</Text>
    </View>
  )
}
