import { StyleSheet } from 'react-native';

const baseStyle = {
	py: 2,
	borderRadius: 'sm',
	shadow: 6,
	bg: 'main.light.backgroundMenu',
	_dark: {
		bg: 'main.dark.backgroundMenu',
	},
	_presenceTransition: {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			translateY: 0,
			transition: { duration: 200 },
		},
		exit: { opacity: 0, transition: { duration: 150 } },
		style: StyleSheet.absoluteFill,
	},
	_overlay: {
		unmountOnExit: true,
	},
	_backdrop: {
		bg: 'transparent',
	},
};

export default {
	baseStyle,
};

export const MenuGroup = {
	baseStyle: {
		_title: {
			fontSize: 'xs',
			textTransform: 'uppercase',
			fontWeight: '600',
			color: 'main.light.textColor',
			_dark: {
				color: 'main.dark.textColor',
			},
		},
		p: 3,
	},
};
export const MenuItem = {
	baseStyle: {
		px: 3,
		py: 2,
		fontWeight: '600',
		_web: {
			outlineWidth: 0,
		},
		_stack: {
			alignItems: 'center',
			px: 3,
			space: 3,
		},
		_icon: {
			size: 4,
			opacity: 0,
			color: 'main.light.textColor',
			right: 0,
		},
		_text: {
			color: 'main.light.textColor',
			flex: 1,
		},
		_disabled: {
			_text: {
				color: 'text.400',
				flex: 1,
			},
		},
		// _hover: {
		// 	bg: 'muted.200',
		// },
		// _focus: {
		// 	bg: 'muted.300',
		// },
		// _pressed: {
		// 	bg: 'muted.400',
		// },
		_focusVisible: {
			_web: {
				outlineWidth: '0',
				style: { boxShadow: `none` },
				// bg: 'muted.300',
			},
		},
		_dark: {
			_text: {
				color: 'main.dark.textColor',
				flex: 1,
			},
			_disabled: {
				_text: {
					color: 'text.600',
					flex: 1,
				},
			},
			// _hover: {
			// 	bg: 'muted.700',
			// },
			// _focus: {
			// 	bg: 'muted.600',
			// },
			// _pressed: {
			// 	bg: 'muted.500',
			// },

			_icon: {
				color: 'main.dark.textColor',
			},
			_focusVisible: {
				_web: {
					outlineWidth: '0',
					style: { boxShadow: `none` },
					// bg: 'muted.600',
				},
			},
		},
		_checked: {
			_icon: {
				opacity: 1,
			},
		},
	},
	defaultProps: {},
};
