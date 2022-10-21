import { DetailInfo } from 'components/DetailInfo/DetailInfo'
import { DetailServices } from 'components/DetailServices/DetailServices'
import { OnlineReservation } from 'components/OnlineReservation/OnlineReservation'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Carousel from 'react-native-reanimated-carousel'
import R from 'res'
import { BackIcon, CloseIcon, DodsIcon, HeartIcon } from 'res/icons'

import styleConfig from './DetailScreen.style'

const { width } = Dimensions.get('screen')

const DetailScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  console.log(activeIndex)

  const [data] = useState([
    {
      url: require('../../assets/images/001.jpeg'),
    },
    {
      url: require('../../assets/images/004.png'),
    },
    {
      url: require('../../assets/images/003.jpeg'),
    },
    {
      url: require('../../assets/images/002.jpg'),
    },
  ])
  const styles = useStyles(styleConfig)
  const navigation = useSmartNavigation()

  const back = () => {
    // @ts-ignore
    navigation.navigate(R.routes.STACK_HOME)
  }
  return (
    <ScrollView style={styles.scrool}>
      <LinearGradient
        colors={['#F5F5F5', 'white']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.lienar}>
        <StatusBar backgroundColor={'#FFFFFF'} />
        <View style={styles.header}>
          <TouchableOpacity style={styles.leftIcon} onPress={back}>
            <BackIcon />
          </TouchableOpacity>
          <View style={styles.rightIcon}>
            <DodsIcon />
            <View style={styles.verticalLine} />
            <CloseIcon />
          </View>
        </View>

        <View style={styles.imageCard}>
          <Carousel
            loop={false}
            data={data}
            renderItem={({ item, index }) => (
              <View key={index} style={styles.image}>
                <Image source={item.url} style={styles.image} />
              </View>
            )}
            width={width}
            height={340}
            onSnapToItem={index => setActiveIndex(index + 1)}
          />

          <View style={styles.imageLenth}>
            <Text style={styles.text}>{`${activeIndex}/${data.length}`}</Text>
          </View>

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
        <DetailServices />

        <OnlineReservation />

        <DetailInfo />
      </LinearGradient>
    </ScrollView>
  )
}

export default DetailScreen
