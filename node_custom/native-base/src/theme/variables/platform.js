// @flow

import color from 'color';
import {Platform, Dimensions, PixelRatio} from 'react-native';

export const PLATFORM = {
  IOS: 'ios',
  MATERIAL: 'material',
  ANDROID: 'android',
  DARK: 'dark',
  LIGHT: 'light',
  WEB: 'web',
};

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;

const isIphoneX =
  platform === PLATFORM.IOS &&
  (deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 896 ||
    deviceWidth === 896 ||
    deviceHeight === 932 ||
    deviceWidth === 932 ||
    deviceHeight === 852 ||
    deviceWidth === 852 ||
    deviceHeight === 844 ||
    deviceWidth === 844 ||
    deviceHeight === 926 ||
    deviceWidth === 926 ||
    deviceHeight === 780 ||
    deviceWidth === 780);
const rem = deviceWidth < 400 ? deviceWidth / 400 : 1;
const isIpad = deviceWidth > 720;

const paddingTop = 50;

export default {
  platformStyle,
  platform,
  rem,
  paddingTop,

  fontA4SpeedBold: Platform.OS === 'ios' ? 'A4SPEEDBold' : 'A4SPEED-Bold',
  fontDosisLight: Platform.OS === 'ios' ? 'Dosis-Light' : 'Dosis-Light',
  fontDosisRegular: Platform.OS === 'ios' ? 'Dosis-Regular' : 'Dosis-Regular',

  // barStyle
  barStyleLight: 'light-content',
  barStyleDark: 'dark-content',

  // Accordion
  accordionBorderColor: '#d3d3d3',
  accordionContentPadding: 10,
  accordionIconFontSize: 18,
  contentStyle: '#f5f4f5',
  expandedIconStyle: '#000',
  headerStyle: '#edebed',
  iconStyle: '#000',
  disableRow: '#a9a9a9',

  // ActionSheet
  elevation: 4,
  containerTouchableBackgroundColor: 'rgba(0,0,0,0.4)',
  innerTouchableBackgroundColor: '#fff',
  listItemHeight: 50,
  listItemBorderColor: 'transparent',
  marginHorizontal: -16,
  marginLeft: 16,
  marginTop: 16,
  minHeight: 56,
  padding: 16,
  touchableTextColor: '#757575',

  // Android
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  buttonUppercaseAndroidText: true,

  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: platform === PLATFORM.IOS ? 3 : 0,

  // Button
  buttonFontFamily: platform === PLATFORM.IOS ? 'System' : 'Roboto_medium',
  buttonDisabledBg: '#b5b5b5',
  buttonPadding: 6,
  buttonDefaultActiveOpacity: 0.5,
  buttonDefaultFlex: 1,
  buttonDefaultBorderRadius: 12,
  buttonDefaultBorderWidth: 1,
  buttonFontSize: 15,
  buttonHeightBase: 44,
  buttonHeightSmall: 30,
  buttonHeightLarge: 56,
  get buttonPrimaryBg() {
    return this.brandPrimary;
  },
  get buttonPrimaryColor() {
    return this.inverseTextColor;
  },
  get buttonInfoBg() {
    return this.brandInfo;
  },
  get buttonInfoColor() {
    return this.inverseTextColor;
  },
  get buttonSuccessBg() {
    return this.brandSuccess;
  },
  get buttonSuccessColor() {
    return this.inverseTextColor;
  },
  get buttonDangerBg() {
    return this.brandDanger;
  },
  get buttonDangerColor() {
    return this.inverseTextColor;
  },
  get buttonWarningBg() {
    return this.brandWarning;
  },
  get buttonWarningColor() {
    return this.inverseTextColor;
  },
  get buttonTextSize() {
    return platform === PLATFORM.IOS
      ? this.fontSizeBase * 1
      : this.fontSizeBase - 1;
  },
  get buttonTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get buttonTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: '#fff',
  cardBorderColor: 'rgba(151,151,151,0.25)',
  cardBorderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  cardBorderRadius: 12,
  cardItemPadding: 8,

  // CheckBox
  CheckboxRadius: platform === PLATFORM.IOS ? 13 : 0,
  CheckboxBorderWidth: platform === PLATFORM.IOS ? 1 : 2,
  CheckboxPaddingLeft: platform === PLATFORM.IOS ? 4 : 2,
  CheckboxPaddingBottom: platform === PLATFORM.IOS ? 0 : 5,
  CheckboxIconSize: platform === PLATFORM.IOS ? 19 : 16,
  CheckboxIconMarginTop: platform === PLATFORM.IOS ? undefined : 1,
  CheckboxFontSize: platform === PLATFORM.IOS ? 12 / 0.9 : 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: '#fff',
  checkboxDefaultColor: 'transparent',
  checkboxTextShadowRadius: 0,

  // Color
  brandPrimary: '#FFFFFF',
  brandSecondary: '#BEC2C9',
  brandSecondary_1: '#4D535E',
  brandSecondary_2: '#838A97',
  brandSecondary_3: '#DBDEE4',
  brandSecondary_4: '#F0F2F5',
  brandFocus: '#F3EEEC',
  brandInfo: '#62B1F6',
  brandSuccess: '#16c784', //00E38D
  brandDanger: '#ea3943', //FE193A
  brandWarning: '#FF9500',
  brandDark: '#000',
  brandGrey: '#838A97',
  brandLight: '#fff',
  tintColorPrimary: '#0046ff',
  opacityTint: 1,
  brandBgActionSheet: '#e5e5e5',
  inactive: '#F2F2F2',
  error: '#E42E2E',

  // Container
  containerBgColor: '#FFFAF8',
  backgroundMain: '#0046ff',
  backgroundBottomTabs: '#fff',
  backgroundBody: '#E7EAED',
  backgroundBodyTransparent: 'rgba(255,250,248,0)',
  backgroundMaskTransparent: 'rgba(255,250,248,0.6)',
  backgroundCard: '#fff',
  backgroundNavTransparent: 'rgba(255,255,255,0.3)',
  skeletonBackground: '#DBDEE4',
  skeletonHighlight: '#F0F2F5',

  // Date Picker
  datePickerFlex: 1,
  datePickerPadding: 10,
  datePickerTextColor: '#000',
  datePickerBg: 'transparent',

  // FAB
  fabBackgroundColor: 'blue',
  fabBorderRadius: 28,
  fabBottom: 0,
  fabButtonBorderRadius: 20,
  fabButtonHeight: 40,
  fabButtonLeft: 7,
  fabButtonMarginBottom: 10,
  fabContainerBottom: 20,
  fabDefaultPosition: 20,
  fabElevation: 4,
  fabIconColor: '#fff',
  fabIconSize: 24,
  fabShadowColor: '#000',
  fabShadowOffsetHeight: 2,
  fabShadowOffsetWidth: 0,
  fabShadowOpacity: 0.4,
  fabShadowRadius: 2,
  fabWidth: 56,

  // Font
  DefaultFontSize: 15,
  fontFamily: platform === PLATFORM.IOS ? 'System' : 'Roboto',
  fontSizeBase: 15,
  fontSizeSmall: 12,
  fontSizeLarge: 18,
  get fontSizeH1() {
    return this.fontSizeBase * 2; // 30
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6; //24
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4; // 21
  },
  get fontSizeH4() {
    return this.fontSizeBase * 1.2; // 18
  },

  // Line Height
  buttonLineHeight: 19,
  lineHeightBase: 20,
  lineHeightH1: 40,
  lineHeightH2: 32,
  lineHeightH3: 28,
  lineHeightH4: 24,
  lineHeight: platform === PLATFORM.IOS ? 20 : 24,
  listItemSelected: platform === PLATFORM.IOS ? '#0046ff' : '#0046ff',

  // Footer
  footerHeight: 68,
  footerDefaultBg: platform === PLATFORM.IOS ? '#FFFAF8' : '#0046ff',
  footerPaddingBottom: isIphoneX ? 30 : 0,

  // FooterTab
  tabBarTextColor: platform === PLATFORM.IOS ? '#6b6b6b' : '#b3c7f9',
  tabBarTextSize: platform === PLATFORM.IOS ? 14 : 11,
  activeTab: platform === PLATFORM.IOS ? '#0046ff' : '#fff',
  sTabBarActiveTextColor: '#0046ff',
  tabBarActiveTextColor: platform === PLATFORM.IOS ? '#0046ff' : '#fff',
  tabActiveBgColor: platform === PLATFORM.IOS ? '#cde1f9' : '#0046ff',
  tabBar: '#FFFFFF',

  // Header
  toolbarBtnColor: platform === PLATFORM.IOS ? '#0046ff' : '#0046ff',
  toolbarDefaultBg: '#D9D9D9',
  toolbarSideBarBg: platform === PLATFORM.IOS ? '#FFFAF8' : '#FFFAF8',
  toolbarHeight: platform === PLATFORM.IOS ? 64 : 48,
  toolbarSearchIconSize: platform === PLATFORM.IOS ? 20 : 20,
  toolbarInputColor:
    platform === PLATFORM.IOS
      ? 'rgba(255,255,255,0.3)'
      : 'rgba(255,255,255,0.3)',
  searchBarBg: 'rgba(255,255,255,0.3)',
  searchBarHeight: platform === PLATFORM.IOS ? 32 : 32,
  searchBarInputHeight: platform === PLATFORM.IOS ? 32 : 32,
  toolbarBtnTextColor: platform === PLATFORM.IOS ? '#0046ff' : '#fff',
  toolbarDefaultBorder: platform === PLATFORM.IOS ? '#a7a6ab' : '#0046ff',
  iosStatusbar: platform === PLATFORM.IOS ? 'light-content' : 'light-content',
  statusBarLight: 'light-content',
  statusBarDark: 'dark-content',
  get statusBarColor() {
    // return color(this.toolbarDefaultBg).darken(0.2).hex();
    return color(this.toolbarDefaultBg).darken(0.0).hex();
  },
  get statusBarSideBarColor() {
    return color(this.toolbarSideBarBg).darken(0.0).hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).hex();
  },

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: platform === PLATFORM.IOS ? 30 : 28,
  iconHeaderSize: platform === PLATFORM.IOS ? 33 : 24,

  // InputGroup
  inputFontSize: 15,
  inputBorderColor: 'rgba(151,151,151,0.25)',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',
  inputHeightBase: 40,
  inputBgBase: '#fff',
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return '#BEC2C9';
  },

  // List
  listBg: 'transparent',
  listBorderColor: 'rgba(151,151,151,0.25)',
  listDividerBg: '#FFFAF8',
  listBtnUnderlayColor: 'rgba(151,151,151,0.1)',
  listItemPadding: platform === PLATFORM.IOS ? 8 : 8,
  listNoteColor: '#838A97',
  listNoteSize: 13,
  listHeaderColor: '#BEC2C9',
  listHeaderSize: 11,

  // ProgressPie Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  // Radio Button
  radioBtnSize: platform === PLATFORM.IOS ? 25 : 23,
  radioSelectedColorAndroid: '#0046ff',
  radioBtnLineHeight: platform === PLATFORM.IOS ? 29 : 24,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: '#F3EEEC',
  segmentActiveBackgroundColor: '#fff',
  segmentTextColor: platform === PLATFORM.IOS ? '#4D535E' : '#4D535E',
  segmentActiveTextColor: platform === PLATFORM.IOS ? '#000' : '#000',
  segmentBorderColor: 'rgba(151,151,151,0.25)',
  segmentBorderColorMain: '#fff',
  segmentBorderRadius: 12,
  segmentHeightBase: 40,

  // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',

  // Tab
  tabBarDisabledTextColor: 'rgba(255,255,255,0.3)',
  tabDefaultBg: platform === PLATFORM.IOS ? 'transparent' : 'transparent',
  topTabBarTextColor: platform === PLATFORM.IOS ? '#fff' : '#fff',
  topTabBarActiveTextColor: platform === PLATFORM.IOS ? '#0046ff' : '#0046ff',
  topTabBarBorderColor:
    platform === PLATFORM.IOS ? 'transparent' : 'transparent',
  topTabBarActiveBorderColor: platform === PLATFORM.IOS ? '#fff' : '#fff',

  // Tabs
  tabBgColor: 'transparent',
  tabFontSize: 14,

  // Text
  textColor: '#000',
  inverseTextColor: '#fff',
  noteFontSize: 12,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleColor: '#000',
  titleFontfamily: platform === PLATFORM.IOS ? 'System' : 'Roboto_medium',
  titleFontSize: platform === PLATFORM.IOS ? 18 : 18,
  subTitleFontSize: platform === PLATFORM.IOS ? 11 : 12,
  subtitleColor: platform === PLATFORM.IOS ? '#8e8e93' : '#FFF',
  titleFontColor: platform === PLATFORM.IOS ? '#000' : '#FFF',

  // Other
  borderRadiusBase: platform === PLATFORM.IOS ? 12 : 12,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  borderColor: 'rgba(151,151,151,0.25)',
  contentPadding: 16,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  isIpad,
  inputGroupRoundedBorderRadius: 30,

  // iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34,
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21,
    },
  },
};
