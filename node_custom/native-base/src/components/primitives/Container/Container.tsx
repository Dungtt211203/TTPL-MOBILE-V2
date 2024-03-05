import * as React from 'react';
import Box, { IBoxProps } from '../Box';
import { View } from 'react-native';

interface IContainerProsp extends IBoxProps {}

const Container: React.FC<IContainerProsp> = ({ children, ...props }) => {
	return (
		<Box {...props} backgroundColor={'#FFFFFF'} flex={1}>
			{children}
		</Box>
	);
};

export default Container;
