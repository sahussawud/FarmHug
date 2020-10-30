
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
    stallSetupScreen: stallSetupScreen
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
