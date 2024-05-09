import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from '../navigation/Tabs';
import React, {useRef} from 'react';
import R from '../res';
import {TTheme} from '../res/theme';
import {TNavigationParams} from '../types/navigation';
import ProductDetailScreen from 'screens/ProductDetail';
import CreateProfileScreen from 'screens/Profile/CreateProfile';
import PlaceOrder from 'screens/Order/PlaceOrder';
import OrderScreen from 'screens/Order/OrderScreen';
import SearchScreen from 'screens/Search';

const Navigator = ({theme}: {theme: TTheme}) => {
  const RootStack = createStackNavigator<TNavigationParams>();
  const navigationRef = useNavigationContainerRef<TNavigationParams>();
  const routeNameRef = useRef();

  return (
    <NavigationContainer
      theme={theme}
      ref={navigationRef}
      onReady={() => {
        // @ts-ignore
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}>
      <RootStack.Navigator
        initialRouteName={R.routes.ROOT_MAIN}
        screenOptions={() => ({
          headerShown: true,
        })}>
        <RootStack.Screen
          name={R.routes.ROOT_MAIN}
          component={Tabs}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={R.routes.SCREEN_PRODUCT_DETAIL}
          // @ts-ignore
          component={ProductDetailScreen}
          options={{headerShown: false}}
        />

        <RootStack.Screen
          name={R.routes.SCREEN_CREATE_PROFILE}
          component={CreateProfileScreen}
          options={{headerShown: false}}
        />

        <RootStack.Screen
          name={R.routes.SCREEN_ORDER_PLACE}
          // @ts-ignore
          component={PlaceOrder}
          options={{headerShown: false}}
        />

        <RootStack.Screen
          name={R.routes.SCREEN_ORDER}
          component={OrderScreen}
          options={{headerShown: false}}
        />

        <RootStack.Screen
          name={R.routes.SCREEN_SEARCH}
          component={SearchScreen}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
