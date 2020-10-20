import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo'

import FarmHugNavigation from './navigation/farmhugNavigation'

export default function App() {
  let [fontsLoaded] = useFonts({
    'Kanit': require('./assets/fonts/Kanit-Light.ttf'),
  });

  if (!fontsLoaded) {
    return (<AppLoading />)
  } else {
    return (
      <FarmHugNavigation />
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
