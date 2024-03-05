import type { InterfaceButtonProps } from '../../components/primitives/Button/types';

const baseStyle = (props: InterfaceButtonProps & { theme: any }) => {
	const { primary } = props.theme.colors;

	return {
		borderRadius: 'lg', // '4px'
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		// flex: 1,
		_web: {
			_disabled: {
				cursor: 'not-allowed',
			},
			_loading: {
				cursor: 'not-allowed',
			},
			cursor: 'pointer',
			userSelect: 'none',
		},
		_focusVisible: {
			_web: {
				outlineWidth: '0',
				style: { boxShadow: `${primary[400]} 0px 0px 0px 2px` },
			},
		},
		_dark: {
			_focusVisible: {
				_web: {
					outlineWidth: '0',
					style: { boxShadow: `${primary[500]} 0px 0px 0px 2px` },
				},
			},
		},
		_stack: {
			space: '1.5',
			alignItems: 'center',
			width: '100%',
			// flex: 1,
			justifyContent: 'center',
		},
		_loading: {
			opacity: '40',
		},
		_disabled: {
			opacity: '40',
		},
		_spinner: {
			size: 'sm',
			focusable: false,
		},
	};
};

function variantGhost({ colorScheme }: InterfaceButtonProps) {
	return {
		_text: {
			color: `${colorScheme}.light.buttonMainPrimary`,
		},
		_icon: {
			color: `${colorScheme}.light.buttonMainPrimary`,
		},
		_spinner: {
			color: `${colorScheme}.light.buttonMainPrimary`,
		},
		_hover: {
			bg: `${colorScheme}.light.buttonMainPrimary:alpha.10`,
		},
		_pressed: {
			bg: `${colorScheme}.light.buttonMainPrimary:alpha.20`,
		},

		_dark: {
			_text: {
				color: `${colorScheme}.dark.buttonMainPrimary`,
			},
			_icon: {
				color: `${colorScheme}.dark.buttonMainPrimary`,
			},
			_spinner: {
				color: `${colorScheme}.dark.buttonMainPrimary`,
			},
			_hover: {
				bg: `${colorScheme}.dark.buttonMainPrimary:alpha.10`,
			},
			_pressed: {
				bg: `${colorScheme}.dark.buttonMainPrimary:alpha.20`,
			},
		},
	};
}

function variantOutline({ colorScheme }: InterfaceButtonProps) {
	return {
		borderWidth: '1px',
		borderColor: `${colorScheme}.light.buttonMainPrimary`,
		_text: {
			color: `${colorScheme}.light.buttonMainPrimary`,
		},
		_icon: {
			color: `${colorScheme}.light.buttonMainPrimary`,
		},
		_spinner: {
			color: `${colorScheme}.light.buttonMainPrimary`,
		},
		_hover: {
			bg: `${colorScheme}.light.buttonMainPrimary:alpha.10`,
		},
		_pressed: {
			bg: `${colorScheme}.light.buttonMainPrimary:alpha.20`,
		},

		_dark: {
			borderColor: `${colorScheme}.dark.buttonMainPrimary`,
			_text: {
				color: 'text.white',
			},
			_icon: {
				color: 'text.white',
			},
			_spinner: {
				color: 'text.white',
			},
			_hover: {
				bg: `${colorScheme}.dark.buttonMainPrimary:alpha.10`,
			},
			_pressed: {
				bg: `${colorScheme}.dark.buttonMainPrimary:alpha.20`,
			},
		},
	};
}

function variantSolid({ colorScheme }: InterfaceButtonProps) {
	return {
		_text: {
			color: 'text.white',
			fontWeight: 'semibold',
			fontSize: 'md',
		},
		_icon: {
			color: 'text.white',
		},
		_spinner: {
			color: 'text.white',
		},
		bg: `${colorScheme}.light.buttonMainPrimary`,
		_hover: {
			bg: `${colorScheme}.light.buttonMainPrimary`,
			opacity:0.9
		},
		_pressed: {
			bg: `${colorScheme}.light.buttonMainPrimary`,
			opacity:0.9
		},

		_dark: {
			bg: `${colorScheme}.dark.buttonMainPrimary`,
			// _hover: {
			// 	bg: `${colorScheme}.dark.buttonMainPrimary`,
			// },
			// _pressed: {
			// 	bg: `${colorScheme}.dark.buttonMainPrimary`,
			// },
		},
	};
}

