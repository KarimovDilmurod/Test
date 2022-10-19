import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Text, View } from 'react-native'
import R from 'res'

import stylesConfig from './DetailInfo.styles'

export const DetailInfo = () => {
  const styles = useStyles(stylesConfig)
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.itemPhoneList}>
          <View style={styles.phoneContent}>
            <View style={styles.iconContainer}>
              <R.icons.PhoneIcon />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textTop}>Phone number</Text>
              <Text style={styles.textBottom}>0909090909</Text>
            </View>
          </View>
        </View>

        <View style={styles.br} />

        <View style={styles.itemAdressList}>
          <View style={styles.adressContent}>
            <View style={styles.iconContainer}>
              <R.icons.LocationIcon />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textTop}>Address</Text>
              <Text style={styles.textBottom}>
                13 Han Thuyen, D.1, HCM city
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
