import * as React from 'react';
import Box, {IBoxProps} from '../Box';
import {LayoutChangeEvent, SafeAreaView} from 'react-native';
import {usePropsResolution} from 'native-base/hooks';

interface IFooterProps extends IBoxProps {
  onLayoutFooter?: (event: LayoutChangeEvent) => void;
}

const Footer: React.FC<IFooterProps> = props => {
  const {children, ...resolvedProps}: any = usePropsResolution(
    'Footer',
    {...props},
    {},
    {resolveResponsively: ['space', 'direction']},
  );
  return (
    <Box {...resolvedProps}>
      <SafeAreaView>{children}</SafeAreaView>
    </Box>
  );
};

export default React.memo(Footer);
