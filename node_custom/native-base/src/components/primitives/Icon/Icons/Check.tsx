import { Path, Svg, SvgXml } from 'react-native-svg';
import { createIcon } from '../createIcon';
import { getColor } from 'native-base/theme';
import { useStyledSystemPropsResolver, useTheme } from 'native-base/hooks';
import { convertToDp } from 'native-base/theme/tools';

export const CheckIcon = (sytle: any) => {
	const [style, restProps] = useStyledSystemPropsResolver(sytle);
	return (
		<SvgXml
			xml={`<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.6665 4.6L3.76174 7L8.99984 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `}
			style={style}
			{...restProps}
		/>
	);
};

export const CheckCircleIcon = createIcon({
	viewBox: '0 0 24 24',
	d: 'M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM7.17719 11.2464L9.91869 13.9114L16.8228 7.2L18 8.34432L9.91869 16.2L6 12.3907L7.17719 11.2464Z',
});
