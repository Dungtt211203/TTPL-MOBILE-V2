import { useOnEventCallback } from "@app-helper/hooks";
import { goBack } from "@app-navigation/navigation-services";
import { StackNavigationProps } from "@app-navigation/types";
import { iconBacksmSvg } from "@app-uikits/icon-svg";
import iconBack from "@assets/svg/iconBack";
import React from "react";
import { Text, View, TouchableOpacity, SafeAreaView, Image } from "react-native"
import { SvgXml } from "react-native-svg";
import style_c from "@assets/styles/styles_c"
export interface ContantProps { }
const Contant: React.FC<StackNavigationProps<'Contant'>> = () => {
    const goToBack = useOnEventCallback(() =>
        goBack()
    )
    return (
        <SafeAreaView>
            <View style={{ marginLeft: 16, marginTop: 50, flexDirection: 'row' }}>
                <TouchableOpacity onPress={goToBack} >
                    <SvgXml xml={iconBacksmSvg()} />
                </TouchableOpacity>
                <Text style={{ ...style_c.font_text_20_600, color: "#262C41", marginLeft: 16 }}>Liên hệ</Text>
            </View>
            <Text style={{ ...style_c.font_text_20_600, color: "#262C41", marginLeft: 32, marginTop: 50 }}>Thông tin liên hệ</Text>
            <View style={{ marginLeft: 32, marginTop: 16 }}>
                <Text style={{ fontWeight: "700", fontSize: 14, color: "#262C41" }}>Giờ làm việc</Text>
                <View style={{ marginTop: 16 }}>
                    <Text style={{ ...style_c.font_text_14_400, color: "#686E7E" }}>-8:00 đến 17:30</Text>
                    <Text style={{ ...style_c.font_text_14_400, color: "#686E7E" }}>-Từ thứ 2 đến thứ 6 hàng tuần</Text>
                    <Text style={{ ...style_c.font_text_14_400, color: "#686E7E" }}>-Hotline tư vấn:0984 171 182</Text>
                </View>
            </View>
            <View style={{ marginLeft: 32, marginTop: 16 }}>
                <Text style={{ ...style_c.font_text_16_600, color: "#262C41" }}>Địa chỉ trụ sở chính</Text>
                <View style={{ marginTop: 16 }}>
                    <Text style={{ ...style_c.font_text_14_400, color: "#686E7E" }}>-Số 23, ngõ 55, đường Thanh Lân, quận Hoàng Mai, Hà Nội</Text>
                </View>
            </View>
            <View style={{ marginLeft: 32, marginTop: 16 }}>
                <Text style={{ ...style_c.font_text_16_600, color: "#262C41" }}>Email</Text>
                <View style={{ marginTop: 16 }}>
                    <Text style={{ ...style_c.font_text_14_400, color: "#686E7E" }}>-support@legalzone.vn</Text>
                </View>
            </View>
            <View style={{ marginLeft: 32, marginTop: 16 }}>
                <Text style={{ ...style_c.font_text_16_600, color: "#262C41" }}>Điện thoại</Text>
                <View style={{ marginTop: 16 }}>
                    <Text style={{ ...style_c.font_text_14_400, color: "#686E7E" }}>-0888 889 366</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Contant;