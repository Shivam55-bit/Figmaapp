import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import InvestorDetailScreen from '../screens/InvestorDetailScreen';
import MyInvestorsScreen from '../screens/MyInvestorsScreen';
import CommissionsScreen from '../screens/CommissionsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
      <Stack.Screen name="MyInvestors" component={MyInvestorsScreen} />
      <Stack.Screen name="InvestorDetail" component={InvestorDetailScreen} />
      <Stack.Screen name="Commissions" component={CommissionsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
