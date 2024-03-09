import { useOnEventCallback } from "@app-helper/hooks";
import { goBack, navigate } from "@app-navigation/navigation-services";
import { StackNavigationProps } from "@app-navigation/types";
import { iconBackSvg, iconLawverLargeSvg } from "@app-uikits/icon-svg";
import iconBuidingLarge from "@assets/svg/iconBuidingLarge";
import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
export interface SelectBusinessProps { }
const SelectBusiness: React.FC<StackNavigationProps<'SelectBusiness'>> = () => {
    const goToFormLogin = useOnEventCallback(() =>
        navigate('FormLogin'));
    const goToBack = useOnEventCallback(() =>
        goBack()
    )
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={goToBack}>
                <SvgXml xml={iconBackSvg()} style={{ marginLeft: 16, marginTop: 32 }} />
            </TouchableOpacity>
            <View style={{ marginTop: 32, marginLeft: 16 }}>
                <Text style={{ color: "#262C41", fontSize: 32, fontWeight: "700", fontStyle: 'normal' }}>Đăng Ký</Text>
            </View>
            <View style={{ marginTop: 30 }}>
                <View style={{
                    width: 16,
                    height: 16,
                    borderRadius: 32 / 2,
                    backgroundColor: "#4755D4",
                    marginLeft: 110
                }}></View>
                <View
                    style={{ width: 156, height: 2, backgroundColor: "#F3F5F6", marginLeft: 120, marginTop: -10 }}></View>
                <View style={{
                    width: 16,
                    height: 16,
                    borderRadius: 32 / 2,
                    backgroundColor: "#F3F5F6",
                    marginLeft: 270,
                    marginTop: -10
                }}></View>
                <Text style={{
                    marginTop: 30,
                    marginLeft: 16,
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 14,
                    color: "#262C41"
                }}>1.Chọn loại tài khoản</Text>
                <Text style={{
                    marginTop: 15,
                    marginLeft: 16,
                    textAlign: "center",
                    fontWeight: "400",
                    fontSize: 12,
                    color: "#262C41"
                }}>Bạn có phải Công ty Luật không?</Text>
            </View>
            <View style={{ marginLeft: 16, marginTop: 30 }}>
                <SvgXml xml={iconLawverLargeSvg()} />
            </View>
            <View
                style={{ marginLeft: 230, marginTop: -215 }}>
                <SvgXml xml={iconBuidingLarge()} />
            </View>
            <View style={{ marginTop: 20 }}>
                <TouchableOpacity onPress={goToBack} style={{ width: 159, height: 54, backgroundColor: "#F4F5F8", borderRadius: 40, marginLeft: 16 }}>
                    <Text
                        style={{ fontWeight: "500", fontSize: 16, color: "#262C41", textAlign: "center", marginTop: 15 }}>Quay
                        lại</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToFormLogin} style={{ width: 159, height: 54, backgroundColor: "#4755D4", borderRadius: 40, marginLeft: 230, marginTop: -55 }}>
                    <Text style={{ fontWeight: "500", fontSize: 16, color: "#FFFFFF", textAlign: "center", marginTop: 15 }}>Tiếp tục</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 16 }}>
                <Text style={{ textAlign: 'center', fontWeight: "400", fontSize: 16, color: "#686E7E" }}>Với việc tiếp
                    tục, bạn đã đồng ý với <Text style={{ fontWeight: "400", fontSize: 16, color: "#4755D4" }}>Chính sách
                        bảo mật</Text> của chúng tôi</Text>
            </View>
            <View>
                <Text style={{ fontSize: 12, fontWeight: "400", color: "#262C41", textAlign: 'center', marginTop: 16 }}>Bạn đã có tài khoản? <Text style={{ fontSize: 12, fontWeight: "700", color: "#4755D4" }}>Đăng
                    nhập</Text></Text>
            </View>
        </SafeAreaView>
    )
}
export default SelectBusiness;
