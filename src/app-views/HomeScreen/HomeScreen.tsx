import {StackNavigationProps} from '@app-navigation/types';
import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Box, Container, Text, Content} from 'native-base';

export interface HomeScreenProps {}

const HomeScreen: React.FC<StackNavigationProps<'HomeScreen'>> = ({}) => {
  return (
    <Container>
      <Content style={{flex: 1, backgroundColor: 'red'}}></Content>
    </Container>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,

    borderRadius: 4,
    backgroundColor: '#FFF',
    paddingHorizontal: 8,
  },
});
