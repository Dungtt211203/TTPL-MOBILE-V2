import { InterfaceTabBar } from 'native-base/components/composites/TabView/types';

const baseStyle = () => {};
const defaultProps = {};

function variantSolid({ colorScheme }: InterfaceTabBar) {
	return {
		_stack: {
			backgroundColor: `${colorScheme}.light.backgroundTabBar`,
			marginHorizontal: 15,
			padding: 1,
		},
		_animatedView: {
			backgroundColor: `${colorScheme}.light.buttonMainPrimary`,
			height: 'full',
			borderRadius: 'md',
			width: 'full',
		},
		_text: {
			color: `${colorScheme}.light.textColor`,
			fontWeight: '500',
		},
		_textSelected: {
			color: 'text.white',
			fontWeight: '500',
		},
		_dark: {
			_stack: {
				backgroundColor: `${colorScheme}.dark.backgroundTabBar`,
			},
			_animatedView: {
				backgroundColor: `${colorScheme}.dark.buttonMainPrimary`,
			},
			_text: {
				color: `${colorScheme}.dark.textColor`,
			},
		},
	};
}

function variantOutline({ colorScheme }: InterfaceTabBar) {
	return {
		_stack: {
			backgroundColor: 'transparent',
			paddingBottom: 5,
		},
		_animatedView: {
			position: 'absolute',
			height: 1,
			backgroundColor: `${colorScheme}.light.buttonMainPrimary`,
			bottom: 0,
			width: 'full',
			borderTopRadius: 'lg',
			borderTopLeftRadius: 'lg',
		},
		_text: {
			color: `${colorScheme}.light.textColor`,
			fontWeight: '600',
		},
		_textSelected: {
			color: `${colorScheme}.light.buttonMainPrimary`,
			fontWeight: '600',
		},
		_dark: {
			_animatedView: {
				backgroundColor: `${colorScheme}.dark.buttonMainPrimary`,
			},
			_text: {
				color: `${colorScheme}.dark.textColor`,
			},
			_textSelected: {
				color: `${colorScheme}.dark.buttonMainPrimary`,
			},
		},
	};
}

const variants = {
	solid: variantSolid,
	outline: variantOutline,
};

export const TabBar = {
	variants,
	defaultProps: {
		variant: 'solid',
		colorScheme: 'main',
	},
};

export default { baseStyle, variants, defaultProps };
