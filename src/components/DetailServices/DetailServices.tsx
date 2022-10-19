import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Image, Text, View } from 'react-native'

import stylesConfig from './DetailServices.styles'

export const DetailItems = () => {
  const styles = useStyles(stylesConfig)
  return (
    <View style={styles.container}>
      <View style={styles.itemContent}>
        <View style={styles.leftItem}>
          <View style={styles.ImageContainer}>
            <Image
              source={require('../././../assets//images/0.png')}
              style={styles.image}
            />
          </View>

          <View style={styles.leftTextContainer}>
            <View>
              <Text style={styles.topText}>Store Pickup</Text>
            </View>

            <View>
              <Text style={styles.textbottom}>Best quality</Text>
            </View>
          </View>
        </View>

        <View style={styles.brContainer}>
          <View style={styles.br} />
        </View>

        <View style={styles.rightItem}>
          <View style={styles.ImageContainer}>
            <Image
              source={require('../././../assets//images/1.png')}
              style={styles.image}
            />
          </View>

          <View style={styles.leftTextContainer}>
            <View>
              <Text style={styles.topText}>Delivery</Text>
            </View>

            <View>
              <Text style={styles.textbottom}>Allways on time</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
