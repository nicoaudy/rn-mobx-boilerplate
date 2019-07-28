import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import { NavigationService } from "../services/NavigationService";

import themes from "utils/theme";

import SplashScreen from "../screens/splash";
import LoginScreen from "../screens/auth/login";
import RegisterScreen from "../screens/auth/register";
import HomeScreen from "../screens/home";
import SettingScreen from "../screens/setting";
import ProfileScreen from "../screens/profile";

const AuthStack = createStackNavigator(
  {
    SPLASH: {
      screen: SplashScreen
    },
    LOGIN: {
      screen: LoginScreen
    },
    REGISTER: {
      screen: RegisterScreen
    }
  },
  {
    initialRouteName: "SPLASH",
    navigationOptions: {
      header: null
    }
  }
);

const HomeStack = createStackNavigator({
  HOME: {
    screen: HomeScreen
  }
});

const SettingStack = createStackNavigator({
  SETTING: {
    screen: SettingScreen
  },
  PROFILE: {
    screen: ProfileScreen
  }
});

const BottomTab = createBottomTabNavigator(
  {
    HOME: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: "Home"
      }
    },
    SETTING: {
      screen: SettingStack,
      navigationOptions: {
        tabBarLabel: "Setting"
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: themes.color.COLOR_WHITE,
      inactiveTintColor: themes.color.COLOR_GREY,
      style: {
        backgroundColor: themes.color.COLOR_PRIMARY
      }
    }
  }
);

const AppNavigation = createSwitchNavigator({
  AuthStack,
  BottomTab
});

class Navigator extends React.Component {
  render() {
    return (
      <AppNavigation ref={r => NavigationService.setTopLevelNavigator(r)} />
    );
  }
}

export default Navigator;
