import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useAppSelector, useAppDispatch} from 'hooks/redux';
import {getCart} from 'state/cart/selectors';
import {styles} from './CartScreenStyles';
import R from 'res';
import CartItem from './components/CartItem';
import {clearAllCartAction} from 'state/cart/actions';
import Button from 'components/Button/Button';
import useSmartNavigation from 'hooks/useSmartNavigation';

export const CartScreen = () => {
  const dispatch = useAppDispatch();
  const {cart} = useAppSelector(getCart);
  const {navigate} = useSmartNavigation();

  const totalPrice = cart.reduce((total, item) => {
    return total + +item.price * (item.count || 1);
  }, 0);

  const onClearCart = () => {
    dispatch(clearAllCartAction());
  };

  const onPlaceOrder = () => {
    navigate(R.routes.SCREEN_ORDER_PLACE, {cart});
  };

  const formatPrice = (price: number) => {
    if (isNaN(price)) {
      return price;
    }
    const numberFormat = new Intl.NumberFormat('ru-RU');
    return numberFormat.format(price);
  };

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.header_container}>
        <Text style={styles.totalPrice}>{formatPrice(totalPrice)} руб.</Text>

        <TouchableOpacity onPress={() => onClearCart()}>
          <R.icons.DeleteIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList
          data={cart}
          ItemSeparatorComponent={() => <View style={styles.space} />}
          contentContainerStyle={styles.flatlist_container}
          keyExtractor={(item, index) => item.id.toString() + index}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => <CartItem key={index} item={item} />}
        />

        {cart.length > 0 && <Button text="Заказать" handler={onPlaceOrder} />}
      </View>
    </SafeAreaView>
  );
};
// Подтвердить заказ
