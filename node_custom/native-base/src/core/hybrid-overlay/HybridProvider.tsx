import React, { useCallback, useEffect, useMemo } from 'react';
import { Platform, StatusBar } from 'react-native';
import { HybridContext } from './Context';
import { useModeManager } from './../color-mode/hooks';
import type { IColorModeProviderProps } from './../color-mode';
import { keyboardDismissHandlerManager } from '../../hooks';
import platform from 'native-base/theme/variables/platform';
import darkColor from 'native-base/theme/variables/darkColor';
import setDefaultThemeStyle from 'native-base/init';
import lightColor from 'native-base/theme/variables/lightColor';

const HybridProvider = ({
	children,
	options: { initialColorMode = 'light', accessibleColors: isTextColorAccessible = false, useSystemColorMode },
	colorModeManager,
}: IColorModeProviderProps) => {
	// Color-mode content
	const { colorMode, setColorMode } = useModeManager(initialColorMode, useSystemColorMode, colorModeManager);

	useEffect(() => {
		setTheme(colorMode === 'light' ? 'dark' : 'light');
	}, []);

	const toggleColorMode = React.useCallback(() => {
		setTheme(colorMode);
		setColorMode(colorMode === 'light' ? 'dark' : 'light');
	}, [colorMode, setColorMode]);

	const setTheme = useCallback((mode: string) => {
		let theme = platform;

		if (mode === 'light') {
			StatusBar.setBarStyle('light-content');
			theme = { ...platform, ...darkColor };
		} else {
			StatusBar.setBarStyle('dark-content');
			theme = { ...platform, ...lightColor };
		}
		setDefaultThemeStyle(theme);
	}, []);

	// Accessible color hook
	const [accessibleColors, setAccessibleColors] = React.useState<boolean>(isTextColorAccessible);

	const contextValue = useMemo(() => {
		return {
			colorMode: {
				colorMode,
				toggleColorMode,
				setColorMode,
				accessibleColors,
				setAccessibleColors,
			},
		};
	}, [colorMode, toggleColorMode, setColorMode, accessibleColors, setAccessibleColors]);

	React.useEffect(() => {
		let escapeKeyListener: any = null;

		if (Platform.OS === 'web') {
			escapeKeyListener = (e: KeyboardEvent) => {
				if (e.key === 'Escape') {
					if (keyboardDismissHandlerManager.length() > 0) {
						const lastHandler: any = keyboardDismissHandlerManager.pop();
						lastHandler();
					}
				}
			};
			document.addEventListener('keydown', escapeKeyListener);
		}

		return () => {
			if (Platform.OS === 'web') {
				document.removeEventListener('keydown', escapeKeyListener);
			}
		};
	}, []);

	return <HybridContext.Provider value={contextValue}>{children}</HybridContext.Provider>;
};

export default HybridProvider;
