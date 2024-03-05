import { View, Text } from 'react-native';
import React from 'react';
import BottomTabs from './navigation-bottom-tabs';

const BottomContainer = (navigation: any) => {
    return (
        <View style={{ flex: 1 }}>
            <BottomTabs />
        </View>
    );
};

export default BottomContainer;