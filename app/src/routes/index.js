import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from 'styles';

import {
  SignIn,
  Dashboard,
  Perfil,
  DetailOrder,
  SendProblem,
  Problem,
  Confirm,
} from 'screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const UnAuth = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
);

const OrderStack = () => (
  <Stack.Navigator headerMode="none" initialRouteName="DashboardS">
    <Stack.Screen name="DashboardS" component={Dashboard} />
    <Stack.Screen name="DetailOrder" component={DetailOrder} />
    <Stack.Screen name="SendProblem" component={SendProblem} />
    <Stack.Screen name="Problem" component={Problem} />
    <Stack.Screen name="Confirm" component={Confirm} />
  </Stack.Navigator>
);

const Auth = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Dashboard') {
          iconName = 'view-headline';
        } else if (route.name === 'Perfil') {
          iconName = 'account-circle';
        }

        // You can return any component that you like here!
        return (
          <MaterialIcons
            name={iconName}
            size={30}
            color={focused ? colors.PURPLE : colors.GREY}
          />
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.PURPLE,
      inactiveTintColor: colors.GREY,
      labelStyle: {
        fontSize: 14,
      },
      style: {
        elevation: 5,
        shadowOffset: { width: 0, height: 25 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        borderTopColor: colors.LIGHT_GREY,
        borderTopWidth: 1,
      },
    }}
  >
    <Tab.Screen name="Dashboard" component={OrderStack} />
    <Tab.Screen name="Perfil" component={Perfil} />
  </Tab.Navigator>
);

export default ({ authenticated }) => {
  const auth = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {auth.user ? <Auth /> : <UnAuth />}
    </NavigationContainer>
  );
};
