// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
	const textTheme = {
		fontSize: variables.DefaultFontSize,
		fontFamily: variables.fontDosisRegular,
		// color: variable.textColor,
		'.note': {
			color: variable.brandGrey,
			fontSize: variables.noteFontSize,
		},
	};

	return textTheme;
};
