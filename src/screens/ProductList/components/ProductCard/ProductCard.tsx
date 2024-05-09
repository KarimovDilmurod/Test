import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IProduct} from 'types/data';
import {addCartAction} from 'state/cart/actions';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import useSmartNavigation from 'hooks/useSmartNavigation';
import {styles} from './ProductCardStyles';
import FastImage from 'react-native-fast-image';
import R from 'res';
import Button from 'components/Button/Button';
import {getCart} from 'state/cart/selectors';

interface IProps {
  product: IProduct;
}

export const ProductCard = ({product}: IProps) => {
  const {navigate} = useSmartNavigation();
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(getCart);

  const addCartHendle = async () => {
    await dispatch(addCartAction(product));
  };

  const onToDetail = () => {
    navigate(R.routes.SCREEN_PRODUCT_DETAIL, {product});
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
      onPress={onToDetail}
      activeOpacity={0.7}
      style={styles.container}>
      <View>
        {product.image ? (
          <FastImage
            source={{
              uri: product.image,
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

      <View style={styles.text_content}>
        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.price}>{formatPrice(product.price)} руб.</Text>
      </View>

      <Button
        loading={loading}
        small
        icon
        handler={addCartHendle}
        text="В корзину"
      />
    </TouchableOpacity>
  );
};
