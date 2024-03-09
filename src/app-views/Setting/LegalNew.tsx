import { useOnEventCallback } from "@app-helper/hooks";
import { goBack, navigate } from "@app-navigation/navigation-services";
import { StackNavigationProps } from "@app-navigation/types";
import { iconBacksmSvg } from "@app-uikits/icon-svg";
import React, { useState } from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native"
import { SvgXml } from "react-native-svg";
import style_c from "@assets/styles/styles_c"
export interface ServerpackageProps { };
const Serverpackage: React.FC<StackNavigationProps<'Serverpackage'>> = () => {

    const goToBack = useOnEventCallback(() =>
        goBack()
    )
    const goToBasic = useOnEventCallback(() =>
        navigate('Basic'));
    const goToLZPRO = useOnEventCallback(() =>
        navigate('LZPRO'));
    const goToBuyingGuide = useOnEventCallback(() =>
        navigate('BuyingGuide'));
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', marginTop: 16, alignItems: 'center' }}>
                <TouchableOpacity onPress={goToBack}>
                    <SvgXml xml={iconBacksmSvg()} style={{ marginHorizontal: 16 }} />
                </TouchableOpacity>
                <Text style={{ ...style_c.font_text_20_600 }}>Các gói dịch vụ</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <TouchableOpacity>
                    <Text style={{ ...style_c.font_text_14_400, color: "#B5B9C7" }}>Gói Free</Text>
                    <View style={{ borderWidth: 1, width: 24, height: 4, backgroundColor: "#4755D4", marginLeft: 20 }}>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToBasic}>
                    <Text style={{ ...style_c.font_text_14_400, color: "#B5B9C7", marginLeft: 20 }}>Basic</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToLZPRO}>
                    <Text style={{ ...style_c.font_text_14_400, color: "#B5B9C7", marginLeft: 20 }}>LZ Pro</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 20, color: "#4755D4", lineHeight: 24 }}>Thành viên Free được nhận các quyền lợi sau:</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Xem toàn bộ thủ tục hành chính Online</Text>

            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Có thể tra cứu:</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Thủ tục hành chính</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Thông tin về thủ tục</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Yêu cầu điều kiện</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Biểu mẫu thủ tục hành chính thực hiện</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Tin tức pháp luật</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Thông tin các Luật sư để liên hệ</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Thông tin công ty luật uy tín</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Có thể xem thông tin nổi bật</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Văn bản, nghị định mới</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Được hỗ trợ khi tra cứu trực tuyến</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Quản lý Văn bản trong "Văn Bản Của Tôi"</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Được phép chỉnh sửa thủ tục</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Được bình luận/báo cáo bài viết
                </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ ...style_c.font_text_14_400, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Nhận Bản tin Văn bản mới qua Email/điện thoại</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 150, marginLeft: 20 }}>
                <TouchableOpacity style={{ width: 163, height: 56, borderRadius: 10, backgroundColor: "#4755D4", opacity: 0.5 }} disabled={true}>
                    <Text style={{ ...style_c.font_text_14_400, textAlign: "center", color: "#FCFCFE", marginTop: 15 }} >Đăng ký gói</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToBuyingGuide} style={{ width: 163, height: 56, borderRadius: 10, backgroundColor: "#EBEDF3", marginLeft: 50 }}>
                    <Text style={{ ...style_c.font_text_14_400, textAlign: "center", color: "#262C41", marginTop: 15 }}>Hướng dẫn mua</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default Serverpackage;