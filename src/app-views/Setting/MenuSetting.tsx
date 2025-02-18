import { SafeAreaView, View, Text, TouchableOpacity, Modal, Alert } from "react-native"
import React, { useState } from "react";
import { StackNavigationProps } from "@app-navigation/types";
import { SvgXml } from "react-native-svg";
import { iconAccountSvg, iconBoxSvg, iconEvaluateSvg, iconExitSvg, iconLetterSvg, iconLettersmallSvg, iconLocationSvg, iconLogoSvg, iconNewSvg, iconPhoneSvg, iconPhonesmallSvg, iconQuestionSvg, iconShareSvg } from "@app-uikits/icon-svg";
import { useOnEventCallback } from "@app-helper/hooks";
import { goBack, navigate } from "@app-navigation/navigation-services";
import style_c from "@assets/styles/styles_c"
import { ScrollView } from "react-native-gesture-handler";
export interface MenuSettingProps { }
const MenuSetting: React.FC<StackNavigationProps<'MenuSetting'>> = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const goToContant = useOnEventCallback(() =>
        navigate('Contant'));
    const goToServerpackage = useOnEventCallback(() =>
        navigate('Serverpackage'));
    const goToAbout = useOnEventCallback(() =>
        navigate('About'));
    const goToNotification = useOnEventCallback(() =>
        navigate('Notification'));
    const goToBack = useOnEventCallback(() =>
        goBack()
    )
    return (
        <ScrollView>
            {/* <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}></Modal> */}
            <View style={{ width: "100%", height: 221, backgroundColor: "#4755D4" }}>
                <TouchableOpacity onPress={goToBack}>
                    <SvgXml xml={iconExitSvg()} style={{ alignSelf: "flex-end", marginRight: 16, marginTop: 16 }} />
                </TouchableOpacity>
                <Text style={{ ...style_c.font_text_20_600, color: "#FCFCFE", marginLeft: 30, marginTop: 50 }}>Trần Đức Thành</Text>
                <Text style={{ ...style_c.font_text_14_400, color: "#FCFCFE", marginLeft: 30 }}>thanhvn.hd@gmail.com</Text>
                <TouchableOpacity style={{ width: 132, height: 28, marginLeft: 30, backgroundColor: "#FCFCFE", marginTop: 30, borderRadius: 12 }}>
                    <Text style={{ fontWeight: "700", fontSize: 14, color: "#4755D4", textAlign: "center", marginTop: 5 }}>Tài khoản: FREE</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: "#FCFCFE", alignSelf: 'flex-end', marginTop: -50, marginRight: 30, borderRadius: 10 }}>
                <SvgXml xml={iconAccountSvg()} style={{ marginLeft: 30, marginTop: 25 }} />
            </TouchableOpacity>
            <SvgXml xml={iconQuestionSvg()} style={{ marginLeft: 40 }} />
            <View style={{ marginLeft: 80, marginTop: -30 }}>
                <TouchableOpacity onPress={goToNotification}>
                    <Text style={{ ...style_c.font_text_16_600, color: "#262C41" }}>Hỏi đáp Pháp luật</Text>
                </TouchableOpacity>
            </View>
            <SvgXml xml={iconNewSvg()} style={{ marginLeft: 40, marginTop: 20 }} />
            <View style={{ marginLeft: 80, marginTop: -30 }}>
                <TouchableOpacity><Text style={{ ...style_c.font_text_16_600, color: "#262C41" }}>Tin tức Pháp luật</Text></TouchableOpacity>
            </View>
            <SvgXml xml={iconBoxSvg()} style={{ marginLeft: 40, marginTop: 20 }} />
            <View style={{ marginLeft: 80, marginTop: -30 }}>
                <TouchableOpacity onPress={goToServerpackage}><Text style={{ ...style_c.font_text_16_600, color: "#262C41" }}>Các gói dịch vụ</Text></TouchableOpacity>
            </View>
            <SvgXml xml={iconLetterSvg()} style={{ marginLeft: 40, marginTop: 20 }} />
            <View style={{ marginLeft: 80, marginTop: -30 }}>
                <TouchableOpacity onPress={goToAbout}><Text style={{ ...style_c.font_text_16_600, color: "#262C41" }}>Giới thiệu</Text></TouchableOpacity>
            </View>
            <SvgXml xml={iconPhoneSvg()} style={{ marginLeft: 40, marginTop: 20 }} />
            <View style={{ marginLeft: 80, marginTop: -30 }}>
                <TouchableOpacity onPress={goToContant}><Text style={{ ...style_c.font_text_16_600, color: "#262C41" }}>Liên hệ</Text></TouchableOpacity>
            </View>
            <SvgXml xml={iconShareSvg()} style={{ marginLeft: 40, marginTop: 20 }} />
            <View style={{ marginLeft: 80, marginTop: -30 }}>
                <TouchableOpacity style={{
                    borderRadius: 20,
                }} onPress={() => setModalVisible(true)}><Text style={{ ...style_c.font_text_16_600, color: "#262C41" }}>Phản hồi</Text></TouchableOpacity>
            </View>
            <SvgXml xml={iconEvaluateSvg()} style={{ marginLeft: 40, marginTop: 20 }} />
            <View style={{ marginLeft: 80, marginTop: -30 }}>
                <TouchableOpacity><Text style={{ ...style_c.font_text_16_600, color: "#262C41" }}>Đánh giá</Text></TouchableOpacity>
            </View>
            <View style={{ marginLeft: 50, marginTop: 50, borderWidth: 0.5, marginRight: 50 }}>

            </View>
            <SvgXml xml={iconLogoSvg()} style={{ marginLeft: 40, marginTop: 20 }} />
            <View style={{ marginLeft: 80, marginTop: -25 }}>
                <Text style={{ ...style_c.font_text_14_400, color: "#B5B9C7" }}>Công ty TNHH Legalzone</Text>
            </View>
            <SvgXml xml={iconLocationSvg()} style={{ marginLeft: 40, marginTop: 20 }} />
            <View style={{ marginLeft: 80, marginTop: -25 }}>
                <Text style={{ ...style_c.font_text_14_400, color: "#B5B9C7" }}>Phòng 1603, Sảnh A3, Toà nhà Ecolife, 58 Tố Hữu, Trung Văn, Nam Từ Liêm, Hà Nội</Text>
            </View>
            <SvgXml xml={iconPhonesmallSvg()} style={{ marginLeft: 40, marginTop: 20 }} />
            <View style={{ marginLeft: 80, marginTop: -20 }}>
                <Text style={{ ...style_c.font_text_14_400, color: "#B5B9C7" }}>0888889366</Text>
            </View>
            <SvgXml xml={iconLettersmallSvg()} style={{ marginLeft: 40, marginTop: 20 }} />
            <View style={{ marginLeft: 80, marginTop: -20 }}>
                <Text style={{ ...style_c.font_text_14_400, color: "#B5B9C7" }}>support@legalzone.vn</Text>
            </View>
        </ScrollView>
    )
}
export default MenuSetting;