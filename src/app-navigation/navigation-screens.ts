import {
  TypeAppKeys,
  TypeDrawerKeys,
  TypeLoginKeys,
  TypeMainKeys,
  TypeTutorialKeys,
} from '@app-views/types';
import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
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
    | (({params}: {params: object | undefined}) => string | undefined)
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
  // Register: {
  //   name: 'Register',
  //   component: require('@app-views/Register/Register').default,
  // },
  // NewPassword: {
  //   name: 'NewPassword',
  //   component: require('@app-views/Login/NewPassword').default,
  // },
  // ForgetPassword: {
  //   name: 'ForgetPassword',
  //   component: require('@app-views/Password/ForgetPassword').default,
  // },
  // ResetPassword: {
  //   name: 'ResetPassword',
  //   component: require('@app-views/Password/ResetPassword').default,
  // },
  // Verification: {
  //   name: 'Verification',
  //   component: require('@app-views/Verification/Verification').default,
  // },
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

  // Modal
  // ModalAddProduct: {
  //   name: 'ModalAddProduct',
  //   component: require('@app-views/Modal/ModalAddProduct').default,
  //   options: {
  //     presentation: 'transparentModal',
  //     animation: 'none',
  //   },
  // },
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

export {AppScreens, DrawerScreens, MainScreens};
