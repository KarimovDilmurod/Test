import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import R from '../res';
import CartScreen from 'screens/Cart';

const CartStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={CartScreen}
        name={R.routes.SCREEN_CART}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
