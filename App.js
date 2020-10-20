// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo'
import Constants from 'expo-constants';
//import NetInfo from '@react-native-community/netinfo';

import FarmHugNavigation from './navigation/farmhugNavigation'



export default function App() {
  // const [state, setState] = useState({
  //   isConnected: null,
  // })

  // const handleChange = ({ isConnected }) => {
  //   setState({ isConnected });
  // };

  // const subscription = await NetInfo.addEventListener(handleChange);

  // useEffect(() => {
  //   const { isConnected } = await NetInfo.fetch();
  //   setState({ isConnected });
  //   return () => {
  //     subscription()
  //   }
  // },[])
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
  bubble: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'red',
  },
  text: {
    color: 'black',
  },
});
