import { HomeScreenProps } from './HomeScreen/HomeScreen';
import { NotificationProps } from './HomeScreen/Notification';
import { FormLoginProps } from './Login/FormLogin';
import { LoginProps } from './Login/Login';
import { SelectAccountProps } from './Login/SelectAccount';
import { SelectBusinessProps } from './Login/SelectBussiness';
import { ForgetPasswordProps } from './Register/ForgotPassword';
import { ResetPasswordProps } from './Register/ResetPassword';
import { SendOTPProps } from './Register/SendOTP';
import { AboutProps } from './Setting/About';
import { BasicProps } from './Setting/Basic';
import { BuyPackageModalBasicProps } from './Setting/BuyPackageModalBasic';
import { BuyPackageModalLZPROProps } from './Setting/BuyPackageModalLZPRO';
import { BuyingGuideProps } from './Setting/BuyingGuide';
import { ContantProps } from './Setting/Contant';
import { LZPROProps } from './Setting/LZPRO';
import { LegalNewProps } from './Setting/LegalNew';
import { MenuSettingProps } from './Setting/MenuSetting';
import { PayServiceProps } from './Setting/PayService';
import { ServerpackageProps } from './Setting/Serverpackage';

type TypeMainScreen = {
  NavigationDrawer: any;
  BottomTabs: any;
  //client
  HomeScreen: HomeScreenProps;

};

type TypeTutorialScreen = {
  // Tutorial: TutorialProps;
};

type TypeLoginScreen = {
  Login: LoginProps;
  FormLogin: FormLoginProps;
  SelectAccount: SelectAccountProps;
  SelectBusiness: SelectBusinessProps;
  ForgetPassword: ForgetPasswordProps;
  ResetPassword: ResetPasswordProps;
  SendOTP: SendOTPProps;
  // Setting: Chưa Navigation vào Main được
  MenuSetting: MenuSettingProps;
  Contant: ContantProps;
  Basic: BasicProps;
  Serverpackage: ServerpackageProps;
  LZPRO: LZPROProps;
  BuyPackageModalLZPRO: BuyPackageModalLZPROProps;
  BuyPackageModalBasic: BuyPackageModalBasicProps;
  BuyingGuide: BuyingGuideProps;
  PayService: PayServiceProps;
  About: AboutProps;
  LegalNew: LegalNewProps;
  Notification: NotificationProps;
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
