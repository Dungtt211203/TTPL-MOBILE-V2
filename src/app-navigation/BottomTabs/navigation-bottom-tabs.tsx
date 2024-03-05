import {useOnEventCallback} from '@app-helper/hooks';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {find} from 'lodash';
import React from 'react';
import {Platform, SafeAreaView} from 'react-native';
import BottomTab from './BottomTab';
import styles from './NavigationBottom.styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import {SvgXml} from 'react-native-svg';
import {
  iconHomeSvg,
  iconNotifiSvg,
  iconUtilitiesSvg,
} from '@app-uikits/icon-svg';
import Feather from 'react-native-vector-icons/Feather';
import {Box} from 'native-base';

const Tab = createBottomTabNavigator();

enum MainTab {
  Home = 'Trang chủ',
  Notification = 'Thông báo',
  News = 'Cộng đồng',
  Utilities = 'Tiện ích',
  Account = 'Tài khoản',
}

const Tabs = [
  {
    name: MainTab.Home,
    screen: require('@app-views/HomeScreen/HomeScreen').default,
    icon: (color: string) => <SvgXml xml={iconHomeSvg(color)} />,
  },
  {
    name: MainTab.Notification,
    screen: require('@app-views/HomeScreen/HomeScreen').default,
    icon: (color: string) => <SvgXml xml={iconNotifiSvg(color)} />,
  },
  {
    name: MainTab.News,
    screen: require('@app-views/HomeScreen/HomeScreen').default,
    icon: (color: string) => <SvgXml xml={iconNotifiSvg()} />,
  },
  {
    name: MainTab.Utilities,
    screen: require('@app-views/HomeScreen/HomeScreen').default,
    icon: (color: string) => <SvgXml xml={iconUtilitiesSvg(color)} />,
  },
  {
    name: MainTab.Account,
    screen: require('@app-views/HomeScreen/HomeScreen').default,
    icon: (color: string) => <Feather name={'user'} size={24} color={color} />,
  },
];

const BottomTabs: React.FC = () => {
  const CustomTabar = useOnEventCallback((props: BottomTabBarProps) => {
    const {descriptors, navigation, state} = props;

    return (
      <Box
        style={{borderRadius: 50}}
        height={Platform.OS === 'ios' ? '85px' : '70px'}
        shadow={9}
        borderTopLeftRadius={'16px'}
        borderTopRightRadius={'16px'}>
        <Box style={styles.container}>
          <SafeAreaView style={styles.viewTab}>
            {state.routes.map((route: any, index: number) => {
              const {options} = descriptors[route.key];
              const screen_name = route.name as MainTab;
              const tab = find(Tabs, ['name', screen_name]);

              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };
              const onLongPress = () => {
                navigation.emit({
                  type: 'tabLongPress',
                  target: route.key,
                });
              };
              const color = isFocused
                ? EStyleSheet.value('$mainColor')
                : '#999999';

              return (
                <BottomTab
                  key={route.key}
                  icon={tab?.icon(color)}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  isActive={isFocused}
                  onLongPress={onLongPress}
                  onPress={onPress}
                  index={index}
                  name={route.name}
                />
              );
            })}
          </SafeAreaView>
        </Box>
      </Box>
    );
  });

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
      tabBar={CustomTabar}>
      {Tabs.map(screen => {
        return (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.screen}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabs;
