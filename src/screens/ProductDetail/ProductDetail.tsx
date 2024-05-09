import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {styles} from './ProductDetailStyles';
import {IProduct} from 'types/data';
import R from 'res';
import useSmartNavigation from 'hooks/useSmartNavigation';
import FastImage from 'react-native-fast-image';
import Button from 'components/Button/Button';
import {useAppDispatch} from 'hooks/redux';
import {addCartAction} from 'state/cart/actions';

interface IProps {
  route: {
    params: {
      product: IProduct;
    };
  };
}

export const ProductDetailScreen: React.FC<IProps> = ({route}) => {
  const {product} = route.params || {};
  const {goBack} = useSmartNavigation();
  const dispatch = useAppDispatch();

  const formatPrice = (price: string) => {
    if (isNaN(Number(price))) {
      return price;
    }
    const numberFormat = new Intl.NumberFormat('ru-RU');
    return numberFormat.format(Number(price));
  };

  const addCartHendle = async () => {
    await dispatch(addCartAction(product));
  };

  return (
    <SafeAreaView style={styles.content}>
      <TouchableOpacity onPress={() => goBack()} style={styles.back}>
        <R.icons.ArrowIcon />
      </TouchableOpacity>

      <View style={styles.container}>
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
              source={require('../../assets/images/noImage.jpeg')}
              style={styles.image}
            />
          )}
        </View>

        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.subTitle}>{product.product_type}</Text>

        <Text style={styles.price}>{formatPrice(product.price)} руб.</Text>

        <Button icon handler={addCartHendle} text="В корзину" />
      </View>
    </SafeAreaView>
  );
};
