// RootNavigation.js

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import AuthenticationNavigation from './authenticationNavigation'
import FarmhugNavigation from './farmhugNavigation'
import SetupNavigation from './setupNavigation'
import { useSelector} from 'react-redux'

const RootNavigation = (props)=>{
  const User = useSelector(state=> state.User)
  return(
    User.authentication.userToken && !User.profile.isProfile ? <SetupNavigation/> : User.authentication.userToken && User.profile.isProfile ? <FarmhugNavigation/> : <AuthenticationNavigation/> 
  )
}

export default RootNavigation
