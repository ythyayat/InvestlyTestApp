import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard, Login} from '../screen';
import {useAppSelector} from '../hooks';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const {token} = useAppSelector(state => state.login);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {token ? (
        <Stack.Screen name="Dashboard" component={Dashboard} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
