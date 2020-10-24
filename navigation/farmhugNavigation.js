
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import firstPageScreen from "../screens/auth/firstpagescreen";
import loginScreen from "../screens/auth/loginscreen";
import registrarScreen from "../screens/auth/registrarscreen";
import cattleSetupScreen from "../screens/welcome/cattlesetupscreen"
import employeescreen from "../screens/welcome/employeescreen"
// import farmlocationscreen from "../screens/welcome/farmlocationscreen"

const FarmHugNavigator = createStackNavigator(
  {
    // กำหนด RouteConfigs (Slide 14)
    FirstPageScreen: firstPageScreen,
    loginScreen: loginScreen,
    registrarScreen: registrarScreen,
    cattleSetupScreen: cattleSetupScreen,
    employeescreen: employeescreen,
    // farmlocationscreen: farmlocationscreen,
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
