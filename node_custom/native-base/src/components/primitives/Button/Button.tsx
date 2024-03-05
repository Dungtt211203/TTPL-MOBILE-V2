import { useFocusRing } from '@react-native-aria/focus';
import React, { forwardRef, memo } from 'react';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { composeEventHandlers } from '../../../utils';
import { useFocus, useHover, useIsPressed } from '../../primitives/Pressable/Pressable';
import { default as Box } from '../Box';
import { Pressable } from '../Pressable';
import Spinner from '../Spinner';
import HStack from '../Stack/HStack';
import type { IButtonProps } from './types';

const Button = (
	{
		//@ts-ignore
		children,
		startIcon,
		rightIcon,
		leftIcon,
		endIcon,
		spinner,
		isDisabled,
		isLoading,
		isHovered: isHoveredProp,
		isPressed: isPressedProp,
		isFocused: isFocusedProp,
		isFocusVisible: isFocusVisibleProp,
		spinnerPlacement = 'start',
		...props
	}: IButtonProps,
	ref: any,
) => {
	const { hoverProps, isHovered } = useHover();
	const { pressableProps, isPressed } = useIsPressed();
	const { focusProps, isFocused } = useFocus();
	const { isFocusVisible, focusProps: focusRingProps }: any = useFocusRing();

	const {
		onPressIn,
		onPressOut,
		onHoverIn,
		onHoverOut,
		onFocus,
		onBlur,
		_text,
		_stack,
		_spinner,
		isLoadingText,
		_icon,
		...resolvedProps
	} = usePropsResolution('Button', props, {
		isDisabled,
		isHovered: isHoveredProp || isHovered,
		isFocused: isFocusedProp || isFocused,
		isPressed: isPressedProp || isPressed,
		isLoading,
		isFocusVisible: isFocusVisibleProp || isFocusVisible,
	});

	//TODO: refactor for responsive prop
	if (useHasResponsiveProps(props)) {
		return null;
	}

	// if (leftIcon) {
	// 	startIcon = leftIcon;
	// }
	// if (rightIcon) {
	// 	endIcon = rightIcon;
	// }
	if (endIcon && React.isValidElement(endIcon)) {
		endIcon = React.Children.map(endIcon, (child: JSX.Element, index: number) => {
			return React.cloneElement(child, {
				key: `button-end-icon-${index}`,
				..._icon,
				...child.props,
			});
		});
	}
	if (startIcon && React.isValidElement(startIcon)) {
		startIcon = React.Children.map(startIcon, (child: JSX.Element, index: number) => {
			return React.cloneElement(child, {
				key: `button-start-icon-${index}`,
				..._icon,
				...child.props,
			});
		});
	}
	if (leftIcon && React.isValidElement(leftIcon)) {
		leftIcon = React.Children.map(leftIcon, (child: JSX.Element, index: number) => {
			return React.cloneElement(child, {
				key: `button-end-icon-${index}`,
				..._icon,
				...child.props,
			});
		});
	}
	if (rightIcon && React.isValidElement(rightIcon)) {
		rightIcon = React.Children.map(rightIcon, (child: JSX.Element, index: number) => {
			return React.cloneElement(child, {
				key: `button-end-icon-${index}`,
				..._icon,
				...child.props,
			});
		});
	}

	const spinnerElement = spinner ? spinner : <Spinner color={_text?.color} {..._spinner} />;

	const boxChildren = (child: any) => {
		return child ? <Box _text={_text}>{child}</Box> : null;
	};

	return (
		<Pressable
			disabled={isDisabled || isLoading}
			ref={ref}
			onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
			onPressOut={composeEventHandlers(onPressOut, pressableProps.onPressOut)}
			// @ts-ignore - web only
			onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)}
			// @ts-ignore - web only
			onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)}
			// @ts-ignore - web only
			onFocus={composeEventHandlers(composeEventHandlers(onFocus, focusProps.onFocus), focusRingProps.onFocus)}
			// @ts-ignore - web only
			onBlur={composeEventHandlers(composeEventHandlers(onBlur, focusProps.onBlur), focusRingProps.onBlur)}
			{...resolvedProps}
			accessibilityRole={props.accessibilityRole ?? 'button'}
		>
			{leftIcon && (
				<Box position={'absolute'} left={'4'}>
					{leftIcon}
				</Box>
			)}
			<HStack {..._stack} left={leftIcon ? '8' : '0'} right={rightIcon ? '8' : '0'} test={true}>
				{startIcon && !isLoading ? startIcon : null}
				{isLoading && spinnerPlacement === 'start' ? spinnerElement : null}
				{isLoading
					? isLoadingText
						? boxChildren(isLoadingText)
						: boxChildren(children)
					: boxChildren(children)}
				{endIcon && !isLoading ? endIcon : null}
				{isLoading && spinnerPlacement === 'end' ? spinnerElement : null}
			</HStack>
			{rightIcon && (
				<Box position={'absolute'} right={'4'}>
					{rightIcon}
				</Box>
			)}
		</Pressable>
	);
};

export default memo(forwardRef(Button));
