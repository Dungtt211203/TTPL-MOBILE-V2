import { useOnEventCallback } from "@app-helper/hooks";
import { goBack, navigate } from "@app-navigation/navigation-services";
import { StackNavigationProps } from "@app-navigation/types";
import { iconBacksmSvg } from "@app-uikits/icon-svg";
import React from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native"
import { SvgXml } from "react-native-svg";
import style_c from "@assets/styles/styles_c"
export interface LZPROProps { };
const LZPRO: React.FC<StackNavigationProps<'LZPRO'>> = () => {
    const goToBack = useOnEventCallback(() =>
        goBack()
    )
    const goToBasic = useOnEventCallback(() =>
        navigate('Basic'));
    const goToServerpackage = useOnEventCallback(() =>
        navigate('Serverpackage'));
    const goToModal = useOnEventCallback(() =>
        navigate('BuyPackageModalLZPRO'));
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', marginTop: 16, alignItems: "center" }}>
                <TouchableOpacity onPress={goToBack}>
                    <SvgXml xml={iconBacksmSvg()} style={{ marginLeft: 16 }} />
                </TouchableOpacity>
                <Text style={{ ...style_c.font_text_20_600, color: "#262C41", marginLeft: 10 }}>Các gói dịch vụ</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <TouchableOpacity onPress={goToServerpackage}>
                    <Text style={{ ...style_c.font_text_14_400, color: "#B5B9C7" }}>Gói Free</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToBasic}>
                    <Text style={{ ...style_c.font_text_14_400, color: "#B5B9C7", marginLeft: 20 }}>Basic</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ ...style_c.font_text_14_400, color: "#B5B9C7", marginLeft: 20 }}>LZ Pro</Text>
                    <View style={{ borderWidth: 1, width: 24, height: 4, backgroundColor: "#4755D4", marginLeft: 20 }}>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ ...style_c.font_text_16_400, marginLeft: 20, color: "#4755D4", lineHeight: 24 }}>Thành viên LZ Pro được nhận các quyền lợi của thành viên Basic và thêm:</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_16_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Được sử dụng toàn bộ những tiện ích mà app có</Text>

            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_16_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Quản lý được tài chính công ty:</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ ...style_c.font_text_16_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Quản lý doanh thu</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ ...style_c.font_text_16_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Biết được toàn bộ công việc đang có và tình trạng cụ thể</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ ...style_c.font_text_16_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Giao việc cho nhân viên thông qua app</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ ...style_c.font_text_16_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Quản lý chi phí</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_16_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Quản lý hóa đơn công ty</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ ...style_c.font_text_16_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- App tích hợp xuất hóa đơn điện tử và gửi cho khách hàng</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ ...style_c.font_text_16_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Quản lý được toàn bộ hóa đơn hiện có và hợp đồng kèm theo</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_16_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Quản lý được hệ thống khách hàng của công ty</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_16_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Được yêu cầu Luật sư tư vấn pháp luật</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_16_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Được hướng dẫn thủ tục khi có yêu cầu</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_16_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Được giới thiệu cho đơn vị dịch vụ tư vấn uy tín</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 150, marginLeft: 20 }}>
                <TouchableOpacity onPress={goToModal} style={{ width: 335, height: 56, borderRadius: 10, backgroundColor: "#4755D4", marginLeft: 20 }}>
                    <Text style={{ ...style_c.font_text_16_600, textAlign: "center", color: "#FCFCFE", marginTop: 10 }}>Đăng ký gói</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}
export default LZPRO;