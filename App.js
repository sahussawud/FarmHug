// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo'
import Constants from 'expo-constants';
//import NetInfo from '@react-native-community/netinfo';
import { createStore, combineReducers } from 'redux';
import { Provider } from "react-redux";
import userReducer from './store/reducers/userReducer';
import farmReducer from './store/reducers/farmReducer';
import activityReducer from './store/reducers/activityReducer'

import FarmHugNavigation from './navigation/farmhugNavigation'
import {navigationRef} from './navigation/RootNavigation'


export default function App() {

  const rootReducer = combineReducers({
    User: userReducer,
    Farm: farmReducer,
    Activity: activityReducer,
    // Post: postReducer
  })

  const store = createStore(rootReducer);

  let [fontsLoaded] = useFonts({
    'Kanit': require('./assets/fonts/Kanit-Light.ttf'),
  });

  if (!fontsLoaded) {
    return (<AppLoading />)
  } else {
    return (
      <Provider store={store}>
        <FarmHugNavigation ref={navigationRef}/>
      </Provider>
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
