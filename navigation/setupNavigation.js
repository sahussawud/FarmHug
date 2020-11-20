
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

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

const setupNavigator = createStackNavigator(
      {
        nameScreen: {
            screen:nameScreen,
            navigationOptions: {
                title: 'ชื่อ',
            }
        },
        employeeScreen: {
            screen:employeeScreen,
            navigationOptions: {
                title: 'เลือกฟาร์ม',
            }
        },
        ownerScreen: {
            screen:ownerScreen,
            navigationOptions: {
                title: 'สร้างฟาร์ม',
            }
        },
        farmLocationScreen: {
            screen:farmLocationScreen,
            navigationOptions: {
                title: 'ตำเเหน่งของฟาร์ม',
            }
        },
        cattleSetupScreen: {
            screen:cattleSetupScreen,
            navigationOptions: {
                title: 'จัดการปศุสัตว์',
            }
        },
        stallSetupScreen:  {
            screen:stallSetupScreen,
            navigationOptions: {
                title: 'จัดการคอก',
            }
        },
        selectstallscreen: {
            screen:selectstallscreen,
            navigationOptions: {
                title: 'เลือกคอก',
            }
        },
        animaladdscreen:  {
            screen:animaladdscreen,
            navigationOptions: {
                title: 'เพิ่มปศุสัตว์',
            }
        },
        finishscreen: {
            screen:finishscreen,
            navigationOptions: {
                title: 'เสร็จสิ้น',
            }
        },
        animallistscreen: {
            screen:animallistscreen,
            navigationOptions: {
                title: 'จัดการสัตว์',
            }
        }
      },
      {
        // กำหนด defaultNavigationOptions (Slide 23-24)
        defaultNavigationOptions: {
          headerStyle: { backgroundColor: "#4a148c", },
          headerTintColor: "black",
        }
      }
    );

export default createAppContainer(setupNavigator)