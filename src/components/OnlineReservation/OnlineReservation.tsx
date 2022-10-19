import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Image, Text, View } from 'react-native'

import stylesConfig from './OnlineReservation.styles'

export const OnlineReservation = () => {
  const styles = useStyles(stylesConfig)
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.itemContent}>
          <View style={styles.textContainer}>
            <Text style={styles.textTop}>Online reservation</Text>

            <Text style={styles.textBottom}>Table booking</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/2.png')}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
