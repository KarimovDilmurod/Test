import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './OrderItemStyles';

interface IProps {
  orderNum: string;
}

const OrderItem = ({orderNum}: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Заказ№ {orderNum}</Text>
    </View>
  );
};

export default OrderItem;
