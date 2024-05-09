import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import R from '../res';
import ProfileScreen from 'screens/Profile';

const ProfileStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ProfileScreen}
        name={R.routes.SCREEN_PROFILE}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
