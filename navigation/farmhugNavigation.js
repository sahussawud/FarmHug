import React from 'react'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Image } from "react-native";
import logo from "../assets/logo.png"

// import firstPageScreen from "../screens/auth/firstpagescreen";
// import loginScreen from "../screens/auth/loginscreen";
// import registrarScreen from "../screens/auth/registrarscreen";

// import cattleSetupScreen from "../screens/welcome/cattlesetupscreen"
// import nameScreen from "../screens/welcome/namescreen";
// import employeeScreen from "../screens/welcome/employeescreen";
// import ownerScreen from "../screens/welcome/ownerscreen"
// import farmLocationScreen from "../screens/welcome/farmlocationscreen";
// import stallSetupScreen from "../screens/welcome/stallsetupscreen";
// import animaladdscreen from "../screens/welcome/animaladdscreen.js";
// import selectstallscreen from '../screens/welcome/selectstallscreen';
// import finishscreen from '../screens/welcome/finishscreen';
// import animallistscreen from '../screens/welcome/animallistscreen';

import comScreen from "../screens/community/communityscreen";
import postScreen from '../screens/community/postscreen';
import commentScreen from "../screens/community/commentScreen";

import homeScreen from "../screens/home/homescreen";
import cattlescreen from "../screens/farm/cattlescreen";

import activityScreen from "../screens/activity/activityscreen";
import settingScreen from "../screens/setting1/settingscreen";
import MailScreen from "../screens/mail/mailscreen";


  // const AuthenticationNavigator = createStackNavigator({
  //   // กำหนด RouteConfigs (Slide 14)
  //   FirstPageScreen: firstPageScreen,
  //   loginScreen: loginScreen,
  //   registrarScreen: registrarScreen,
  // },
  //   {
  //     // กำหนด defaultNavigationOptions (Slide 23-24)
  //     defaultNavigationOptions: {
  //       title: "",
  //       headerStyle: { backgroundColor: "#4a148c", },
  //       headerTintColor: "black",
  //     }
  //   })

  // const setupNavigator = createStackNavigator(
  //   {
  //     nameScreen: nameScreen,
  //     employeeScreen: employeeScreen,
  //     ownerScreen: ownerScreen,
  //     farmLocationScreen: farmLocationScreen,
  //     cattleSetupScreen: cattleSetupScreen,
  //     stallSetupScreen: stallSetupScreen,
  //     selectstallscreen: selectstallscreen,
  //     animaladdscreen: animaladdscreen,
  //     finishscreen: finishscreen,
  //     animallistscreen: animallistscreen
  //   },
  //   {
  //     // กำหนด defaultNavigationOptions (Slide 23-24)
  //     defaultNavigationOptions: {
  //       title: "สร้างโปรไฟล์",
  //       headerStyle: { backgroundColor: "#4a148c", },
  //       headerTintColor: "black",
  //     }
  //   }
  // );

  const homeNavigator = createStackNavigator(
    {
      homeScreen: {
        screen: homeScreen,
        navigationOptions: {
          headerShown: false
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
      comScreen: comScreen,
      postScreen: postScreen,
      commentScreen: commentScreen,

    },
    {
      // กำหนด defaultNavigationOptions (Slide 23-24)
      defaultNavigationOptions: {
        header: null,
        title: "",
        headerStyle: { backgroundColor: "#4a148c", },
        headerTintColor: "black",
      }
    }, { headerMode: 'screen' }
  );

  const settingNavigator = createStackNavigator(
    {
      profile: settingScreen
    },
    {
      // กำหนด defaultNavigationOptions (Slide 23-24)
      defaultNavigationOptions: {
        title: "ตั้งค่าบัญชี",
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
          title: 'หน้าเเรก',
          tabBarIcon: (tabinfo) => {
            return (<Ionicons name="md-home" size={40} color={tabinfo.tintColor} />);
          }
        }
      },
      farm: {
        screen: farmNavigator,
        navigationOptions: {
          title: 'ฟาร์ม',
          tabBarIcon: (tabinfo) => {
            return (<Ionicons name="ios-paw" size={40} color={tabinfo.tintColor} />);
          }
        }
      },
      activity: {
        screen: activityScreen,
        navigationOptions: {
          title: '',
          tabBarIcon: (tabinfo) => {
            return (<Image source={logo} size={20} style={{ transform: [{ scale: 0.28 }] }} />);
          }
        }
      },
      community: {
        screen: comNavigator,
        navigationOptions: {
          title: 'ชุมชน',
          tabBarIcon: (tabinfo) => {
            return (<Ionicons name="ios-people" size={40} color={tabinfo.tintColor} />);
          }
        }

      },
      mail: {
        screen: MailScreen,
        navigationOptions: {
          title: 'จดหมาย',
          tabBarIcon: (tabinfo) => {
            return (<Ionicons name="ios-mail" size={40} color={tabinfo.tintColor} />);
          }
        }
      },
    },
    {
      tabBarOptions: {
        activeTintColor: '#556763',
        inactiveTintColor: 'black'
      }

    }
  );


  const MainNavigator = createDrawerNavigator(
    {
      MyFarm: {
        screen: FTabNavigator
      },
      Setting: settingNavigator

    },
    { contentOptions: { activeTintColor: "blue" }, }
  ) 

export default createAppContainer(MainNavigator);
