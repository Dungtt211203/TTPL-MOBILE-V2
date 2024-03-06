
import FormInputBase from "@app-components/FromInputBase";
import { useOnEventCallback } from "@app-helper/hooks";
import { goBack, navigate } from "@app-navigation/navigation-services";
import { StackNavigationProps } from "@app-navigation/types";
import { iconBackSvg } from "@app-uikits/icon-svg";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SvgXml } from "react-native-svg";
export interface FormLoginProps { }
const FormLogin: React.FC<StackNavigationProps<'FormLogin'>> = () => {
    const gotoBack = useOnEventCallback(() =>
        goBack()
    )
    const gotoLogin = useOnEventCallback(() =>
        navigate('Login'));
    return (
        <ScrollView>
            <TouchableOpacity>
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
                    marginLeft: 130
                }}></View>
                <View
                    style={{ width: 156, height: 2, backgroundColor: "#4755D4", marginLeft: 140, marginTop: -10 }} />
                <View style={{
                    width: 16,
                    height: 16,
                    borderRadius: 32 / 2,
                    backgroundColor: "#4755D4",
                    marginLeft: 280,
                    marginTop: -10
                }}></View>
                <Text style={{
                    marginTop: 30,
                    marginLeft: 16,
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 14,
                    color: "#262C41"
                }}>2.Đăng ký</Text>
            </View>
            <View>
                <Text style={{ fontWeight: "500", fontSize: 12, color: "#686E7E", marginLeft: 16 }}>Ảnh đại diện</Text>
                <TouchableOpacity style={{
                    width: 100.36,
                    height: 100.36,
                    borderWidth: 1,
                    borderColor: "#686E7E",
                    marginTop: 10,
                    marginLeft: 16
                }}></TouchableOpacity>
            </View>
            <View style={{ marginLeft: 16, marginTop: 20 }}>
                <Text style={{ fontWeight: "500", fontSize: 12, color: "#686E7E" }}>Họ tên</Text>
                <FormInputBase style={{ width: 343, height: 48, borderRadius: 12, marginTop: -30 }}
                    placeholder={"Nhập họ tên"} />
            </View>
            <View style={{ marginLeft: 16 }}>
                <Text style={{ fontWeight: "500", fontSize: 12, color: "#686E7E", marginTop: 30 }}>Email</Text>
                <FormInputBase style={{ width: 343, height: 48, borderRadius: 12, marginTop: -30 }}
                    placeholder={"Nhập email"} />
            </View>
            <View style={{ marginLeft: 16 }}>
                <Text style={{ fontWeight: "500", fontSize: 12, color: "#686E7E", marginTop: 30 }}>Số điện thoại</Text>
                <FormInputBase style={{ width: 343, height: 48, borderRadius: 12, marginTop: -30 }}
                    placeholder={"Nhập số điện thoại"} />
            </View>
            <View style={{ marginLeft: 16 }}>
                <Text style={{ fontWeight: "500", fontSize: 12, color: "#686E7E", marginTop: 30 }}>Mật khẩu</Text>
                <FormInputBase style={{ width: 343, height: 48, borderRadius: 12, marginTop: -30 }}
                    placeholder={"Nhập mật khẩu"} />
            </View>
            <View style={{ marginLeft: 16 }}>
                <Text style={{ fontWeight: "500", fontSize: 12, color: "#686E7E", marginTop: 30 }}>Nhập lại mật khẩu</Text>
                <FormInputBase style={{ width: 343, height: 48, borderRadius: 12, marginTop: -30 }}
                    placeholder={"Nhập lại mật khẩu"} />
            </View>
            <View style={{ marginTop: 50 }}>
                <TouchableOpacity style={{ width: 159, height: 54, backgroundColor: "#F4F5F8", borderRadius: 40, marginLeft: 16 }} onPress={gotoBack}>
                    <Text
                        style={{ fontWeight: "500", fontSize: 16, color: "#262C41", textAlign: "center", marginTop: 15 }}>Quay
                        lại</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 159, height: 54, backgroundColor: "#4755D4", borderRadius: 40, marginLeft: 230, marginTop: -55 }} onPress={gotoLogin}>
                    <Text style={{ fontWeight: "500", fontSize: 16, color: "#FFFFFF", textAlign: "center", marginTop: 15 }}>Tiếp tục</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 16 }}>
                <Text style={{ textAlign: 'center', fontWeight: "400", fontSize: 16, color: "#686E7E" }}>Với việc tiếp
                    tục, bạn đã đồng ý với <Text style={{ fontWeight: "400", fontSize: 16, color: "#4755D4" }}>Chính sách
                        bảo mật</Text> của chúng tôi</Text>
            </View>
            <View>
                <Text style={{ fontSize: 12, fontWeight: "400", color: "#262C41", textAlign: 'center', marginTop: 16 }}>Bạn đã có tài khoản? <TouchableOpacity onPress={gotoLogin}><Text style={{ fontSize: 12, fontWeight: "700", color: "#4755D4" }}>Đăng
                    nhập</Text>
                </TouchableOpacity></Text>
            </View>
        </ScrollView>
    )
}
export default FormLogin;
