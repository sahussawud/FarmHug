// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo'
import Constants from 'expo-constants';
//import NetInfo from '@react-native-community/netinfo';
import { createStore, combineReducers } from 'redux';
import { Provider } from "react-redux";
import userReducer from './store/reducers/userReducer';
import farmReducer from './store/reducers/farmReducer';
import activityReducer from './store/reducers/activityReducer'
import { restore_token } from './store/actions/userAction'
import {  ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';


import RootNavigation from './navigation/RootNavigation'
// import { navigationRef } from './navigation/RootNavigation'

import { HttpLink, createHttpLink  } from 'apollo-link-http'
// import ApolloClient from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


// const httpLink = createHttpLink({
//   uri: 'https://cors-anywhere.herokuapp.com/https://farm-hug-api.herokuapp.com/graphql',
// });

const httpLink = createHttpLink({
  uri: 'https://farm-hug-api.herokuapp.com/graphql',
});

const authLink = setContext(async(_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token =  await AsyncStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})


export default function App() {

  const rootReducer = combineReducers({
    User: userReducer,
    Farm: farmReducer,
    Activity: activityReducer,
    // Post: postReducer
  })

  const store = createStore(rootReducer);

  // useEffect(() => {
  //   // Fetch the token from storage then navigate to our appropriate place
  //   const bootstrapAsync = async () => {
  //     let userToken;
  //     try {
  //       userToken = await AsyncStorage.getItem('userToken');
  //     } catch (e) {
  //       // Restoring token failed
  //       console.log(e);
  //     }

  //     dispatch(restore_token(userToken));
  //   };
  //   bootstrapAsync();
  // }, []);

  let [fontsLoaded] = useFonts({
    'Kanit': require('./assets/fonts/Kanit-Light.ttf'),
  });

  if (!fontsLoaded) {
    return (<AppLoading />)
  } else {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <RootNavigation />
        </ApolloProvider>
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
