import React from 'react'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Image } from "react-native";
import logo from "../assets/logo.png"

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
import animallistscreen from '../screens/welcome/animallistscreen';

import comScreen from "../screens/community/communityscreen";
import postScreen from '../screens/community/postscreen';
import homeScreen from "../screens/home/homescreen";
import cattlescreen from "../screens/farm/cattlescreen";

import statuScreen from "../screens/farm/statuscreen";
import activityScreen from "../screens/farm/activityscreen";
import settingScreen from "../screens/setting1/settingscreen";

// import logo from "../../assets/logo.png"


const AuthenticationNavigator = createStackNavigator({
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
    finishscreen: finishscreen,
    animallistscreen: animallistscreen
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

const homeNavigator = createStackNavigator(
  {
    homeScreen: {
      screen: homeScreen, 
      navigationOptions: {
        header: null,
      }
    }
  },
  {
    defaultNavigationOptions: {
      title: "",
      headerStyle: { backgroundColor: "#4a148c", },
      headerTintColor: "black",
    }
  }, { headerMode: 'screen' }
);

const farmNavigator = createStackNavigator(
  {
    cattlescreen: {
      screen: cattlescreen,
      navigationOptions: {
        header: null,
      }
    }
  },
  {
    defaultNavigationOptions: {
      title: "",
      headerStyle: { backgroundColor: "#4a148c", },
      headerTintColor: "black",
    }
  }, { headerMode: 'screen' }
);

const comNavigator = createStackNavigator(
  {
    comScreen : comScreen,
    postScreen : postScreen,
    statuScreen : statuScreen,
    // activityScreen : activityScreen,
    // settingScreen : settingScreen
  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
      title: "",
      headerStyle: { backgroundColor: "#4a148c", },
      headerTintColor: "black",
    }
  }, { headerMode: 'screen' }
);

const FTabNavigator = createBottomTabNavigator(
  {
    home: {
      screen: homeNavigator,
      navigationOptions: {
        title: 'หน้าหลัก',
        tabBarIcon: (tabinfo) => {
          return (<Ionicons name="ios-home" size={40} color='Black' />);
        }
      }
    },
    community: {
      screen: comNavigator,
      navigationOptions: {
        title: 'ชุมชน',
        tabBarIcon: (tabinfo) => {
          return (<Ionicons name="ios-people" size={40} color='Black' />);
        }
      }

    },
    icon: {
      screen: homeNavigator,
      navigationOptions: {
        title: '',
        tabBarIcon: (tabinfo) => {
          return (<Image source={logo} size={20} style={{ transform: [{ scale: 0.28 }] }} />);
        }
      }
    },
    farm: {
      screen: farmNavigator,
      navigationOptions: {
        title: 'ฟาร์ม',
        tabBarIcon: (tabinfo) => {
          return (<Ionicons name="ios-paw" size={40} color='Black' />);
        }
      }
    },
    setting: {
      screen: settingScreen,
      navigationOptions: {
        title: 'ตั้งค่า',
        tabBarIcon: (tabinfo) => {
          return (<Ionicons name="ios-cog" size={40} color='Black' />);
        }
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'white', 

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

export default createAppContainer(FTabNavigator);
