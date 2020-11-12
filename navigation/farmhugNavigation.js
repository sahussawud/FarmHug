import React from 'react'
import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator, DrawerItems }  from "react-navigation-drawer";
import { Image } from "react-native";

import firstPageScreen from "../screens/auth/firstpagescreen";
import loginScreen from "../screens/auth/loginscreen";
import registrarScreen from "../screens/auth/registrarscreen";
import cattleSetupScreen from "../screens/welcome/cattlesetupscreen"
import nameScreen from "../screens/welcome/namescreen";
import employeeScreen from "../screens/welcome/employeescreen";
import ownerScreen from "../screens/welcome/ownerscreen"
import farmLocationScreen from "../screens/welcome/farmlocationscreen";
import stallSetupScreen from "../screens/welcome/stallsetupscreen";
import animaladdscreen from "../screens/welcome/animaladdscreen.js";
import selectstallscreen from '../screens/welcome/selectstallscreen';
import finishscreen from '../screens/welcome/finishscreen';


import comScreen from "../screens/community/communityscreen";
import postScreen from '../screens/community/postscreen';
import homeScreen from "../screens/home/homescreen";
import cattleScreen from '../screens/farm/cattlescreen';
import statuScreen from "../screens/farm/statuscreen";
import activityScreen from "../screens/farm/activityscreen";

// import logo from "../../assets/logo.png"


const AuthenticationNavigator = createStackNavigator( {
  // กำหนด RouteConfigs (Slide 14)
  FirstPageScreen: firstPageScreen,
  loginScreen: loginScreen,
  registrarScreen: registrarScreen,
},
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
      title: "",
      headerStyle: { backgroundColor: "#4a148c", },
      headerTintColor: "black",
    }
  })

const setupNavigator = createStackNavigator(
  {
    nameScreen: nameScreen,
    employeeScreen: employeeScreen,
    ownerScreen: ownerScreen,
    farmLocationScreen: farmLocationScreen,
    cattleSetupScreen: cattleSetupScreen,
    stallSetupScreen: stallSetupScreen,
    selectstallscreen: selectstallscreen,
    animaladdscreen: animaladdscreen,
    finishscreen : finishscreen,
  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
      title: "สร้างโปรไฟล์",
      headerStyle: { backgroundColor: "#4a148c", },
      headerTintColor: "black",
    }
  }
);

// const Homenavigator = createStackNavigator({
//   homeScreen: homeScreen},
//   {
//   // กำหนด defaultNavigationOptions (Slide 23-24)
//     defaultNavigationOptions: {
//       title: "",
//       headerStyle: { backgroundColor: "#4a148c", },
//       headerTintColor: "black",
//     }
//   }
// );


const comNavigator = createStackNavigator(
  {
    homeScreen : homeScreen,
    postScreen : postScreen,
    comScreen : comScreen,
    statuScreen : statuScreen,
    activityScreen : activityScreen
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

const FTabNavigator =  createBottomTabNavigator(
  {
    สร้างมาก่อนเฉยๆ:  {
      screen: setupNavigator,
      navigationOptions:{
        tabBarIcon: (tabinfo) => {
        return(<Ionicons name="logo-apple" size={40} color='Black'/>);
      }}
    },
    หน้าแรก:  {
      screen: homeScreen,
      navigationOptions:{
        tabBarIcon: (tabinfo) => {
        return(<Ionicons name="ios-home" size={40} color='Black'/>);
      }}
    },
    ชุมชน:  {
      screen: comScreen,
      navigationOptions:{
        tabBarIcon: (tabinfo) => {
        return(<Ionicons name="ios-people" size={40} color='Black'/>);
      }}
 
  },
    ฟาร้ม:  {
      screen: cattleScreen,
      navigationOptions:{
        tabBarIcon: (tabinfo) => {
        return(<Ionicons name="ios-paw" size={40} color='Black'/>);
      }}
    },
    ตั้งค่า:  {
      screen: homeScreen,
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
    Navigator:FTabNavigator,
    comNa: comNavigator,

    // Filters: FiltersNavigator
  },
  {contentOptions:{activeTintColor:"blue"},}
);

const mainNavigator = createStackNavigator({
  // authentication: AuthenticationNavigator,
  Setup: setupNavigator,
},
{
  // กำหนด defaultNavigationOptions (Slide 23-24)
  defaultNavigationOptions: {
    title: "",
    headerStyle: { 
      backgroundColor: "white", 
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
  },
    headerTintColor: "black",
  }
})

export default createAppContainer(MainNavigator);
