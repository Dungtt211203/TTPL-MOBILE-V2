const baseStyle = (props: Record<string, any>) => {
	const { colorScheme: c } = props;
	return {
		bg: `${c}.light.brandSecondary`,
		mask: `${c}.light.brandSecondary`,
		_dark: {
			bg: `${c}.dark.brandSecondary`,
			mask: `${c}.dark.brandSecondary`,
		},
	};
};
const defaultProps = {
	colorScheme: 'main',
};
export default {
	baseStyle,
	defaultProps,
};