function variantSubtle({ colorScheme }: InterfaceButtonProps) {
	return {
		bg: `${colorScheme}.light.buttonMainPrimary`,
		_text: {
			color: `${colorScheme}.light.buttonMainPrimary`,
		},
		_icon: {
			color: `${colorScheme}.light.buttonMainPrimary`,
		},
		_spinner: {
			color: `${colorScheme}.light.buttonMainPrimary`,
		},
		_hover: {
			bg: `${colorScheme}.light.buttonMainPrimary`,
		},
		_pressed: {
			bg: `${colorScheme}.light.buttonMainPrimary`,
		},

		_dark: {
			bg: `${colorScheme}.dark.buttonMainPrimary`,
			_hover: {
				bg: `${colorScheme}.dark.buttonMainPrimary`,
			},
			_pressed: {
				bg: `${colorScheme}.dark.buttonMainPrimary`,
			},
		},
	};
}

function variantLink({ colorScheme }: InterfaceButtonProps) {
	return {
		_icon: {
			color: `${colorScheme}.light.buttonMainPrimary`,
		},
		_spinner: {
			color: `${colorScheme}.light.buttonMainPrimary`,
		},

		_hover: {
			_text: {
				textDecorationLine: 'underline',
			},
		},
		_pressed: {
			_text: {
				color: `${colorScheme}.light.buttonMainPrimary`,
				textDecorationLine: 'underline',
			},
		},

		_text: {
			color: `${colorScheme}.light.buttonMainPrimary`,
		},
		_dark: {
			_text: {
				color: 'text.white',
			},
			_icon: {
				color: 'text.white',
			},
			_pressed: {
				_text: {
					color: `${colorScheme}.light.buttonMainPrimary`,
				},
			},
		},
	};
}
function variantUnstyled({ colorScheme }: InterfaceButtonProps) {
	return {
		_hover: {
			_text: {
				textDecorationLine: 'underline',
			},
			bg: `${colorScheme}.light.buttonMainPrimary`
		},
		_pressed: {
			_text: {
				color: `${colorScheme}.light.buttonMainPrimary`,
			},
			bg: `${colorScheme}.light.buttonMainPrimary`
		},

		_text: {
			color: `${colorScheme}.light.buttonMainPrimary`,
		},
		_dark: {
			_text: {
				color: 'text.white',
			},
			_icon: {
				color: 'text.white',
			},
			// bg: `${colorScheme}.light.buttonMainPrimary`,
			_hover: {
				_text: {
					textDecorationLine: 'underline',
				},
			},
			_pressed: {
				_text: {
					color: `${colorScheme}.light.buttonMainPrimary`,
				},
				bg: `${colorScheme}.light.buttonMainPrimary`
			},
		},
	};
}

const variants = {
	ghost: variantGhost as any,
	outline: variantOutline as any,
	solid: variantSolid as any,
	subtle: variantSubtle as any,
	link: variantLink as any,
	unstyled: variantUnstyled as any,
};

const sizes = {
	lg: {
		px: '3',
		py: '3',
		_text: {
			fontSize: 'md',
		},
		_icon: {
			size: 'md',
		},
	},
	md: {
		px: '3',
		py: '2.5',
		_text: {
			fontSize: 'sm',
		},
		_icon: {
			size: 'sm',
		},
	},
	sm: {
		px: '3',
		py: '2',
		_text: {
			fontSize: 'xs',
		},
		_icon: {
			size: 'sm',
		},
	},
	xs: {
		px: '3',
		py: '2',
		_text: {
			fontSize: '2xs',
		},
		_icon: {
			size: 'xs',
		},
	},
};

const defaultProps = {
	variant: 'solid',
	size: 'md',
	colorScheme: 'main',
};

export const ButtonGroup = {
	baseStyle: { direction: 'row' },
	defaultProps: { space: 2 },
};

export default {
	baseStyle,
	variants,
	sizes,
	defaultProps,
};
