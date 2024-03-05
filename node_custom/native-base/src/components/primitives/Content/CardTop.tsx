import { variables } from 'native-base';
import { useLayout } from 'native-base/hooks';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { StyleProp, View, ViewStyle, useWindowDimensions } from 'react-native';
import Animated, {
	Easing,
	useAnimatedProps,
	useSharedValue,
	withRepeat,
	withSequence,
	withTiming,
} from 'react-native-reanimated';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

const R = 8;
const AnimatedPath = Animated.createAnimatedComponent(Path);
let timer;

export default memo(
	(props?: {
		color?: string;
		style?: StyleProp<ViewStyle>;
		progress?: number;
		duration?: number;
		loop?: boolean;
		linearColor?: string[];
	}) => {
		const {
			color = variables.brandSecondary,
			progress: _progress = 0,
			duration = 4000,
			loop = false,
			linearColor = ['#00FF29', '#F1CE51', '#FF0000'],
		} = props;
		const { layout, onLayout } = useLayout();
		const [length, setLength] = useState(0);
		const ref = useRef(null);

		const progress = useSharedValue(0);
		const progress2 = useSharedValue(0);

		useEffect(() => {
			return () => {
				clearTimeout(timer);
			};
		}, []);

		useEffect(() => {
			if (loop) {
				handleLoop();
			} else {
				progress.value = withTiming(_progress, { duration: duration, easing: Easing.linear });
			}
		}, [loop, _progress]);

		const handleLoop = useCallback(() => {
			progress.value = withRepeat(
				withSequence(
					withTiming(_progress, { duration: duration, easing: Easing.linear }),
					withTiming(0, { duration: 0, easing: Easing.linear }),
				),
				0,
				false,
			);
			timer = setTimeout(() => {
				progress2.value = withRepeat(
					withSequence(
						withTiming(1, { duration: 0, easing: Easing.linear }),
						withTiming(0, { duration: duration, easing: Easing.linear }),
					),
					0,
					false,
				);
				clearTimeout(timer);
			}, duration);
		}, []);

		const WIDTH = layout.width || 428;
		const W_2 = WIDTH / 4 - R;
		const shadow = {
			shadowColor: '#101F491A',
			shadowOffset: {
				width: 0,
				height: 3,
			},
			shadowOpacity: 0.29,
			shadowRadius: 4.65,
			elevation: 7,
		};

		const d = [
			`M0 ${R}`,
			`h${W_2}`,
			`c ${R} 0, ${R} ${R}, ${R + 5} ${R}`,
			`h${WIDTH / 2 - 2 * R}`,
			`c${R} 0, ${R} ${-R}, ${R + 5} ${-R}`,
			`h${W_2 + R}`,
		].join(' ');

		const strokeAnimation = useAnimatedProps(() => ({
			strokeDashoffset: length - length * progress.value,
		}));

		const strokeAnimation2 = useAnimatedProps(() => ({
			strokeDashoffset: length - length * progress2.value,
		}));

		return (
			<View
				onLayout={onLayout}
				style={[props.style, { position: 'absolute', width: '100%', zIndex: -999, top: -8 }]}
			>
				<Svg style={shadow} height={20}>
					<Path d={d} fill={color} stroke={color} fillRule="evenodd" clipRule="evenodd" />
				</Svg>
				{_progress > 0 && (
					<View style={{ top: -20 }}>
						<Svg height={20}>
							<Defs>
								<LinearGradient id="path" x1="0" y1="0" x2="1" y2="1">
									{linearColor.map((color, index) => {
										return (
											<Stop
												key={index}
												offset={(index / linearColor.length).toFixed(3)}
												stopColor={color}
												stopOpacity={1}
											/>
										);
									})}
								</LinearGradient>
							</Defs>
							<AnimatedPath
								animatedProps={strokeAnimation}
								onLayout={() => setLength(ref.current.getTotalLength())}
								ref={ref}
								d={d}
								stroke={'url(#path)'}
								fill={'transparent'}
								strokeWidth={1}
								strokeDasharray={length}
							/>
						</Svg>
						{loop && (
							<Svg height={20} style={{ top: -20, right: 4, transform: [{ rotateY: '180deg' }] }}>
								<Defs>
									<LinearGradient id="path" x1="0" y1="0" x2="1" y2="1">
										{linearColor.reverse().map((color, index) => {
											return (
												<Stop
													key={index}
													offset={(index / linearColor.length).toFixed(3)}
													stopColor={color}
													stopOpacity={1}
												/>
											);
										})}
									</LinearGradient>
								</Defs>
								<AnimatedPath
									animatedProps={strokeAnimation2}
									d={d}
									stroke={'url(#path)'}
									fill={'transparent'}
									strokeWidth={1}
									strokeDasharray={length}
								/>
							</Svg>
						)}
					</View>
				)}
			</View>
		);
	},
);
