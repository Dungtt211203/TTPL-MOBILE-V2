import { IBoxProps, IStackProps } from 'native-base/components/primitives';
import { ILinearGradientProps } from 'native-base/components/primitives/Box/types';
import { ColorType, CustomProps, ResponsiveValue } from 'native-base/components/types';
import { StyleProp, ViewStyle } from 'react-native';
import { NavigationState, Route, SceneRendererProps } from './RNTabView';
import { Layout, PagerProps } from './RNTabView/types';

export interface InterfaceTabViewProps<T extends Route = any> extends IBoxProps, PagerProps {
    styleTab?: IStackProps;
    renderTabBar?: (props: SceneRendererProps & { navigationState: NavigationState<T> }) => React.ReactNode;
    onIndexChange?: (index: number) => void;
    tabBarPosition?: 'top' | 'bottom';
    initialLayout?: Partial<Layout>;
    lazy?: ((props: { route: T }) => boolean) | boolean;
    lazyPreloadDistance?: number;
    sceneContainerStyle?: StyleProp<ViewStyle>;
    pagerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    keyboardDismissMode?: 'none' | 'on-drag' | 'auto';
    swipeEnabled?: boolean;
    animationEnabled?: boolean;
    currentPage?: number
    _stack?: StyleProp<ViewStyle>
}

export interface InterfaceScenceComponent extends IBoxProps {
    header: string;
}

export interface InterfaceTabBar<T extends Route = Route> extends SceneRendererProps {
    style?: IStackProps;
    colorScheme?: string;
    navigationState: NavigationState<T>;
    itemStyle?: StyleProp<ViewStyle>;

    _stack?: StyleProp<ViewStyle>

    bg?: ResponsiveValue<ColorType | (string & {}) | ILinearGradientProps>;
    background?: ResponsiveValue<ColorType | (string & {}) | ILinearGradientProps>;
    bgColor?: ResponsiveValue<ColorType | (string & {}) | ILinearGradientProps>;
    backgroundColor?: ResponsiveValue<ColorType | (string & {}) | ILinearGradientProps>;
}

export type ITabViewProps = InterfaceTabViewProps & CustomProps<'TabView'> & CustomProps<'TabBar'>;
export type ITabBarProps = InterfaceTabBar & CustomProps<'TabBar'>;