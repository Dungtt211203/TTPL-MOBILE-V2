import {RnViewStyleProp, variables} from 'native-base';
import {makeStyledComponent} from 'native-base/utils/styled';
import React, {forwardRef, memo} from 'react';
import {Platform, StatusBar, View} from 'react-native';
import type {IHeaderProps} from './types';
import {usePropsResolution, useTheme} from 'native-base/hooks';
import {getColor} from 'native-base/theme';
import Box from '../Box';

const StyledHeader = makeStyledComponent(View);

const Header = (
  {
    children,
    iosBarStyle,
    translucent,
    transparent,
    backgroundColor,
    ...props
  }: IHeaderProps,
  ref: any,
) => {
  const {...resolvedProps} = usePropsResolution('Header', props, {});

  return (
    <View>
      <StatusBar
        barStyle={iosBarStyle ? iosBarStyle : variables.iosStatusbar}
        translucent={transparent ? true : translucent}
      />
      {Platform.OS == 'ios' ? (
        <StyledHeader
          style={{
            paddingTop: variables.paddingTop,
            backgroundColor: backgroundColor,
          }}
        />
      ) : (
        <StyledHeader
          style={{paddingTop: 24, backgroundColor: backgroundColor}}
        />
      )}
      <Box ref={ref} {...props} backgroundColor={backgroundColor}>
        {children}
      </Box>
    </View>
  );
};

export default memo(forwardRef(Header));
export type {IHeaderProps};
