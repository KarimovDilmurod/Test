import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IProduct} from 'types/data';
import {styles} from './CartItemStyles';
import FastImage from 'react-native-fast-image';
import R from 'res';
import {useAppDispatch} from 'hooks/redux';
import {clearCartAction} from 'state/cart/actions';
import useSmartNavigation from 'hooks/useSmartNavigation';

interface IProps {
  item: IProduct;
  order?: boolean;
}

export const CartItem = ({item, order}: IProps) => {
  const dispatch = useAppDispatch();
  const {navigate} = useSmartNavigation();

  const onDetail = () => {
    navigate(R.routes.SCREEN_PRODUCT_DETAIL, {product: item});
  };

  const onDelete = () => {
    dispatch(clearCartAction(item));
  };
  const formatPrice = (price: string) => {
    if (isNaN(Number(price))) {
      return price;
    }
    const numberFormat = new Intl.NumberFormat('ru-RU');
    return numberFormat.format(Number(price));
  };

  return (
    <TouchableOpacity
      onPress={onDetail}
      style={[styles.itemContent, {marginBottom: order ? 10 : 0}]}>
      <View style={styles.content}>
        <View>
          {item.image ? (
            <FastImage
              source={{
                uri: item.image,
              }}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.image}
            />
          ) : (
            <FastImage
              source={require('../../../../assets/images/noImage.jpeg')}
              style={styles.image}
            />
          )}
        </View>

        <View style={styles.text_container}>
          <Text style={styles.title}>{item?.title}</Text>

          <Text style={styles.subTitle}>{formatPrice(item?.price)}руб.</Text>
        </View>
      </View>
      {!order && (
        <View style={styles.icon_content}>
          <TouchableOpacity onPress={() => onDelete()}>
            <R.icons.CanselIcon />
          </TouchableOpacity>

          <Text style={styles.count}>count: {item.count}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
