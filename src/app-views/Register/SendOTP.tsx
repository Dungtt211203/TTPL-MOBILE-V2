import { useOnEventCallback } from "@app-helper/hooks";
import { goBack, navigate } from "@app-navigation/navigation-services";
import { StackNavigationProps } from "@app-navigation/types";
import { iconBackSvg } from "@app-uikits/icon-svg";
import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import { SvgXml } from "react-native-svg";
export interface SendOTPProps { };
const SendOTP: React.FC<StackNavigationProps<'SendOTP'>> = () => {
    const goToBack = useOnEventCallback(() =>
        goBack()
    )
    const goToSelectAccount = useOnEventCallback(() =>
        navigate('SelectAccount'));
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={goToBack}>
                <SvgXml xml={iconBackSvg()} style={{ marginLeft: 16, marginTop: 32 }} />
            </TouchableOpacity>
            <View style={{ marginTop: 64, marginLeft: 16 }}>
                <Text style={{ color: "#262C41", fontSize: 32, fontWeight: "700", fontStyle: 'normal' }}>Xác nhận
                    OTP</Text>
            </View>
            <View style={{ marginLeft: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: "400", color: "#262C41" }}>Một đoạn code dài 6 ký tự đã được gửi
                    tới số (+84) 0123 456 789</Text>
            </View>
            <View style={{ marginLeft: 32, marginTop: 32 }}>
                <TextInput style={{
                    width: 44,
                    height: 50,
                    borderWidth: 1,
                    borderTopColor: "#FFFFFF",
                    borderLeftColor: "#FFFFFF",
                    borderRightColor: "#FFFFFF"
                }} keyboardType={"numeric"} />
            </View>
            <View>
                <TextInput style={{
                    width: 44,
                    height: 50,
                    borderWidth: 1,
                    borderTopColor: "#FFFFFF",
                    borderLeftColor: "#FFFFFF",
                    borderRightColor: "#FFFFFF",
                    marginLeft: 90,
                    marginTop: -50
                }} keyboardType={"numeric"} />
            </View>
            <View>
                <TextInput style={{
                    width: 44,
                    height: 50,
                    borderWidth: 1,
                    borderTopColor: "#FFFFFF",
                    borderLeftColor: "#FFFFFF",
                    borderRightColor: "#FFFFFF",
                    marginLeft: 150,
                    marginTop: -50
                }} keyboardType={"numeric"} />
            </View>
            <View>
                <TextInput style={{
                    width: 44,
                    height: 50,
                    borderWidth: 1,
                    borderTopColor: "#FFFFFF",
                    borderLeftColor: "#FFFFFF",
                    borderRightColor: "#FFFFFF",
                    marginLeft: 210,
                    marginTop: -50
                }} keyboardType={"numeric"} />
            </View>
            <View>
                <TextInput style={{
                    width: 44,
                    height: 50,
                    borderWidth: 1,
                    borderTopColor: "#FFFFFF",
                    borderLeftColor: "#FFFFFF",
                    borderRightColor: "#FFFFFF",
                    marginLeft: 270,
                    marginTop: -50
                }} keyboardType={"numeric"} />
            </View>
            <View>
                <TextInput style={{
                    width: 44,
                    height: 50,
                    borderWidth: 1,
                    borderTopColor: "#FFFFFF",
                    borderLeftColor: "#FFFFFF",
                    borderRightColor: "#FFFFFF",
                    marginLeft: 330,
                    marginTop: -50
                }} keyboardType={"numeric"} />
            </View>
            <View>
                <Text style={{ fontSize: 12, fontWeight: "400", color: "#262C41", textAlign: 'center', marginTop: 400 }}>Bạn
                    chưa có tài khoản? <TouchableOpacity onPress={goToSelectAccount}><Text style={{ fontSize: 12, fontWeight: "700", color: "#4755D4" }}>Đăng
                        ký</Text></TouchableOpacity></Text>
            </View>
            <View>
                <TouchableOpacity style={{
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
        </SafeAreaView>
    )
}
export default SendOTP;
