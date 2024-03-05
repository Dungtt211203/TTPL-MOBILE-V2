import { variables } from 'native-base';
import { useColorMode } from 'native-base/core';
import { useLayout } from 'native-base/hooks';
import { memo } from 'react';
import { StyleProp, View, ViewStyle, useWindowDimensions } from 'react-native';
import { Path, Svg } from 'react-native-svg';

const R = 8;

export default memo((props?: { color?: string; style?: StyleProp<ViewStyle> }) => {
	const { color = variables.brandSecondary, style } = props;
	useColorMode();
	const { layout, onLayout } = useLayout();
	const WIDTH = layout.width || 428;
	const W = WIDTH / 4 - R;
	const shadow = {
		shadowColor: '#101F491A',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
		bottom: -1,
	};

	const d = [
		`M0 ${R}`,
		`h${W}`,
		`c ${R} 0, ${R} ${R}, ${R + 5} ${R}`,
		`h${WIDTH / 2 - 2 * R}`,
		`c${R} 0, ${R} ${-R}, ${R + 5} ${-R}`,
		`h${W + R}`,
	].join(' ');

	const d_2 = [
		`M-2 ${R + 4}`,
		`h${W}`,
		`c ${R} 0, ${R} ${R}, ${R + 5} ${R}`,
		`h${WIDTH / 2 - 2 * R}`,
		`c${R} 0, ${R} ${-R}, ${R + 5} ${-R}`,
		`h${W + R}`,
	].join(' ');
	return (
		<Svg onLayout={onLayout} style={[style, shadow]} viewBox="7 7.5 13 9" height={10}>
			<Path d={d} fill={'transparent'} stroke={color} strokeWidth={1} fillRule="evenodd" clipRule="evenodd" />
			<Path d={d_2} stroke={color} fill={'transparent'} strokeWidth={9} />
		</Svg>
	);
});
