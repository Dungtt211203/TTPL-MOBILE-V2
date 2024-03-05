import { Text } from 'native-base';
import React from 'react';

export const wrapStringChild = (children: any, textProps: any) => {
  return React.Children.map(children, (child) => {
    return typeof child === 'string' ||
      typeof child === 'number' ||
      (child?.type === React.Fragment &&
        (typeof child.props?.children === 'string' ||
          typeof child.props?.children === 'number')) ? (
      <Text {...textProps}>{child}</Text>
    ) : (
      child
    );
  });
};
