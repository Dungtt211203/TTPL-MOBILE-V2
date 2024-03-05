const baseStyle = (props: Record<string, any>) => {
	const { colorScheme: c, theme } = props;
	const { colors } = theme;
	return {
		borderWidth: 2,
		borderRadius: 'full',
		p: 1,

		bg: `${c}.light.backgroundBody`,
		borderColor: 'main.light.iconDrawer',

		_checked: {
			borderColor: `${c}.light.buttonMainPrimary`,
			_icon: {
				color: `${c}.600`,
			},
			_hover: {
				borderColor: `${c}.light.buttonMainPrimary`,
				_icon: { color: `${c}.light.buttonMainPrimary` },
				_disabled: {
					borderColor: `${c}.light.buttonMainPrimary`,
					_icon: {
						color: `${c}.light.buttonMainPrimary`,
					},
				},
			},
			_pressed: {
				borderColor: `${c}.light.buttonMainPrimary`,
				_icon: { color: `${c}.light.buttonMainPrimary` },
			},
		},

		_hover: {
			borderColor: `${c}.light.buttonMainPrimary`,
			_disabled: {
				borderColor: `${c}.light.buttonMainPrimary`,
			},
			_checked: { borderColor: `${c}.light.buttonMainPrimary` },
		},

		_pressed: {
			// borderColor: 'muted.600',
		},

		_invalid: {
			borderColor: 'main.light.brandDanger',
		},

		_dark: {
			bg: `${c}.dark.backgroundBody`,
			borderColor: '#586B9C1A',

			_checked: {
				borderColor: `${c}.dark.buttonMainPrimary`,
				_icon: {
					color: `${c}.dark.buttonMainPrimary`,
				},
				_hover: {
					borderColor: `${c}.dark.buttonMainPrimary`,
					_icon: { color: `${c}.dark.buttonMainPrimary` },
					_disabled: {
						borderColor: `${c}.dark.buttonMainPrimary`,
						_icon: {
							color: `${c}.dark.buttonMainPrimary`,
						},
					},
				},
				_pressed: {
					borderColor: `${c}.dark.buttonMainPrimary`,
					_icon: { color: `${c}.dark.buttonMainPrimary` },
				},
			},

			_hover: {
				borderColor: `${c}.dark.buttonMainPrimary`,
				_disabled: {
					borderColor: 'muted.500',
				},
				_checked: { borderColor: `${c}.dark.buttonMainPrimary` },
			},

			_pressed: {
				borderColor: `${c}.dark.buttonMainPrimary`,
			},

			_invalid: {
				borderColor: 'error.500',
			},
		},

		_stack: {
			direction: 'row',
			alignItems: 'center',
			space: 2,
			_web: {
				cursor: props.isDisabled ? 'not-allowed' : 'pointer',
			},
		},

		_disabled: {
			opacity: '0.6',
			_icon: {
				bg: 'transparent',
			},
			_stack: {
				opacity: '0.6',
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
	};
};

const sizes = {
	lg: {
		_icon: { size: 4 },
		_text: { fontSize: 'lg' },
	},
	md: {
		_icon: { size: 3 },
		_text: { fontSize: 'md' },
	},
	sm: {
		_icon: { size: 2 },
		_text: { fontSize: 'sm' },
	},
};

const defaultProps = {
	defaultIsChecked: false,
	size: 'md',
	colorScheme: 'main',
};

export default {
	baseStyle,
	sizes,
	defaultProps,
};
