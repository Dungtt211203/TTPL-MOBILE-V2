import React, { useCallback, useEffect, useMemo } from 'react';
import { TabView as RNTabView, SceneMap } from './RNTabView';
import TabBar from './TabBar';
import { ITabViewProps } from './types';
import { useColorMode } from 'native-base/core';

const TabView: React.FC<ITabViewProps> = ({
	children,
	variant,
	styleTab,
	renderTabBar: _renderTabBar,
	itemStyle,
	onIndexChange,
	currentPage = 0,
	...props
}) => {
	const [index, setIndex] = React.useState(0);

	useEffect(() => {
		setIndex((prev) => {
			if (prev === currentPage) return prev;

			return currentPage;
		});
	}, [currentPage]);


	let scene = useMemo(() => {
		return React.Children.toArray(children).reduce(
			(
				scene: {
					sceneComponent: Record<string, React.ComponentType>;
					routes: { key: string; title: string }[];
				},
				child: any,
				index: number,
			) => {
				const _key = `scene_${index + 1}`;
				const components = Object.assign(scene.sceneComponent, {
					[_key]: () => React.cloneElement(child),
				});
				scene.routes.push({
					key: _key,
					title: child.props.header,
				});
				scene = { sceneComponent: components, routes: scene.routes };
				return scene;
			},
			{ sceneComponent: {}, routes: [] },
		);
	}, [children]);

	const onChangeIndex = (index: number) => {
		onIndexChange && onIndexChange(index);
		setIndex(index);
	};

	const renderTabBar = useCallback((props: any) => {
		return <TabBar {...props} _stack={props._stack} variant={variant} style={styleTab} itemStyle={itemStyle} />;
	}, []);

	return (
		<RNTabView
			{...props}
			navigationState={{ index, routes: scene.routes }}
			renderScene={SceneMap(scene.sceneComponent)}
			onIndexChange={onChangeIndex}
			renderTabBar={_renderTabBar || renderTabBar}
		/>
	);
};

export default TabView;
export type { ITabViewProps };