import React, { useCallback, useState } from 'react';
import { StackNavigationProps } from '@app-navigation/types';
import { Box, Text, Input } from 'native-base';
import { Dimensions, FlatList, StyleSheet, TextInput, View } from 'react-native';
import styles_c from '@assets/styles/styles_c';
import {
    GestureHandlerRootView,
    TouchableOpacity,
} from 'react-native-gesture-handler';
import BaseModal from './BaseModal';
import { SvgXml } from 'react-native-svg';
import { iconCopySvg, iconLineSvg, iconLinesmSvg } from '@app-uikits/icon-svg';
import { useOnEventCallback } from '@app-helper/hooks';
import { navigate } from '@app-navigation/navigation-services';

export interface AboutProps { }

const About: React.FC<
    StackNavigationProps<'About'>
> = () => {
    return (
        <GestureHandlerRootView>
            <BaseModal isVisible={true}>
                <SvgXml xml={iconLinesmSvg()} style={{ alignSelf: "center", marginTop: 16 }} />
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Text style={{ ...styles_c.font_text_22_600 }}>Giới Thiệu</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Text style={{ ...styles_c.font_text_14_400 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</Text>
                </View>
                <View style={{ borderWidth: 1, height: 48, width: '100%', borderRadius: 20, borderColor: "#EBEDF3" }}>
                    <SvgXml xml={iconCopySvg()} style={{ alignSelf: "flex-end", marginTop: 15, marginRight: 15 }} />
                    <Text style={{ ...styles_c.font_text_18_600, color: "#4755D4", textAlign: "center", marginTop: -25 }}>0984171182</Text>
                </View>
            </BaseModal>
        </GestureHandlerRootView>
    );
};
const styles = StyleSheet.create({
    columnWrapper: {
        flex: 1,
        justifyContent: 'space-between',
    },

    item: {
        width: '33%',
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginTop: 6,
    },
});
export default About;