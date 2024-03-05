import { useLayout } from 'native-base/hooks';
import * as React from 'react';
import { Animated, Keyboard, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, View } from 'react-native';
import type { EventEmitterProps, Listener, NavigationState, PagerProps, Route } from './types';
import useAnimatedValue from './useAnimatedValue';

type Props<T extends Route> = PagerProps & {
	onIndexChange: (index: number) => void;
	navigationState: NavigationState<T>;
	children: (
		props: EventEmitterProps & {
			// Animated value which represents the state of current index
			// It can include fractional digits as it represents the intermediate value
			position: Animated.AnimatedInterpolation<number>;
			// Function to actually render the content of the pager
			// The parent component takes care of rendering
			render: (children: React.ReactNode) => React.ReactNode;
			// Callback to call when switching the tab
			// The tab switch animation is performed even if the index in state is unchanged
			jumpTo: (key: string) => void;
		},
	) => React.ReactElement;
};

export default function PagerViewAdapter<T extends Route>({
	keyboardDismissMode = 'auto',
	swipeEnabled = true,
	navigationState,
	onIndexChange,
	onSwipeStart,
	onSwipeEnd,
	children,
	style,
	animationEnabled,
	...rest
}: Props<T>) {
	const { layout, onLayout } = useLayout();
	const { index } = navigationState;

	const listenersRef = React.useRef<Listener[]>([]);

	const indexRef = React.useRef<number>(index);
	const scrollRef = React.useRef<ScrollView>(null);
	const navigationStateRef = React.useRef(navigationState);

	const position = useAnimatedValue(index);

	React.useEffect(() => {
		navigationStateRef.current = navigationState;
	});

	const jumpTo = React.useCallback(
		(key: string) => {
			const index = navigationStateRef.current.routes.findIndex((route: { key: string }) => route.key === key);

			scrollRef.current?.scrollTo({ x: index * layout.width, y: 0, animated: animationEnabled });
		},
		[animationEnabled, layout],
	);

	React.useEffect(() => {
		if (keyboardDismissMode === 'auto') {
			Keyboard.dismiss();
		}

		if (indexRef.current !== index) {
			scrollRef.current?.scrollTo({ x: index * layout.width, y: 0, animated: animationEnabled });
		}
	}, [keyboardDismissMode, index, animationEnabled, position]);

	const addEnterListener = React.useCallback((listener: Listener) => {
		listenersRef.current.push(listener);

		return () => {
			const index = listenersRef.current.indexOf(listener);

			if (index > -1) {
				listenersRef.current.splice(index, 1);
			}
		};
	}, []);

	const onScroll = React.useCallback(
		(event: NativeSyntheticEvent<NativeScrollEvent>) => {
			const layoutMesasurement = event.nativeEvent.layoutMeasurement;
			const contentOffset = event.nativeEvent.contentOffset;
			position.setValue(contentOffset.x / layoutMesasurement.width);
		},
		[position],
	);

	const onScrollEnd = React.useCallback(
		(event: NativeSyntheticEvent<NativeScrollEvent>) => {
			const layoutMesasurement = event.nativeEvent.layoutMeasurement;
			const contentOffset = event.nativeEvent.contentOffset;
			const value = contentOffset.x / layoutMesasurement.width;
			const index = value > 0 ? Math.ceil(value) : Math.floor(value);

			indexRef.current = index;
			onIndexChange(index);

			onSwipeEnd?.();
		},
		[onSwipeEnd, onIndexChange],
	);

	const onScrollStart = React.useCallback(
		(event: NativeSyntheticEvent<NativeScrollEvent>) => {
			const layoutMesasurement = event.nativeEvent.layoutMeasurement;
			const contentOffset = event.nativeEvent.contentOffset;
			const value = contentOffset.x / layoutMesasurement.width;
			const next = index + (value > 0 ? Math.ceil(value) : Math.floor(value));

			if (next !== index) {
				listenersRef.current.forEach((listener) => listener(next));
			}
			onSwipeStart?.();
		},
		[index, onSwipeStart],
	);

	return children({
		position: position,
		addEnterListener,
		jumpTo,
		render: (children) => (
			<Animated.ScrollView
				{...rest}
				ref={scrollRef}
				style={[styles.container, style]}
				onLayout={onLayout}
				scrollEnabled={swipeEnabled}
				onMomentumScrollEnd={onScrollEnd}
				onMomentumScrollBegin={onScrollStart}
				keyboardDismissMode={keyboardDismissMode === 'auto' ? 'on-drag' : keyboardDismissMode}
				scrollEventThrottle={16}
				horizontal
				onScroll={onScroll}
				pagingEnabled
			>
                {/* <View style={{width:390, height: 200, backgroundColor:'red', borderBottomRightRadius: 30}} />
                <View style={{width:390, height: 200, backgroundColor:'blue'}} /> */}
				{children}
			</Animated.ScrollView>
		),
	});
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
