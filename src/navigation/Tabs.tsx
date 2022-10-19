import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useColors } from 'hooks/useColors'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect } from 'react'
import { Platform, Pressable } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import R from 'res'
import { createStyles } from 'utils/createStyles'
import { getTabRouteById } from 'utils/navigation'

import HomeStack from './HomeStack'
import OrderStack from './OrderStack'
import ProfileStack from './ProfileStack'
import StoresStack from './StoresStack'
interface IProps {
  route: {
    params: {
      tab: string
    }
  }
}

const Tabs: React.FC<IProps> = ({ route }) => {
  const navigation = useSmartNavigation()

  const styles = useStyles(stylesConfig)
  const colors = useColors()

  useEffect(() => {
    if (!route?.params?.tab) {
      return
    }
    // @ts-ignore
    navigation.navigate(getTabRouteById(route?.params?.tab), {})
  }, [route?.params?.tab])

  const TabsNavigator = createBottomTabNavigator()

  // @ts-ignore
  const CustomTabButton = props => (
    <Pressable
      {...props}
      style={
        props.accessibilityState.selected
          ? [props.style, styles.activeTab]
          : [props.style, styles.tabButton]
      }
    />
  )

  return (
    <TabsNavigator.Navigator
      screenOptions={({ navigation: navigationProps }) => {
        return {
          headerShown: true,
          tabBarHideOnKeyboard: true,
          tabBarStyle: [
            styles.barStyle,
            { backgroundColor: colors.backroundPrimary },
          ],
          tabBarLabelStyle: {
            marginTop: vs(10),
            fontSize: s(9),
            paddingBottom: s(8),
            fontFamily: R.fonts.SofiaPro.medium,
            color: navigationProps.isFocused()
              ? colors.iconSecondary
              : colors.iconPrimary,
          },
        }
      }}>
      <TabsNavigator.Screen
        options={{
          headerTitle: 'Home',
          tabBarLabel: 'Home',
          tabBarButton: CustomTabButton,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <R.icons.HomeIcon color={colors.iconSecondary} />
            ) : (
              <R.icons.HomeIcon color={colors.iconPrimary} />
            ),
        }}
        name={R.routes.STACK_HOME}
        component={HomeStack}
      />

      <TabsNavigator.Screen
        options={{
          headerTitle: 'Stores',
          tabBarLabel: 'Stores',
          tabBarButton: CustomTabButton,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <R.icons.StoresIcon color={colors.iconSecondary} />
            ) : (
              <R.icons.StoresIcon color={colors.iconPrimary} />
            ),
        }}
        name={R.routes.STACK_STORES}
        component={StoresStack}
      />

      <TabsNavigator.Screen
        options={{
          headerTitle: 'Order',
          tabBarLabel: 'Order',
          tabBarButton: CustomTabButton,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <R.icons.StoresIcon color={colors.iconSecondary} />
            ) : (
              <R.icons.StoresIcon color={colors.iconPrimary} />
            ),
        }}
        name={R.routes.STACK_ORDER}
        component={OrderStack}
      />

      <TabsNavigator.Screen
        options={{
          headerTitleStyle: styles.headerTitle,
          headerStyle: styles.headerStyle,
          headerTitle: 'Profile',
          tabBarLabel: 'Profile',
          tabBarButton: CustomTabButton,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <R.icons.ProfileIcon color={colors.iconSecondary} />
            ) : (
              <R.icons.ProfileIcon color={colors.iconPrimary} />
            ),
        }}
        name={R.routes.STACK_PROFILE}
        component={ProfileStack}
      />
    </TabsNavigator.Navigator>
  )
}

const stylesConfig = createStyles(colors => ({
  area: {
    flex: 1,
  },
  barStyle: {
    height: Platform.select({
      ios: '86@s',
      android: '64@s',
    }),

    shadowColor: 'rgb(48, 48, 48)',
    shadowOpacity: 6,
    shadowRadius: '20@s',
    shadowOffset: {
      height: '10@vs',
    },
    margin: 0,
    padding: 0,
    borderTopWidth: 0,
  },
  iconActive: {
    width: '50@vs',
    height: '50@vs',
    borderRadius: '8@s',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
  },
  headerStyle: {
    elevation: 5,
    shadowRadius: '3@s',
    borderBottomWidth: '0@s',
    shadowColor: 'grey',
    height: '60@vs',
    backgroundColor: colors.backroundPrimary,
  },
  headerTitle: {
    fontSize: '18@s',
    fontWeight: '600',
    color: colors.text,
  },
  activeTab: {
    top: 0,
    paddingTop: '18@vs',
    borderTopWidth: '2@s',
    borderColor: '#1A94FF',
  },
  tabButton: {
    top: 0,
    paddingTop: '20@vs',
  },
}))

export default Tabs
