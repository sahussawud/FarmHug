
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

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
    // กำหนด RouteConfigs (Slide 14)
    nameScreen: nameScreen,
    employeeScreen: employeeScreen,
    ownerScreen: ownerScreen,
    farmLocationScreen: farmLocationScreen,
    cattleSetupScreen: cattleSetupScreen,
    stallSetupScreen: stallSetupScreen,
    animaladdscreen: animaladdscreen
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

const mainNavigator = createStackNavigator({
  authentication: AuthenticationNavigator,
  Setup: setupNavigator
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

export default createAppContainer(mainNavigator);
