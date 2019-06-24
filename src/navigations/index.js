import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import SplashScreen from "../screens/splash";
import LoginScreen from "../screens/auth/login";
import RegisterScreen from "../screens/auth/register";
import HomeScreen from "../screens/home";
import SettingScreen from "../screens/setting";

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
    initialRouteName: "SPLASH"
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
  }
});

const BottomTab = createBottomTabNavigator({
  HomeStack,
  SettingStack
});

const AppNavigation = createSwitchNavigator({
  AuthStack,
  BottomTab
});

export default AppNavigation;
