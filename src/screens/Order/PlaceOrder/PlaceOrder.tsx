import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import {styles} from './PlaceOrderStyles';
import {IProduct} from 'types/data';
import useSmartNavigation from 'hooks/useSmartNavigation';
import R from 'res';
import {Formik, FormikProps} from 'formik';
import {IOrder} from 'types/data';
import TextField from 'components/TextField';
import FormButton from 'components/FormButton/FormButton';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {getUser} from 'state/user/selectors';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import CartItem from 'screens/Cart/components/CartItem';
import {addOrderAction} from 'state/order/actions';
import {clearAllCartAction} from 'state/cart/actions';

interface IProps {
  route: {
    params: {
      cart: IProduct[];
    };
  };
}

export const PlaceOrder: React.FC<IProps> = ({route}) => {
  const {cart} = route.params || {};
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(getUser);
  const {goBack, navigate} = useSmartNavigation();
  const formRef = useRef<FormikProps<IOrder>>(null);

  const initialValues: IOrder = {
    lastName: user?.lastName || '',
    firstName: user?.firstName || '',
    items: cart || [],
  };

  const onSubmit = async (data: IOrder) => {
    await dispatch(addOrderAction(data));
    await dispatch(clearAllCartAction());
    navigate(R.routes.STACK_CART);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => goBack()} style={styles.back}>
        <R.icons.ArrowIcon />
      </TouchableOpacity>

      <KeyboardAwareScrollView
        renderToHardwareTextureAndroid
        nestedScrollEnabled={true}
        extraHeight={100}
        showsVerticalScrollIndicator={false}
        style={styles.content}
        enableOnAndroid={true}
        extraScrollHeight={20}
        enableAutomaticScroll={Platform.OS === 'ios'}>
        <Text style={styles.title}>Order</Text>

        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          onSubmit={onSubmit}>
          {({values, setFieldValue}) => (
            <View>
              <TextField
                title="имя"
                placeholder="имя"
                onChangeText={text => setFieldValue('firstName', text)}
                value={values.firstName || ''}
                style={styles.input_text}
                titleStyle={styles.textFieldStyle}
                inputStyle={styles.nameInputSize}
              />

              <TextField
                title="фамилия"
                placeholder="фамилия"
                onChangeText={text => setFieldValue('lastName', text)}
                value={values.lastName || ''}
                style={styles.input_text}
                titleStyle={styles.textFieldStyle}
                inputStyle={styles.nameInputSize}
              />

              <Text style={styles.title}>Состав заказа </Text>

              {cart.map(item => (
                <CartItem order key={item.id} item={item} />
              ))}

              <FormButton
                text="Подтвердить заказ"
                textStyle={styles.btn_text}
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
