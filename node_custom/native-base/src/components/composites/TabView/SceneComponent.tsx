import React from 'react';
import { InterfaceScenceComponent } from './types';
import Box from '../../primitives/Box';

const SceneComponent: React.FC<InterfaceScenceComponent> = ({ children, ...props }) => {
	return (
		<Box {...props} flex={1}>
			{children}
		</Box>
	);
};

export default SceneComponent;
