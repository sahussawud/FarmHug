// RootNavigation.js

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import AuthenticationNavigation from './authenticationNavigation'
import FarmhugNavigation from './farmhugNavigation'
import SetupNavigation from './setupNavigation'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@apollo/client';
import { createAlert, getUserData } from '../data/graphl_query'
import { profile_update } from '../store/actions/userAction'
import axios from 'axios'

const RootNavigation = (props) => {
  const User = useSelector(state => state.User)
  const dispatch = useDispatch()
  const restoreUser = async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      const id = await AsyncStorage.getItem('_id')
      const { data, error } = useQuery(getUserData, { variables: { id: id } })
      if (data) {
        dispatch(profile_update(data.user))
        }

    }
  }
  console.log(User);
  return (
    User.authentication.userToken && !User.profile.isProfile ? <SetupNavigation /> : User.authentication.userToken && User.profile.isProfile ? <FarmhugNavigation /> : <AuthenticationNavigation />
  )
}

export default RootNavigation
