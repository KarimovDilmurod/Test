import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {styles} from './OrderScreenStyles';
import useSmartNavigation from 'hooks/useSmartNavigation';
import R from 'res';
import {useAppSelector} from 'hooks/redux';
import {getOrder} from 'state/order/selectors';
import OrderItem from './components/OrderItem/OrderItem';

export const OrderScreen = () => {
  const {goBack} = useSmartNavigation();
  const {order} = useAppSelector(getOrder);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => goBack()} style={styles.back}>
        <R.icons.ArrowIcon />
      </TouchableOpacity>

      <View style={styles.content}>
        <FlatList
          data={order}
          ListHeaderComponent={() => (
            <Text style={styles.title}>Список заказы</Text>
          )}
          ItemSeparatorComponent={() => <View style={styles.space} />}
          contentContainerStyle={styles.flatlist_container}
          keyExtractor={(item, index) => item.firstName.toString() + index}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <OrderItem key={index} orderNum={item.id || ''} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
