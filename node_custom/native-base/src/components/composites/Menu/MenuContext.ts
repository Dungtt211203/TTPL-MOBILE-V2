import React from 'react';
export const MenuContext = React.createContext({
	closeOnSelect: true,
	onClose: () => {},
	layout: {
		width: 0,
		height: 0,
	},
});
