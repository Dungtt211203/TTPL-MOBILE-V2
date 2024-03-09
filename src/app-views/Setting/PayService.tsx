import { useOnEventCallback } from "@app-helper/hooks";
import { goBack, navigate } from "@app-navigation/navigation-services";
import { StackNavigationProps } from "@app-navigation/types";
import { iconBacksmSvg } from "@app-uikits/icon-svg";
import React, { useState } from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native"
import { SvgXml } from "react-native-svg";
import style_c from "@assets/styles/styles_c"
export interface PayServiceProps { };
const PayService: React.FC<StackNavigationProps<'PayService'>> = () => {

    const goToBack = useOnEventCallback(() =>
        goBack()
    )
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', marginTop: 16, alignItems: 'center' }}>
                <TouchableOpacity onPress={goToBack}>
                    <SvgXml xml={iconBacksmSvg()} style={{ marginHorizontal: 16 }} />
                </TouchableOpacity>
                <Text style={{ ...style_c.font_text_20_600 }}>Đăng ký gói dịch vụ</Text>
            </View>
            <View style={{}}>
                <TouchableOpacity style={{ width: 335, height: 56, borderRadius: 10, backgroundColor: "#4755D4", marginLeft: 40, marginTop: 700 }}>
                    <Text style={{ ...style_c.font_text_14_400, textAlign: "center", color: "#FCFCFE", marginTop: 15 }}>Xác nhận</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default PayService;