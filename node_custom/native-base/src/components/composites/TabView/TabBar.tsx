import { useLayout, usePropsResolution } from 'native-base/hooks';
import React, { useRef } from 'react';
import { Animated, LayoutChangeEvent, ScrollView, TouchableOpacity, View } from 'react-native';
import Box from '../../primitives/Box';
import { Stack } from '../../primitives/Stack';
import Text from '../../primitives/Text';
import { Layout } from './RNTabView/types';
import { ITabBarProps } from './types';

const TabBar: React.FC<ITabBarProps> = ({ navigationState, jumpTo, position, variant, itemStyle, ...props }) => {
	const { layout: _layout, onLayout } = useLayout();
	const [layout, setLayout] = React.useState<Layout>({ width: 0, height: 0 });
	const { _stack, _animatedView, _text, _textSelected } = usePropsResolution('TabBar', { ...props, variant });

	const inputRange = navigationState.routes.map((x, i) => i);
	const translateX = position.interpolate({
		inputRange,
		outputRange: inputRange.map((index) => index * layout.width),
	});

	const handleLayout = (e: LayoutChangeEvent) => {
		const { height, width } = e.nativeEvent.layout;

		setLayout((prevLayout: any) => {
			if (prevLayout.width === width && prevLayout.height === height) {
				return prevLayout;
			}

			return { height, width };
		});
	};

	return (
		<Stack flexDir={'row'} {..._stack} borderRadius={'md'} alignItems={'center'} direction={'row'}>
			<ScrollView onLayout={onLayout} horizontal showsHorizontalScrollIndicator={false}>
				<Animated.View
					style={{
						transform: [
							{
								translateX,
							},
						],
						width: layout.width,
						height: '100%',
						position: 'absolute',
					}}
				>
					<Box {..._animatedView} />
				</Animated.View>
				{navigationState.routes.map((route, i) => {
					return (
						<View key={i} onLayout={handleLayout}>
							<TouchableOpacity
								style={
									itemStyle || {
										width: _layout.width / inputRange.length,
										paddingBottom: variant === 'outline' ? 10 : 4,
										paddingVertical: 4,
									}
								}
								activeOpacity={1}
								onPress={() => jumpTo(route.key)}
							>
								<Text {...(navigationState.index === i ? _textSelected : _text)} textAlign={'center'}>
									{route.title}
								</Text>
							</TouchableOpacity>
						</View>
					);
				})}
			</ScrollView>
		</Stack>
	);
};

export default TabBar;
export type { ITabBarProps };
