const baseStyle = (props: Record<string, any>) => {
	const { colorScheme: c, theme } = props;
	const { colors } = theme;
	return {
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderWidth: 2,
		borderRadius: 'sm',
		opacity: 1,
		p: 0.5,

		bg: 'main.light.backgroundBody',
		borderColor: 'main.light.iconDrawer',
		_text: {
			color: 'main.light.textColor',
			ml: 2,
		},
		_icon: {
			color: `main.light.textColor`,
			width: '16px',
			height: '16px',
			alignItem: 'center',
			justifyContent: 'center',
		},
		_checked: {
			bg: 'main.light.buttonMainPrimary',
			borderColor: 'main.light.buttonMainPrimary',
			_hover: {
				bg: 'main.light.buttonMainHover',
				borderColor: 'main.light.buttonMainHover',
				_disabled: {
					g: 'main.light.buttonMainHover',
					borderColor: 'main.light.buttonMainHover',
				},
			},
			_pressed: {
				bg: 'main.light.buttonMainPrimary',
				borderColor: 'main.light.buttonMainPrimary',
			},
		},
		_hover: {
			borderColor: 'main.light.buttonMainHover',
			_disabled: {
				borderColor: 'muted.400',
			},
		},
		_pressed: {
			borderColor: 'muted.600',
		},
		_invalid: {
			borderColor: 'main.light.brandDanger',
		},

		_dark: {
			bg: 'main.dark.backgroundBody',
			borderColor: 'main.dark.iconDrawer',
			_text: {
				color: 'main.dark.textColor',
			},
			_icon: {
				color: `main.dark.textColor`,
			},
			_checked: {
				bg: 'main.dark.buttonMainPrimary',
				borderColor: 'main.dark.buttonMainPrimary',
				_hover: {
					bg: 'main.dark.buttonMainPrimary',
					borderColor: 'main.dark.buttonMainPrimary',
					_disabled: {
						bg: 'main.dark.backgroundBody',
						borderColor: 'main.dark.iconDrawer',
					},
				},
				_pressed: {
					bg: 'main.dark.buttonMainPrimary',
					borderColor: 'main.dark.buttonMainPrimary',
				},
			},
			_hover: {
				borderColor: 'main.dark.buttonMainPrimary',
				_disabled: {
					borderColor: 'muted.500',
				},
			},
			_pressed: {
				borderColor: 'main.dark.buttonMainPrimary',
			},
			_invalid: {
				borderColor: 'main.dark.brandDanger',
			},
		},

		_stack: {
			direction: 'row',
			alignItems: 'flex-start',
			space: 2,
			_web: {
				cursor: props.isDisabled ? 'not-allowed' : 'pointer',
			},
		},

		_focusVisible: {
			_web: {
				style: {
					outlineWidth: '2px',
					outlineColor: colors[c][400],
					outlineStyle: 'solid',
				},
			},
		},

		_disabled: {
			_web: {
				cursor: 'not-allowed',
			},
			opacity: 0.4,
		},
	};
};

const sizes = {
	lg: { _icon: { size: 5 }, _text: { fontSize: 'xl' } },
	md: { _icon: { size: 4 }, _text: { fontSize: 'lg' } },
	sm: { _icon: { size: 3 }, _text: { fontSize: 'md' } },
};

const defaultProps = {
	defaultIsChecked: false,
	size: 'sm',
	colorScheme: 'primary',
};

export default {
	baseStyle,
	sizes,
	defaultProps,
};
