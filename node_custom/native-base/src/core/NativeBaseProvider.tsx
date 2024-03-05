import * as React from 'react';
import { INativebaseConfig, NativeBaseConfigProvider, defaultConfig } from './NativeBaseContext';
import { getClosestBreakpoint, platformSpecificSpaceUnits } from 'native-base/theme/tools';
import { Platform, useWindowDimensions } from 'react-native';
import { theme as defaultTheme, ITheme } from './../theme';
import { HybridProvider } from './hybrid-overlay';
import {
	SafeAreaProvider,
	Metrics,
	initialWindowMetrics as defaultInitialWindowMetrics,
} from 'react-native-safe-area-context';
import { ResponsiveQueryProvider } from 'native-base/utils/useResponsiveQuery/ResponsiveQueryProvider';
import { OverlayProvider } from '@react-native-aria/overlays';
import { ToastProvider, ToastRef } from 'native-base/components/composites/Toast';
import { useToast } from 'native-base';

// https://github.com/th3rdwave/react-native-safe-area-context/issues/132
const defaultInitialWindowMetricsBasedOnPlatform: Metrics | null = Platform.select({
	web: {
		frame: { x: 0, y: 0, width: 0, height: 0 },
		insets: { top: 0, left: 0, right: 0, bottom: 0 },
	},
	default: defaultInitialWindowMetrics,
});

export interface NativeBaseProviderProps {
	config?: INativebaseConfig;
	children?: React.ReactNode;
	initialWindowMetrics?: Metrics;
	isSSR?: boolean;
}

const NativeBaseProvider: React.FC<NativeBaseProviderProps> = ({
	config = defaultConfig,
	children,
	initialWindowMetrics,
	isSSR,
}) => {
	const windowWidth = useWindowDimensions()?.width;
	const theme = defaultTheme;

	const newTheme = React.useMemo(() => {
		if (config.enableRem) {
			return platformSpecificSpaceUnits(theme);
		}
		return theme;
	}, [config.enableRem, theme]);

	const currentBreakpoint = React.useMemo(
		() => getClosestBreakpoint(newTheme.breakpoints, windowWidth),
		[windowWidth, newTheme.breakpoints],
	);

	return (
		<NativeBaseConfigProvider config={defaultConfig} theme={defaultTheme} currentBreakpoint={currentBreakpoint}>
			<SafeAreaProvider initialMetrics={initialWindowMetrics ?? defaultInitialWindowMetricsBasedOnPlatform}>
				<ResponsiveQueryProvider disableCSSMediaQueries={!isSSR}>
					<HybridProvider options={config?.colorMode || theme.config}>
						<OverlayProvider isSSR={isSSR}>
							<ToastProvider>
								<InitializeToastRef />
								{children}
							</ToastProvider>
						</OverlayProvider>
					</HybridProvider>
				</ResponsiveQueryProvider>
			</SafeAreaProvider>
		</NativeBaseConfigProvider>
	);
};

const InitializeToastRef = () => {
	const toast = useToast();
	ToastRef.current = toast;
	return null;
};

export { NativeBaseProvider };
