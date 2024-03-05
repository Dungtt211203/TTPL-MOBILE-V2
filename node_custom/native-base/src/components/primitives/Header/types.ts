import { IBoxProps, RnStatusBarStyleProp } from 'native-base';
import { CustomProps, Testable } from 'native-base/components/types';
import { ViewProps } from 'react-native';
import { InterfaceBoxProps } from '../Box';

interface InterfaceHeaderProps extends InterfaceBoxProps, Testable {
	iosBarStyle?: RnStatusBarStyleProp;
	translucent?: boolean;
	transparent?: boolean;
}

export type IHeaderProps = InterfaceHeaderProps & CustomProps<'Header'>;
