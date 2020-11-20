
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import firstPageScreen from "../screens/auth/firstpagescreen";
import loginScreen from "../screens/auth/loginscreen";
import registrarScreen from "../screens/auth/registrarscreen";

const AuthenticationNavigator = createStackNavigator({
    // กำหนด RouteConfigs (Slide 14)
    FirstPageScreen: firstPageScreen,
    loginScreen: {
        screen:loginScreen,
        navigationOptions: {
            title: 'เข้าสู่ระบบ',
        }
    },
    registrarScreen: {
        screen:registrarScreen,
        navigationOptions: {
            title: 'สมัครสมาชิก',
        }
    },
  },
    {
      // กำหนด defaultNavigationOptions (Slide 23-24)
      defaultNavigationOptions: {
        title: "",
        headerStyle: { backgroundColor: "#4a148c", },
        headerTintColor: "black",
      }
    })

export default createAppContainer(AuthenticationNavigator)