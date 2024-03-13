import { useOnEventCallback } from "@app-helper/hooks";
import { goBack, navigate } from "@app-navigation/navigation-services";
import { StackNavigationProps } from "@app-navigation/types";
import { iconBackSvg } from "@app-uikits/icon-svg";
import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from "react-native"
import { SvgXml } from "react-native-svg";
export interface ForgetPasswordProps { }
const ForgetPassword: React.FC<StackNavigationProps<'ForgetPassword'>> = () => {
    const gotoLogin = useOnEventCallback(() =>
        navigate('SelectAccount'));
    const goToResetPassword = useOnEventCallback(() =>
        navigate('ResetPassword'));
    const gotoBack = useOnEventCallback(() =>
        goBack()
    )
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={gotoBack}>
                <SvgXml xml={iconBackSvg()} style={{ marginLeft: 16, marginTop: 32 }} />
            </TouchableOpacity>
            <View style={{ marginTop: 32, marginLeft: 16 }}>
                <Text style={{ color: "#262C41", fontSize: 32, fontWeight: "700", fontStyle: 'normal' }}>Quên mật
                    khẩu</Text>
            </View>
            <View style={{ marginTop: 16 }}>
                <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 18, color: "#686E7E" }}>Điền số điện
                    thoại của bạn để xác nhận đặt lại mật khẩu.</Text>
            </View>
            <View style={{ marginLeft: 32, marginTop: 40 }}>
                <Text style={{ fontWeight: "500", fontSize: 12, color: "#686E7E" }}>Số điện thoại</Text>
                <TextInput style={{ width: 343, height: 48, borderWidth: 1, borderRadius: 12, marginTop: 5 }}
                    placeholder={"Nhập số điện thoại"} />
            </View>
            <View>
                <TouchableOpacity onPress={goToResetPassword} style={{
                    backgroundColor: "#4755D4",
                    width: 343,
                    height: 54,
                    marginTop: 30,
                    marginLeft: 32,
                    borderRadius: 30
                }}>
                    <Text
                        style={{ textAlign: "center", color: "#FFFFFF", fontWeight: "500", fontSize: 16, marginTop: 15 }}>Tiếp
                        tục</Text>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: "center" }}>
                <Text style={{ fontSize: 12, fontWeight: "400", color: "#262C41", textAlign: 'center', marginTop: 32 }}>Bạn
                    chưa có tài khoản? </Text>
                <TouchableOpacity onPress={gotoLogin}><Text style={{ fontSize: 12, fontWeight: "700", color: "#4755D4", marginTop: 30 }}>Đăng ký</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default ForgetPassword;
