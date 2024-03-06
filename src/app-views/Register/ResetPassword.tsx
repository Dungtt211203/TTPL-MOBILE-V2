import { useOnEventCallback } from "@app-helper/hooks";
import { goBack, navigate } from "@app-navigation/navigation-services";
import { StackNavigationProps } from "@app-navigation/types";
import { iconBackSvg } from "@app-uikits/icon-svg";
import React from "react";
import { Text, View, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { SvgXml } from "react-native-svg";
export interface ResetPasswordProps { }
const ResetPassword: React.FC<StackNavigationProps<'ResetPassword'>> = () => {
    const goToOTP = useOnEventCallback(() =>
        navigate('SendOTP'));
    const goToSelectAccount = useOnEventCallback(() =>
        navigate('SelectAccount'));
    const gotoBack = useOnEventCallback(() =>
        goBack()
    )
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={gotoBack}>
                <SvgXml xml={iconBackSvg()} style={{ marginLeft: 16, marginTop: 32 }} />
            </TouchableOpacity>
            <View style={{ marginTop: 32, marginLeft: 16 }}>
                <Text style={{ color: "#262C41", fontSize: 32, fontWeight: "700", fontStyle: 'normal' }}>Đặt lại mật
                    khẩu</Text>
            </View>
            <View style={{ marginLeft: 32, marginTop: 40 }}>
                <Text style={{ fontWeight: "500", fontSize: 12, color: "#686E7E" }}>Mật khẩu</Text>
                <TextInput style={{ width: 343, height: 48, borderWidth: 1, borderRadius: 12, marginTop: 5 }}
                    placeholder={"Nhập mật khẩu"} />
            </View>
            <View style={{ marginLeft: 32, marginTop: 40 }}>
                <Text style={{ fontWeight: "500", fontSize: 12, color: "#686E7E" }}>Nhập lại mật khẩu</Text>
                <TextInput style={{ width: 343, height: 48, borderWidth: 1, borderRadius: 12, marginTop: 5 }}
                    placeholder={"Nhập lại mật khẩu"} />
            </View>
            <View>
                <TouchableOpacity onPress={goToOTP} style={{
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
            <View>
                <Text style={{ fontSize: 12, fontWeight: "400", color: "#262C41", textAlign: 'center', marginTop: 32 }}>Bạn
                    chưa có tài khoản? <TouchableOpacity onPress={goToSelectAccount}><Text style={{ fontSize: 12, fontWeight: "700", color: "#4755D4" }}>Đăng
                        ký</Text></TouchableOpacity></Text>
            </View>
        </SafeAreaView>
    )
}
export default ResetPassword;
