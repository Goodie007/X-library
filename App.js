import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTab from './components/Navigators/BottomTab';
import StackNav from './components/Navigators/StackNav';








export default function App() {
  return (
  
      <BottomTab />
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
