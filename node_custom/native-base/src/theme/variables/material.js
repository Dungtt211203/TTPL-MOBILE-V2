// @flow

import { Platform } from 'react-native';

import { PLATFORM } from './platform';

const platform = Platform.OS;

export default {
	// barStyle
	barStyleLight: 'light-content',
	barStyleDark: 'dark-content',

	// Accordion
	accordionBorderColor: '#d3d3d3',
	contentStyle: '#f5f4f5',
	expandedIconStyle: '#000',
	headerStyle: '#edebed',
	iconStyle: '#000',
	disableRow: '#a9a9a9',

	// ActionSheet
	containerTouchableBackgroundColor: 'rgba(0,0,0,0.4)',
	innerTouchableBackgroundColor: '#fff',
	listItemBorderColor: 'transparent',
	touchableTextColor: '#757575',

	// Android
	androidRippleColor: 'rgba(256, 256, 256, 0.3)',
	androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',

	// Badge
	badgeBg: '#ED1727',
	badgeColor: '#fff',

	// Button
	buttonDisabledBg: '#b5b5b5',

	// Card
	cardDefaultBg: '#fff',
	cardBorderColor: 'rgba(151,151,151,0.25)',

	// CheckBox
	checkboxBgColor: '#039BE5',
	checkboxTickColor: '#fff',
	checkboxDefaultColor: 'transparent',

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
	brandBgActionSheet: '#e5e5e5',

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
	datePickerTextColor: '#000',
	datePickerBg: 'transparent',

	// FAB
	fabBackgroundColor: 'blue',
	fabIconColor: '#fff',
	fabShadowColor: '#000',

	// Font
	fontFamily: platform === PLATFORM.IOS ? 'System' : 'Roboto',

	// Line Height
	listItemSelected: platform === PLATFORM.IOS ? '#0046ff' : '#0046ff',

	// Footer
	footerDefaultBg: platform === PLATFORM.IOS ? '#FFFAF8' : '#0046ff',

	// FooterTab
	tabBarTextColor: platform === PLATFORM.IOS ? '#6b6b6b' : '#b3c7f9',
	activeTab: platform === PLATFORM.IOS ? '#0046ff' : '#fff',
	sTabBarActiveTextColor: '#0046ff',
	tabBarActiveTextColor: platform === PLATFORM.IOS ? '#0046ff' : '#fff',
	tabActiveBgColor: platform === PLATFORM.IOS ? '#cde1f9' : '#0046ff',
	tabBar: '#FFFFFF',

	// Header
	toolbarBtnColor: platform === PLATFORM.IOS ? '#0046ff' : '#0046ff',
	toolbarDefaultBg: platform === PLATFORM.IOS ? '#FFFAF8' : '#0046ff',
	toolbarSideBarBg: platform === PLATFORM.IOS ? '#FFFAF8' : '#FFFAF8',
	toolbarInputColor: platform === PLATFORM.IOS ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.3)',
	searchBarBg: 'rgba(255,255,255,0.3)',
	toolbarBtnTextColor: platform === PLATFORM.IOS ? '#0046ff' : '#fff',
	toolbarDefaultBorder: platform === PLATFORM.IOS ? '#a7a6ab' : '#0046ff',
	iosStatusbar: platform === PLATFORM.IOS ? 'light-content' : 'light-content',
	statusBarLight: 'light-content',
	statusBarDark: 'dark-content',

	// InputGroup
	inputBorderColor: 'rgba(151,151,151,0.25)',
	inputSuccessBorderColor: '#2b8339',
	inputErrorBorderColor: '#ed2f2f',
	inputBgBase: '#fff',
	get inputColorPlaceholder() {
		return '#BEC2C9';
	},

	// List
	listBg: 'transparent',
	listBorderColor: 'rgba(151,151,151,0.25)',
	listDividerBg: '#FFFAF8',
	listBtnUnderlayColor: 'rgba(151,151,151,0.1)',
	listNoteColor: '#838A97',
	listHeaderColor: '#BEC2C9',

	// ProgressPie Bar
	defaultProgressColor: '#E4202D',
	inverseProgressColor: '#1A191B',

	// Radio Button
	radioSelectedColorAndroid: '#0046ff',

	// Segment
	segmentBackgroundColor: '#F3EEEC',
	segmentActiveBackgroundColor: '#fff',
	segmentTextColor: platform === PLATFORM.IOS ? '#4D535E' : '#4D535E',
	segmentActiveTextColor: platform === PLATFORM.IOS ? '#000' : '#000',
	segmentBorderColor: 'rgba(151,151,151,0.25)',
	segmentBorderColorMain: '#fff',

	// Spinner
	defaultSpinnerColor: '#45D56E',
	inverseSpinnerColor: '#1A191B',

	// Tab
	tabBarDisabledTextColor: 'rgba(255,255,255,0.3)',
	tabDefaultBg: platform === PLATFORM.IOS ? 'transparent' : 'transparent',
	topTabBarTextColor: platform === PLATFORM.IOS ? '#fff' : '#fff',
	topTabBarActiveTextColor: platform === PLATFORM.IOS ? '#0046ff' : '#0046ff',
	topTabBarBorderColor: platform === PLATFORM.IOS ? 'transparent' : 'transparent',
	topTabBarActiveBorderColor: platform === PLATFORM.IOS ? '#fff' : '#fff',

	// Tabs
	tabBgColor: 'transparent',

	// Text
	textColor: '#000',
	inverseTextColor: '#fff',

	// Title
	subtitleColor: platform === PLATFORM.IOS ? '#8e8e93' : '#FFF',
	titleFontColor: platform === PLATFORM.IOS ? '#000' : '#FFF',

	// Other
	borderColor: 'rgba(151,151,151,0.25)',
	dropdownLinkColor: '#414142',
};
