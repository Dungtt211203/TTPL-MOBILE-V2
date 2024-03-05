import { Box } from 'native-base';
import { usePropsResolution, useTheme } from 'native-base/hooks';
import { getColor } from 'native-base/theme';
import React, { forwardRef, memo } from 'react';
import { ScrollView, View } from 'react-native';
import CardBottom from './CardBottom';
import CardTop from './CardTop';
import type { IContentProps } from './types';

export const RADIUS_LINE = 10;

const Content = ({ ...props }: IContentProps, ref: any) => {
	const theme = useTheme();

	const {
		children,
		direction,
		padding,
		style,
		cardTop = true,
		scrollView = true,
		contentContainerStyle,
		useSpacer,
		disableKBDismissScroll,
		keyboardShouldPersistTaps,
		linearColor,
		loop,
		progress,
		duration,
		...resolvedProps
	}: any = usePropsResolution('Content', { ...props }, {}, { resolveResponsively: ['space', 'direction'] });

	const maskColor = getColor(resolvedProps.mask, theme.colors, theme);

	return (
		<View style={{ flex: 1 }}>
			{/* {cardTop && (
				<Box top={0} position={'absolute'} zIndex={1} width={'full'}>
					<CardTop
						color={maskColor}
						linearColor={linearColor}
						loop={loop}
						progress={progress}
						duration={duration}
					/>
				</Box>
			)} */}
			<Box {...resolvedProps} paddingTop={0} flex={1}>
				{!scrollView && (
					<View
						style={[
							// { paddingVertical: padder ? variables.contentPadding : undefined },
							// { width: '100%', flex: 1 },
							{ flex: 1 },
							style,
							cardTop && { paddingTop: 20 },
						]}
						{...props}
					>
						{children}
					</View>
				)}
				{scrollView && (
					<ScrollView
						automaticallyAdjustContentInsets={false}
						showsHorizontalScrollIndicator={false}
						showsVerticalScrollIndicator={false}
						nestedScrollEnabled={true}
						keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
						ref={ref}
						{...props}
						style={style}
						contentContainerStyle={[
							cardTop && { },
							contentContainerStyle,
							
						]}
						
					>
						{children}
					</ScrollView>
				)}
			</Box>
		</View>
	);
};

export { CardBottom, CardTop };
export default memo(forwardRef(Content));
export type { IContentProps };
