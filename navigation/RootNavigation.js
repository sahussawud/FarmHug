// RootNavigation.js

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import AuthenticationNavigation from './authenticationNavigation'
import FarmhugNavigation from './farmhugNavigation'
import SetupNavigation from './setupNavigation'
import { useSelector} from 'react-redux'

const RootNavigation = (props)=>{
  const User = useSelector(state=> state.User.authentication)
  return(
    User.userToken && !User.isProfile ? <SetupNavigation/> : User.userToken && User.isProfile ? <FarmhugNavigation/> : <AuthenticationNavigation/> 
  )
}

export default RootNavigation
