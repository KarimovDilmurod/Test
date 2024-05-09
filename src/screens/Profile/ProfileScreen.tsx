import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useAppSelector} from 'hooks/redux';
import {getUser} from 'state/user/selectors';
import {styles} from './ProfileScreenStyles';
import FastImage from 'react-native-fast-image';
import ProfilButton from './components/ProfilButton/ProfilButton';
import useSmartNavigation from 'hooks/useSmartNavigation';
import R from 'res';

export const ProfileScreen = () => {
  const {navigate} = useSmartNavigation();
  const {user} = useAppSelector(getUser);

  const toCreateProfil = () => {
    navigate(R.routes.SCREEN_CREATE_PROFILE);
  };

  const toOrder = () => {
    navigate(R.routes.SCREEN_ORDER);
  };

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
        <View style={styles.info_content}>
          <FastImage
            source={require('../../assets/images/avatar.jpg')}
            style={styles.image}
          />
          <Text style={styles.title}>{user?.lastName || 'LastsName'}</Text>

          <Text style={styles.title}>{user?.firstName || 'FirstName'}</Text>
        </View>

        <View style={{paddingHorizontal: 40}}>
          <ProfilButton text={'Настройка аккаунта'} onPress={toCreateProfil} />

          <ProfilButton
            style={styles.btn}
            text={'Мои заказы'}
            onPress={toOrder}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
