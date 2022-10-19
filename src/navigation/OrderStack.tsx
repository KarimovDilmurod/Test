import { createStackNavigator } from '@react-navigation/stack'
import { useColors } from 'hooks/useColors'
import React from 'react'
import R from 'res'
import OrderScreen from 'screens/Order'
import { getDefaultScreenOptions } from 'utils/navigation'

const OrderStack = () => {
  const Stack = createStackNavigator()
  const colors = useColors()

  return (
    <Stack.Navigator screenOptions={getDefaultScreenOptions(colors)}>
      <Stack.Screen
        component={OrderScreen}
        name={R.routes.SCREEN_ORDER}
        options={{
          cardStyle: {
            backgroundColor: colors.backroundPrimary,
          },
          headerShown: false,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  )
}

export default OrderStack
