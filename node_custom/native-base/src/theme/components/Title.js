// @flow
import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
	const titleTheme = {
		fontSize: variables.titleFontSize,
		fontFamily: variable.fontA4SpeedBold,
		// color: variable.titleColor,
	};

	return titleTheme;
};
