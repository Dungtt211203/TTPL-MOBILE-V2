import * as _ from 'lodash';
import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import { Alert } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export function useOnPressCallback<T extends (...args: any[]) => any>(
	callback: T,
	options: { listen_change?: boolean; time?: number; event?: string } = {
		listen_change: true,
		time: 1000,
	},
): T {
	let listen_change = options.listen_change !== undefined ? options.listen_change : true;
	const ref = useRef<T>((() => {
		Alert.alert('Lỗi', 'Chức năng chưa sẵn sàng,\n vui lòng thử lại');
	}) as T);

	useEffect(() => {
		if (typeof callback === 'function') {
			ref.current = callback;
		}
	}, [listen_change && callback]);

	return useCallback<T>(
		((...args) => {
			// @ts-ignore
			return ref.current(...args);
		}) as T,
		[],
	);
}

/**
 * Handle function
 * @param callback
 */
export function useOnEventCallback<T extends (...args: any[]) => any>(callback: T): T {
	const ref = useRef<T>((() => {}) as T);

	if (typeof callback === 'function') {
		ref.current = callback;
	}

	return useCallback<T>(
		((...args) => {
			return ref.current(...args);
		}) as T,
		[],
	);
}

/**
 * Handle Child Event function
 * @param callback
 */
export function useOnEventWithDataCallback<P = any, T extends (item: P, ...args: any[]) => any = (item: P) => any>(
	callback: T,
): (item: P) => (...args: any[]) => any {
	const callbackFunction: T = useOnEventCallback<T>(callback);

	const ref = useRef({ map: new Map(), callbackFunction });

	if (callbackFunction !== ref.current.callbackFunction) {
		ref.current.map.clear();
		ref.current.callbackFunction = callbackFunction;
	}

	return (item: P) => {
		let functionHandle = ref.current.map.get(item);

		if (!functionHandle) {
			functionHandle = (...args) => callbackFunction(item, ...args);
			ref.current.map.set(item, functionHandle);
		}

		return functionHandle;
	};
}

/**
 * Use Multi State
 * @param init_state
 */
export function useStates<T>(init_state: T): [T, (state?: T) => void] {
	const state = useRef<T>(init_state);
	const [, forceUpdate] = useReducer<any>((x) => x + 1, 0);

	const setState = (new_state) => {
		state.current = new_state;

		// @ts-ignore
		forceUpdate();
	};

	return [state.current, setState];
}

export const useThemesChange = () => {
	const [, forceUpdate] = useReducer((x) => x + 1, 0);

	useEffect(() => {
		const subscribe = EStyleSheet.subscribe('build', () => {
			forceUpdate();
		});
		return () => subscribe;
	}, []);
};

/**
 * withPreventDoubleClick
 *
 * @param WrappedComponent
 * @param time
 */
export function withPreventDoubleClick<P extends any = any, S extends any = any>(WrappedComponent, time = 1000) {
	class PreventDoubleClick extends React.PureComponent<P, S> {
		constructor(props) {
			super(props);
		}

		static displayName = `withPreventDoubleClick(${WrappedComponent.displayName || WrappedComponent.name})`;

		public debouncedOnPress = () => {
			// @ts-ignore
			this.props.onPress && this.props.onPress();
		};

		public onPress = _.debounce(this.debouncedOnPress, time, {
			leading: true,
			trailing: false,
		});

		render() {
			// @ts-ignore
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { onPress, ...otherProps } = this.props;

			return <WrappedComponent {...otherProps} onPress={this.onPress} />;
		}
	}

	return PreventDoubleClick;
}
