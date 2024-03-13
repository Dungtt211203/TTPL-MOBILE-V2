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
  // Settings: Chưa Navigation vào Main được
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
  },
  LZPRO: {
    name: 'LZPRO',
    component: require('@app-views/Setting/LZPRO').default,
  },
  PayService: {
    name: 'PayService',
    component: require('@app-views/Setting/PayService').default,
  },
  LegalNew: {
    name: 'LegalNew',
    component: require('@app-views/Setting/LegalNew').default,
  },
  Notification: {
    name: 'Notification',
    component: require('@app-views/HomeScreen/Notification').default,
  },
  // Modal
  About: {
    name: 'About',
    component:
      require('@app-views/Setting/About')
        .default,
    options: {
      presentation: 'transparentModal',
      animation: 'none',
    },
  },
  BuyPackageModalLZPRO: {
    name: 'BuyPackageModalLZPRO',
    component:
      require('@app-views/Setting/BuyPackageModalLZPRO')
        .default,
    options: {
      presentation: 'transparentModal',
      animation: 'none',
    },
  },
  BuyPackageModalBasic: {
    name: 'BuyPackageModalBasic',
    component:
      require('@app-views/Setting/BuyPackageModalBasic')
        .default,
    options: {
      presentation: 'transparentModal',
      animation: 'none',
    },
  },
  BuyingGuide: {
    name: 'BuyingGuide',
    component:
      require('@app-views/Setting/BuyingGuide')
        .default,
    options: {
      presentation: 'transparentModal',
      animation: 'none',
    },
  },
};
/**
 * Tutorial Screens
 */
const LoginScreens: Record<TypeLoginKeys, StackConfig> = {
  Login: {
    name: 'Login',
    component: require('@app-views/Login/Login').default,
  },
  FormRegister: {
    name: 'FormRegister',
    component: require('@app-views/Register/FormRegister').default,
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

};
/**
 * Drawer Navigation
 */
const DrawerScreens: Record<TypeDrawerKeys, StackConfig> = {
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
