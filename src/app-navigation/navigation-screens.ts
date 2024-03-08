import {
  TypeAppKeys,
  TypeDrawerKeys,
  TypeLoginKeys,
  TypeMainKeys,
  TypeTutorialKeys,
} from '@app-views/types';
import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';

export interface StackConfig<T extends 'Navigation' | 'Drawer' = 'Navigation'> {
  name: string;
  component: React.ComponentType<any>;
  options?: T extends 'Navigation'
  ? NativeStackNavigationOptions
  : DrawerNavigationOptions;
  children?: undefined;
  getComponent?: undefined;
  key?: string | number | null | undefined;
  initialParams?: object | undefined;
  getId?:
  | (({ params }: { params: object | undefined }) => string | undefined)
  | undefined;
  listeners?: any;
}

/**
 * Tutorial Screens
 */
const LoginScreens: Record<TypeLoginKeys, StackConfig> = {
  Login: {
    name: 'Login',
    component: require('@app-views/Login/Login').default,
  },
  FormLogin: {
    name: 'FormLogin',
    component: require('@app-views/Login/FormLogin').default,
  },
  SelectAccount: {
    name: 'SelectAccount',
    component: require('@app-views/Login/SelectAccount').default,
  },
  SelectBusiness: {
    name: 'SelectBusiness',
    component: require('@app-views/Login/SelectBussiness').default,
  },
  // Register
  ForgetPassword: {
    name: 'ForgetPassword',
    component: require('@app-views/Register/ForgotPassword').default,
  },
  ResetPassword: {
    name: 'ResetPassword',
    component: require('@app-views/Register/ResetPassword').default,
  },
  SendOTP: {
    name: 'SendOTP',
    component: require('@app-views/Register/SendOTP').default,
  },
  // Setting
  MenuSetting: {
    name: 'MenuSetting',
    component: require('@app-views/Setting/MenuSetting').default,
  },
  Contant: {
    name: 'Contant',
    component: require('@app-views/Setting/Contant').default,
  },
  Basic: {
    name: 'Basic',
    component: require('@app-views/Setting/Basic').default,
  },
  Serverpackage: {
    name: 'Serverpackage',
    component: require('@app-views/Setting/Serverpackage').default,
  }
};

/**
 * App Main Screen
 */
const MainScreens: Record<TypeMainKeys, StackConfig> = {
  NavigationDrawer: {
    name: 'NavigationDrawer',
    component: require('@app-navigation/Drawer/navigation-drawer').default,
  },
  BottomTabs: {
    name: 'BottomTabs',
    component: require('@app-navigation/BottomTabs/navigation-bottom-tabs')
      .default,
  },
  //client
  HomeScreen: {
    name: 'HomeScreen',
    component: require('@app-views/HomeScreen/HomeScreen').default,
  },

};

/**
 * Drawer Navigation
 */
const DrawerScreens: Record<TypeDrawerKeys, StackConfig<'Drawer'>> = {
  BottomContainer: {
    name: 'BottomContainer',
    component: require('@app-navigation/BottomTabs/BottomContainer').default,
  },
  BottomTabs: {
    name: 'BottomTabs',
    component: require('@app-navigation/BottomTabs/BottomTab').default,
  },
};



/**
 * Register All Screen
 */
const AppScreens: Record<TypeAppKeys, any> = {
  Splash: {
    name: 'Splash',
    component: require('@app-views/Splash/Splash').default,
  },
  MainApp: {
    name: 'MainApp',
    screens: MainScreens,
  },
  LoginApp: {
    name: 'LoginApp',
    screens: LoginScreens,
  },
  // TutorialApp: {
  //   name: 'TutorialApp',
  //   screens: TutorialScreens,
  // },
};

export { AppScreens, DrawerScreens, MainScreens };
