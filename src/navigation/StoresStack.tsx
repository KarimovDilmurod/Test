import { createStackNavigator } from '@react-navigation/stack'
import { useColors } from 'hooks/useColors'
import React from 'react'
import R from 'res'
import StoresScreen from 'screens/Store'
import { getDefaultScreenOptions } from 'utils/navigation'

const StoresStack = () => {
  const Stack = createStackNavigator()
  const colors = useColors()

  return (
    <Stack.Navigator screenOptions={getDefaultScreenOptions(colors)}>
      <Stack.Screen
        component={StoresScreen}
        name={R.routes.SCREEN_STORES}
        options={{
          cardStyle: {
            backgroundColor: colors.backroundPrimary,
          },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default StoresStack
