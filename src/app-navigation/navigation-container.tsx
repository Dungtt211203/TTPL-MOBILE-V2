import { useOnEventCallback } from '@app-helper/hooks';
import { AppScreens, DrawerScreens } from '@app-navigation/navigation-screens';
import { addListenerAction, setTopLevelNavigator } from '@app-navigation/navigation-services';
import { TypeAppKeys } from '@app-views/types';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { ServiceFirebaseAnalytics, ServiceListener, ServiceSecure, ServiceSetting } from '@app-services';
// import { EVENT } from '@app-services/service-listener';
import { NavigationContainer as ReactNavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { keys } from 'lodash';
import React from 'react';

const MainStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const StackContainer = (props: { route: any }) => {
	const key_screen: TypeAppKeys = props.route.params.keyScreen;
	const stack_screen = AppScreens[key_screen];
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{keys(stack_screen.screens).map((key) => {
				const value = stack_screen.screens[key];
				return (
					<Stack.Screen
						key={value.name}
						name={value.name}
						component={value.component}
						options={value.options}
					/>
				);
			})}
		</Stack.Navigator>
	);
};

let unsubscribe;
let current_state: any;

const NavigationContainer = () => {
	// useEffect(() => {
	// 	ServiceSecure.privacy();
	// 	return () => {
	// 		unsubscribe && unsubscribe();
	// 	};
	// }, []);

	// Check when react navigation is ready
	const onNavigationReady = useOnEventCallback(async () => {
		// await ServiceSetting.init();
		unsubscribe = addListenerAction(); // listen Action navigate
		// ServiceFirebaseAnalytics.addNavigationListener(); //Update action on firebase
		// ServiceListener.emit(EVENT.NAVIGATION_READY, true);
	});

	const onStateChange = useOnEventCallback((state) => {
		current_state = state;
	});

	return (
		<ReactNavigationContainer
			ref={(ref) => setTopLevelNavigator(ref)}
			onReady={onNavigationReady}
			onStateChange={onStateChange}
			initialState={current_state}
		>
			<MainStack.Navigator screenOptions={{ headerShown: false }}>
				{keys(AppScreens).map((key) => {
					const value = AppScreens[key as TypeAppKeys];
					return (
						<MainStack.Screen
							key={value.name}
							name={value.name}
							component={value.component ? value.component : StackContainer}
							initialParams={{ keyScreen: key }}
							options={value.options}
						/>
					);
				})}
			</MainStack.Navigator>
		</ReactNavigationContainer>
	);
};

export default NavigationContainer;
