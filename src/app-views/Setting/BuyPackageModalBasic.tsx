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
import { iconLineSvg, iconLinesmSvg } from '@app-uikits/icon-svg';
import { useOnEventCallback } from '@app-helper/hooks';
import { navigate } from '@app-navigation/navigation-services';

export interface BuyPackageModalBasicProps { }

const BuyPackageModal: React.FC<
    StackNavigationProps<'BuyPackageModalBasic'>
> = () => {
    const goToBuyingGuide = useOnEventCallback(() =>
        navigate('BuyingGuide'));
    const goToPayService = useOnEventCallback(() =>
        navigate('PayService'));
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
                    <Text style={{ ...styles_c.font_text_22_600 }}>Đăng ký gói Basic</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderWidth: 1,
                        height: 64,
                        width: 343,
                        marginLeft: 16,
                        borderRadius: 20,
                        borderColor: "#B5B9C7"

                    }}>
                    <Text style={{ ...styles_c.font_text_14_400, color: "#B5B9C7" }}>Basic 1: 80.000đ/tháng (01 người sử dụng tại 1 thời điểm)</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 16,
                        borderWidth: 1,
                        height: 64,
                        width: 343,
                        marginLeft: 16,
                        borderRadius: 20,
                        borderColor: "#B5B9C7"
                    }}>
                    <Text style={{ ...styles_c.font_text_14_400, color: "#4755D4" }}>Basic 5: 185.000đ/tháng (tối đa 05 người sử dụng cùng lúc).</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 16,
                        borderWidth: 1,
                        height: 64,
                        width: 343,
                        marginLeft: 16,
                        borderRadius: 20,
                        borderColor: "#B5B9C7"
                    }}>
                    <Text style={{ ...styles_c.font_text_14_400, color: "#B5B9C7" }}>Basic 15: 499.000đ/tháng (tối đa 15 người sử dụng cùng lúc)</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 20 }}>
                    <TouchableOpacity onPress={goToPayService} style={{ width: 163, height: 56, backgroundColor: "#4755D4", marginTop: 16, borderRadius: 20 }}>
                        <Text style={{ ...styles_c.font_text_16_600, color: "#FCFCFE", alignSelf: "center", marginTop: 10 }}>Đăng ký gói</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToBuyingGuide} style={{ width: 163, height: 56, backgroundColor: "#EBEDF3", marginTop: 16, borderRadius: 20, marginLeft: 16 }}>
                        <Text style={{ ...styles_c.font_text_16_600, color: "#262C41", alignSelf: "center", marginTop: 10 }}>Hướng dẫn mua</Text>
                    </TouchableOpacity>
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
export default BuyPackageModal;