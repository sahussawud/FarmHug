
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import firstPageScreen from "../screens/auth/firstpagescreen";
import loginScreen from "../screens/auth/loginscreen";
// import Screen3 from "../screens/MealDetailScreen";

const FarmHugNavigator = createStackNavigator(
  {
    // กำหนด RouteConfigs (Slide 14)
    FirstPageScreen: firstPageScreen,
    loginScreen: loginScreen,
    // MealDetailScreen: Screen3,

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
