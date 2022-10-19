// import Container from 'components/Container/Container'
import { DetailInfo } from 'components/DetailInfo/DetailInfo'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Image, StatusBar, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { BackIcon, CloseIcon, DodsIcon, HeartIcon } from 'res/icons'

import styleConfig from './DetailScreen.style'

const DetailScreen = () => {
  const styles = useStyles(styleConfig)
  return (
    <LinearGradient
      colors={['#F5F5F5', 'white']}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.lienar}>
      <StatusBar backgroundColor={'#FFFFFF'} />
      <View style={styles.header}>
        <View style={styles.leftIcon}>
          <BackIcon />
        </View>
        <View style={styles.rightIcon}>
          <DodsIcon />
          <View style={styles.verticalLine} />
          <CloseIcon />
        </View>
      </View>

      <View style={styles.imageCard}>
        <Image
          source={require('./../../assets/images/image.png')}
          style={styles.image}
        />

        <View style={styles.titleCard}>
          <View>
            <Text style={styles.firsTitle}>SB Han Thuyen</Text>
            <Text style={styles.secondTitle}>Open: 07:00 22:00</Text>
          </View>
          <View style={styles.heartIcon}>
            <HeartIcon />
          </View>
        </View>
      </View>
      <DetailInfo />
    </LinearGradient>
  )
}

export default DetailScreen
