import { Text } from 'native-base';
import React, { useEffect } from 'react';
import { TouchableWithoutFeedback, View, Platform } from 'react-native';
import styles from './NavigationBottom.styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles_c from '@assets/styles/styles_c';

interface TabProps {
  isActive?: boolean;
  accessibilityLabel?: string;
  icon?: any;
  onPress?: () => void;
  onLongPress?: () => void;
  index?: any;
  name?: string;
}

const BottomTab: React.FC<TabProps> = ({
  isActive,
  accessibilityLabel,
  icon,
  onPress,
  index,
  name,
}) => {
  return (
    <TouchableWithoutFeedback
      accessibilityRole="button"
      accessibilityState={isActive ? { selected: true } : {}}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}>
      <View
        style={{
          ...styles.btnBottom,
        }}>
        <View
          style={{
            height: 20,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {isActive && (
            <Text
              color={EStyleSheet.value('$mainColor')}
              style={{ fontSize: 20 }}>
              •
            </Text>
          )}
        </View>
        <View style={{ marginBottom: 9 }}>{icon}</View>
        <Text
          style={{ ...styles_c.font_text_12_400 }}
          color={isActive ? EStyleSheet.value('$mainColor') : '#5A5A5A'}>
          {name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BottomTab;
