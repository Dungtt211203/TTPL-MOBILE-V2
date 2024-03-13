import { useOnEventCallback } from "@app-helper/hooks";
import { goBack } from "@app-navigation/navigation-services";
import { StackNavigationProps } from "@app-navigation/types";
import { iconBacksmSvg, iconChatSvg, iconChatTBSvg } from "@app-uikits/icon-svg";
import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native"
import { SvgXml } from "react-native-svg";
import style_c from "@assets/styles/styles_c"
import iconAnhlnd from "@assets/svg/iconAnhlnd";
import styles_c from "@assets/styles/styles_c";
import iconTronColorXanh from "@assets/svg/iconTronColorXanh";
import iconTronColorGray from "@assets/svg/iconTronColorGray";
import iconAnhPH from "@assets/svg/iconAnhPH";
import iconAnhTMP from "@assets/svg/iconAnhTMP";
import iconAnhTL from "@assets/svg/iconAnhTL";
export interface NotificationProps { };
const Notification: React.FC<StackNavigationProps<'Notification'>> = () => {
    const goToBack = useOnEventCallback(() =>
        goBack()
    )
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', marginTop: 16, alignItems: 'center' }}>
                <TouchableOpacity onPress={goToBack}>
                    <SvgXml xml={iconBacksmSvg()} style={{ marginHorizontal: 16 }} />
                </TouchableOpacity>
                <Text style={{ ...style_c.font_text_20_600 }}>Thông báo</Text>
            </View>
            <View style={{ paddingVertical: 16, flexDirection: 'row', paddingHorizontal: 16 }}>
                <View style={{ flex: 1, flexDirection: 'row', marginRight: 8 }}>
                    <SvgXml xml={iconAnhlnd()} />
                    <View style={{ flex: 1, marginLeft: 16 }}>
                        <Text style={{ ...styles_c.font_text_14_400, color: "#262C41" }}>
                            <Text style={{ fontWeight: "bold" }}>Phương Hoa</Text> đã nhắc đến bạn trong một bình luận</Text>
                        <Text style={{ ...styles_c.font_text_14_400, color: "#B5B9C7" }}>22 giờ trước</Text>
                    </View>

                </View>
                <View style={{ marginTop: 6 }}>
                    <SvgXml xml={iconTronColorXanh()} />
                </View>
            </View>
            <View style={{ paddingVertical: 16, flexDirection: 'row', paddingHorizontal: 16 }}>
                <View style={{ flex: 1, flexDirection: 'row', marginRight: 8 }}>
                    <View style={{ flex: 1, marginLeft: 16 }}>
                        <Text style={{ ...styles_c.font_text_14_400, color: "#262C41" }}>
                            Câu hỏi có trả phí? Luật sư sẵn sàng trả lời không?</Text>
                    </View>
                </View>
                <View style={{ marginTop: 6 }}>
                    <SvgXml xml={iconTronColorXanh()} />
                </View>

            </View>
            <View style={{ paddingVertical: 16, flexDirection: 'row', paddingHorizontal: 16 }}>
                <TouchableOpacity style={{ height: 40, width: 140, backgroundColor: "#4755D4", borderRadius: 20, marginLeft: 16 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <SvgXml xml={iconChatTBSvg()} style={{ marginTop: 10, marginLeft: 10 }} />
                        <Text style={{ marginTop: 10, marginLeft: 8, ...styles_c.font_text_16_400, color: '#FFFFFF' }}>Chat ngay</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ paddingVertical: 16, flexDirection: 'row', paddingHorizontal: 16 }}>
                <View style={{ flex: 1, flexDirection: 'row', marginRight: 8 }}>
                    <View style={{ flex: 1, marginLeft: 16 }}>
                        <Text style={{ ...styles_c.font_text_14_400, color: "#B5B9C7" }}>
                            Câu hỏi có trả phí? Luật sư sẵn sàng trả lời không?</Text>
                    </View>
                </View>
                <View style={{ marginTop: 6 }}>
                    <SvgXml xml={iconTronColorGray()} />
                </View>

            </View>
            <View style={{ paddingVertical: 16, flexDirection: 'row', paddingHorizontal: 32 }}>
                <Text style={{ ...styles_c.font_text_14_400, color: '#4755D4' }}>Đã có Luật sư đăng ký trả lời</Text>
            </View>
            <View style={{ paddingVertical: 16, flexDirection: 'row', paddingHorizontal: 16 }}>
                <View style={{ flex: 1, flexDirection: 'row', marginRight: 8 }}>
                    <SvgXml xml={iconAnhPH()} />
                    <View style={{ flex: 1, marginLeft: 16 }}>
                        <Text style={{ ...styles_c.font_text_14_400, color: "#262C41" }}>
                            <Text style={{ fontWeight: "bold" }}>Phương Hoa</Text> đã nhắc đến bạn trong một bình luận</Text>
                        <Text style={{ ...styles_c.font_text_14_400, color: "#B5B9C7" }}>22 giờ trước</Text>
                    </View>

                </View>
                <View style={{ marginTop: 6 }}>
                    <SvgXml xml={iconTronColorXanh()} />
                </View>
            </View>
            <View style={{ paddingVertical: 16, flexDirection: 'row', paddingHorizontal: 16 }}>
                <View style={{ flex: 1, flexDirection: 'row', marginRight: 8 }}>
                    <SvgXml xml={iconAnhTMP()} />
                    <View style={{ flex: 1, marginLeft: 16 }}>
                        <Text style={{ ...styles_c.font_text_14_400, color: "#262C41" }}>
                            <Text style={{ fontWeight: "bold" }}>Trần Minh Phương</Text> đã nhắc đến bạn trong một bình luận</Text>
                        <Text style={{ ...styles_c.font_text_14_400, color: "#B5B9C7" }}>22 giờ trước</Text>
                    </View>

                </View>
                <View style={{ marginTop: 6 }}>
                    <SvgXml xml={iconTronColorXanh()} />
                </View>
            </View>
            <View style={{ paddingVertical: 16, flexDirection: 'row', paddingHorizontal: 16 }}>
                <View style={{ flex: 1, flexDirection: 'row', marginRight: 8 }}>
                    <SvgXml xml={iconAnhTL()} />
                    <View style={{ flex: 1, marginLeft: 16 }}>
                        <Text style={{ ...styles_c.font_text_14_400, color: "#262C41" }}>
                            <Text style={{ fontWeight: "bold" }}>Thùy Linh</Text> đã nhắc đến bạn trong một bình luận</Text>
                        <Text style={{ ...styles_c.font_text_14_400, color: "#B5B9C7" }}>22 giờ trước</Text>
                    </View>

                </View>
                <View style={{ marginTop: 6 }}>
                    <SvgXml xml={iconTronColorXanh()} />
                </View>
            </View>


        </ScrollView>
    )
}
export default Notification;