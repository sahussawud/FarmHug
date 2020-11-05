import React from 'react'
import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator, DrawerItems}  from "react-navigation-drawer";
import {Image} from "react-native";

import firstPageScreen from "../screens/auth/firstpagescreen";
import loginScreen from "../screens/auth/loginscreen";
import registrarScreen from "../screens/auth/registrarscreen";
import cattleSetupScreen from "../screens/welcome/cattlesetupscreen"
import nameScreen from "../screens/welcome/namescreen";
import employeeScreen from "../screens/welcome/employeescreen";
import ownerScreen from "../screens/welcome/ownerscreen"
import farmLocationScreen from "../screens/welcome/farmlocationscreen";
import stallSetupScreen from "../screens/welcome/stallsetupscreen";
import homeScreen from "../screens/home/homescreen";

// import logo from "../../assets/logo.png"

const FarmHugNavigator = createStackNavigator(
  {
    // กำหนด RouteConfigs (Slide 14)
    FirstPageScreen: firstPageScreen,
    loginScreen: loginScreen,
    registrarScreen: registrarScreen,
    nameScreen: nameScreen,
    employeeScreen: employeeScreen,
    ownerScreen: ownerScreen,
    farmLocationScreen: farmLocationScreen,
    cattleSetupScreen: cattleSetupScreen,
    stallSetupScreen: stallSetupScreen,
    homeScreen: homeScreen,
  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
      title: "",
      headerStyle: { backgroundColor: "#4a148c", },
      headerTintColor: "black",
    }
  }
);
const Homenavigator = createStackNavigator({
  homeScreen: homeScreen},
  {
  // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
      title: "",
      headerStyle: { backgroundColor: "#4a148c", },
      headerTintColor: "black",
    }
  }
);

const FTabNavigator =  createBottomTabNavigator(
  {
    สร้างมาก่อนเฉยๆ:  {
      screen: FarmHugNavigator,
      navigationOptions:{
        tabBarIcon: (tabinfo) => {
        return(<Ionicons name="logo-apple" size={40} color='Black'/>);
      }}
    },
    หน้าแรก:  {
      screen: Homenavigator,
      navigationOptions:{
        tabBarIcon: (tabinfo) => {
        return(<Ionicons name="ios-home" size={40} color='Black'/>);
      }}
    },
    ชุมชน:  {
      screen: FarmHugNavigator,
      navigationOptions:{
        tabBarIcon: (tabinfo) => {
        return(<Ionicons name="ios-people" size={40} color='Black'/>);
      }}
 
  },
    ฟาร้ม:  {
      screen: FarmHugNavigator,
      navigationOptions:{
        tabBarIcon: (tabinfo) => {
        return(<Ionicons name="ios-paw" size={40} color='Black'/>);
      }}
    },
    ตั้งค่า:  {
      screen: FarmHugNavigator,
      navigationOptions:{
        tabBarIcon: (tabinfo) => {
        return(<Ionicons name="ios-cog" size={40} color='Black'/>);
      }}
    },
    },
    {
      tabBarOptions:{activeTintColor: 'white', activeBackgroundColor: 'gray'
      
    }
    
  }
);


const MainNavigator = createDrawerNavigator(
  {
    FTab:FTabNavigator,
    // Filters: FiltersNavigator
  },
);

export default createAppContainer(MainNavigator);