import {HomeScreenProps} from './HomeScreen/HomeScreen';

type TypeMainScreen = {
  NavigationDrawer: any;
  BottomTabs: any;
  //client
  HomeScreen: HomeScreenProps;
  // Modal
};

type TypeTutorialScreen = {
  // Tutorial: TutorialProps;
};

type TypeLoginScreen = {
  // Login: LoginProps;
  // Register: RegisterProps;
  // ForgetPassword: ForgetPasswordProps;
  // ResetPassword: ResetPasswordProps;
  // Verification: VerificationProps;
  // NewPassword: NewPasswordProps;
};

type TypeDrawerScreen = {
  BottomTabs: any;
  BottomContainer: any;
  // AddressBook: any;
};

type TypeAppScreen = {
  Splash: any;
  // TutorialApp: any;
  MainApp: any;
  LoginApp: any;
};

type TypeNavigation = TypeMainScreen &
  TypeTutorialScreen &
  TypeAppScreen &
  TypeDrawerScreen &
  TypeLoginScreen;

export type {
  TypeMainScreen,
  TypeTutorialScreen,
  TypeAppScreen,
  TypeNavigation,
  TypeDrawerScreen,
  TypeLoginScreen,
};
export type TypeMainKeys = keyof TypeMainScreen;
export type TypeTutorialKeys = keyof TypeTutorialScreen;
export type TypeLoginKeys = keyof TypeLoginScreen;
export type TypeDrawerKeys = keyof TypeDrawerScreen;
export type TypeAppKeys = keyof TypeAppScreen;
export type TypeNavigationKeys = keyof TypeNavigation;
