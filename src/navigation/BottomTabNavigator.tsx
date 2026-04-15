import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, FontSize, Spacing, moderateScale } from '../theme';

import HomeScreen from '../screens/HomeScreen';
import MyInvestorsScreen from '../screens/MyInvestorsScreen';
import CommissionsScreen from '../screens/CommissionsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, nameOutline, color, focused }: { name: string; nameOutline: string; color: string; focused: boolean }) => (
  <View style={styles.tabIconWrapper}>
    {focused && <View style={styles.activeIndicator} />}
    <Icon name={focused ? name : nameOutline} size={moderateScale(22)} color={color} />
  </View>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="home" nameOutline="home-outline" color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Investors"
        component={MyInvestorsScreen}
        options={{
          tabBarLabel: 'INVESTORS',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="account-group" nameOutline="account-group-outline" color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Earnings"
        component={CommissionsScreen}
        options={{
          tabBarLabel: 'EARNINGS',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="wallet" nameOutline="wallet-outline" color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="account" nameOutline="account-outline" color={color} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#0A0A0F',
    borderTopWidth: 1,
    borderTopColor: '#1A1A28',
    paddingTop: moderateScale(6),
    paddingBottom: moderateScale(8),
    height: moderateScale(70),
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  tabBarItem: {
    paddingTop: moderateScale(2),
  },
  tabBarLabel: {
    fontSize: FontSize.xs - 1,
    fontWeight: '700',
    marginTop: 3,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  tabIconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIndicator: {
    position: 'absolute',
    top: -moderateScale(8),
    width: moderateScale(24),
    height: moderateScale(3),
    borderRadius: 2,
    backgroundColor: Colors.accent,
  },
});

export default BottomTabNavigator;
