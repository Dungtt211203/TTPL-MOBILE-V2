
import React from 'react';
import { io } from 'socket.io-client';

export const option_socket = async () => {
	return {
		path: '/socket-io',
	};
};


export const socket = () => {
	return {
		main_socket: async () => io('https://ngantuanphat.vugiasoftware.com/message', await option_socket()),
	};
};
export const SocketContext: any = React.createContext(null);
