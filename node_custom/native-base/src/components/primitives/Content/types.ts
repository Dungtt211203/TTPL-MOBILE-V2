import { CustomProps, PlatformProps, RnViewStyleProp, SafeAreaProps, Testable } from 'native-base/components/types';
import { RefreshControlProps, ScrollViewProps, ViewProps } from 'react-native';
import { IBoxProps } from '../Box';

export interface InterfaceContentProps<T = null>
	extends Testable,
		ViewProps,
		SafeAreaProps,
		ScrollViewProps,
		IBoxProps,
		PlatformProps<T extends null ? IContentProps<any> : T> {
	/**
	 * The theme prop can be applied to any component of NativeBase.
	 */
	refreshing?: boolean;
	theme?: Object;
	padder?: boolean;
	disableKBDismissScroll?: boolean;
	enableResetScrollToCoords?: boolean;
	scrollEnabled?: boolean;
	style?: RnViewStyleProp | Array<RnViewStyleProp>;
	contentContainerStyle?: RnViewStyleProp | Array<RnViewStyleProp>;
	showsVerticalScrollIndicator?: boolean;
	cardTop?: boolean;
	scrollView?: boolean;
	useSpacer?: boolean;
	noPadding?: boolean;
	shadow?: boolean;
	gradient?: boolean;
	linearColor?: string[];
    loop?: boolean
    progress?: number;
    duration?: number;
}

export type IContentProps<T = null> = InterfaceContentProps<T> & CustomProps<'Content'>;
