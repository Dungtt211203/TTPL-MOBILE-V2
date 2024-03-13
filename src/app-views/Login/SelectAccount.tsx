import { useOnEventCallback } from "@app-helper/hooks";
import { goBack, navigate } from "@app-navigation/navigation-services";
import { StackNavigationProps } from "@app-navigation/types";
import { iconBackSvg, iconBuidingSvg, iconIndividualSvg, iconLawverSvg, iconLineSvg, iconStateoffcialsSvg } from "@app-uikits/icon-svg";
import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
export interface SelectAccountProps { }
const SelectAccount: React.FC<StackNavigationProps<'SelectAccount'>> = () => {
    const gotoBack = useOnEventCallback(() =>
        goBack()
    )
    const gotoLogin = useOnEventCallback(() =>
        navigate('Login'));
    const goToSelectBussiness = useOnEventCallback(() =>
        navigate('SelectBusiness'));
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={gotoBack}>
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
                <SvgXml xml={iconLineSvg()} style={{ backgroundColor: "#B5B9C7", marginLeft: 120, marginTop: -10 }} />
                <View style={{
                    width: 16,
                    height: 16,
                    borderRadius: 32 / 2,
                    backgroundColor: "#F3F5F6",
                    marginLeft: 270,
                    marginTop: -10
                }}></View>
                <Text style={{ marginTop: 30, marginLeft: 16 }}>1.Chọn loại tài khoản</Text>
            </View>
            <View style={{ marginLeft: 16, marginTop: 30 }}>
                <SvgXml xml={iconLawverSvg()} />
            </View>
            <View
                style={{ marginLeft: 230, marginTop: -140 }}>
                <SvgXml xml={iconBuidingSvg()} />
            </View>
            <View style={{ marginTop: 30, marginLeft: 16 }}>
                <SvgXml xml={iconIndividualSvg()} />
            </View>
            <View style={{ marginLeft: 230, marginTop: -140 }}>
                <SvgXml xml={iconStateoffcialsSvg()} />
            </View>
            <View>
                <TouchableOpacity onPress={goToSelectBussiness} style={{
                    backgroundColor: "#4755D4",
                    width: 335,
                    height: 54,
                    marginTop: 30,
                    marginLeft: 35,
                    borderRadius: 30
                }}>
                    <Text
                        style={{ textAlign: "center", color: "#FFFFFF", fontWeight: "500", fontSize: 16, marginTop: 15 }}>Tiếp
                        tục</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 16 }}>
                <Text style={{ textAlign: 'center', fontWeight: "400", fontSize: 16, color: "#686E7E" }}>Với việc tiếp
                    tục, bạn đã đồng ý với <Text style={{ fontWeight: "400", fontSize: 16, color: "#4755D4" }}>Chính sách
                        bảo mật</Text> của chúng tôi</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 12, fontWeight: "400", color: "#262C41", textAlign: 'center', marginTop: 16 }}>Bạn đã có tài khoản?{""} </Text>
                <TouchableOpacity onPress={gotoLogin}><Text style={{ fontSize: 12, fontWeight: "700", color: "#4755D4", marginTop: 15 }}>Đăng nhập</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default SelectAccount;
