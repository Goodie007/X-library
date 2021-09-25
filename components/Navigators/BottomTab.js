import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Bookshelf from '../Screens/Bookshelf';
import NavDrawer from './NavDrawer';
import Home from '../Screens/Home';
import Notifications from '../Screens/Notifications';





const Tabs = createBottomTabNavigator();

const MainStack = createNativeStackNavigator();







export default function BottomTabs(){
    return(
        <NavigationContainer>
            <Tabs.Navigator component={NavDrawer} screenOptions={{
               headerShown: false,
              // tabBarShowLabel: false,
             }}>
                <Tabs.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} color={color} size={size} />
        ),
        unmountOnBlur: true, }} />
                <Tabs.Screen name="Notifications" component={Notifications} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialCommunityIcons name={focused ? 'bell' : 'bell-outline'} color={color} size={size} />
        ),
        unmountOnBlur: true, }}/>
                <Tabs.Screen name="Bookshelf" component={Bookshelf} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialCommunityIcons name={focused ? 'book' : 'book-outline'} color={color} size={size} />
        ),
        unmountOnBlur: true, }}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
}