import { StatusBarStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export * from './ExtraProps';
export * from './PlatformProps';
export * from './responsiveValue';
export * from './utils';

export type RnViewStyleProp = StyleProp<ViewStyle>;
export type RnTextStyleProp = StyleProp<TextStyle>;
export type RnStatusBarStyleProp = StyleProp<StatusBarStyle>;
export interface Testable {
	testID?: string;
}
