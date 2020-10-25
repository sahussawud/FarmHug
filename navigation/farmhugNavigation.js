
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import firstPageScreen from "../screens/auth/firstpagescreen";
import loginScreen from "../screens/auth/loginscreen";
import registrarScreen from "../screens/auth/registrarscreen";
import cattleSetupScreen from "../screens/welcome/cattlesetupscreen"
<<<<<<< HEAD
import nameScreen from "../screens/welcome/namescreen";
import employeeScreen from "../screens/welcome/employeescreen";
import ownerScreen from "../screens/welcome/ownerscreen"
import farmLocationScreen from "../screens/welcome/farmlocationscreen"
=======
import employeescreen from "../screens/welcome/employeescreen"
// import farmlocationscreen from "../screens/welcome/farmlocationscreen"
>>>>>>> 3a09edca42dd4e0aa00d47aea7a02768b6410a3f

const FarmHugNavigator = createStackNavigator(
  {
    // กำหนด RouteConfigs (Slide 14)
    FirstPageScreen: firstPageScreen,
    loginScreen: loginScreen,
    registrarScreen: registrarScreen,
<<<<<<< HEAD
    nameScreen: nameScreen,
    employeeScreen: employeeScreen,
    ownerScreen: ownerScreen,
    farmLocationScreen: farmLocationScreen,
    cattleSetupScreen: cattleSetupScreen
=======
    cattleSetupScreen: cattleSetupScreen,
    employeescreen: employeescreen,
    // farmlocationscreen: farmlocationscreen,
>>>>>>> 3a09edca42dd4e0aa00d47aea7a02768b6410a3f
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

export default createAppContainer(FarmHugNavigator);
