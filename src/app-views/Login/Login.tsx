import FormInputBase from "@app-components/FromInputBase";
import { useOnEventCallback } from "@app-helper/hooks";
import { navigate } from "@app-navigation/navigation-services";
import { StackNavigationProps } from "@app-navigation/types";
import { iconBackSvg, iconEyeOffSvg, iconEyeSvg, iconFBSvg, iconGGSvg } from "@app-uikits/icon-svg";
import iconBack from "@assets/svg/iconBackSvg";
import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

// Form Login
export interface LoginProps { }

const Login: React.FC<StackNavigationProps<'Login'>> = () => {
    const gotoForm = useOnEventCallback(() =>
        navigate('SelectAccount'));
    const goToForgetPassWord = useOnEventCallback(() =>
        navigate('ForgetPassword'));
    return (
        <SafeAreaView>
            <TouchableOpacity>
                <SvgXml xml={iconBackSvg()} style={{ marginLeft: 16, marginTop: 32 }} />
            </TouchableOpacity>
            <View>
                <Text style={styles.textLogin}>Đăng nhập</Text>
            </View>
            {/* Form Input Email vs SDT */}
            <View>
                <Text style={styles.textEmail}>Email/Số điện thoại</Text>
                <FormInputBase
                    type="text"
                    placeholder="Email"
                    style={{ width: 343, marginLeft: 32, marginTop: -20 }}
                />
            </View>
            {/* Form Mật Khẩu */}
            <View style={{}}>
                <Text style={styles.textPassWord}>Mật khẩu</Text>
                <FormInputBase
                    placeholder="Mật khẩu"
                    style={{ width: 343, marginLeft: 32, marginTop: -20 }}
                    type="password"


                />
            </View>
            {/* Text Quên mật khẩu */}
            <View>
                <TouchableOpacity onPress={goToForgetPassWord}><Text style={styles.textForgetPass}>Quên mật khẩu ?</Text></TouchableOpacity>
            </View>
            {/* Button */}
            <TouchableOpacity style={styles.buttonLogin}>
                <Text style={styles.textbuttonLogin}>Đăng nhập</Text>
            </TouchableOpacity>
            {/* Text bạn chưa có tài khoản */}
            <View style={styles.textForget}>
                <Text>Bạn chưa có tài khoản? <TouchableOpacity onPress={gotoForm}><Text style={{ color: '#4262AE' }}>Đăng ký</Text></TouchableOpacity></Text>
            </View>
            <View style={styles.textForget}>
                <Text>---------------------------------------------------------------------------------</Text>
            </View>
            {/* Đăng nhập bằng tài khoản khác */}
            <View style={styles.textForget}>
                <Text style={{ fontWeight: '600' }}>Hoặc đăng nhập bằng mạng xã hội</Text>
            </View>
            {/* Icon gg facebook */}
            <TouchableOpacity>
                <View style={styles.buttoniconfb}>
                    <SvgXml xml={iconFBSvg()} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.buttonicongg}>
                    <SvgXml xml={iconGGSvg()} style={{ marginLeft: 12, marginTop: 12 }} />
                </View>
            </TouchableOpacity>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    textLogin: {
        fontSize: 30,
        fontWeight: '700',
        color: '#1A1A1A',
        marginTop: 20,
        marginLeft: 25,
    },
    textEmail: {
        marginTop: 20,
        marginLeft: 25
    },
    textPassWord: {
        marginTop: 20,
        marginLeft: 25
    },
    textForgetPass: {
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 5,
        color: '#4262AE'
    },
    textForget: {
        marginTop: 10,
        alignItems: 'center'
    },
    buttonLogin: {
        width: '90%',
        height: 50,
        backgroundColor: '#4755D4',
        marginLeft: 25,
        marginTop: 20,
        borderRadius: 20
    },
    textbuttonLogin: {
        alignSelf: 'center',
        marginTop: 15,
        color: '#FFF',
        fontStyle: 'normal',
        fontWeight: '400'
    },
    buttoniconfb: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#FFF',
        marginTop: 10,
        marginRight: 50,
        marginLeft: 150
    },
    buttonicongg: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#FFF',
        marginTop: -50,
        marginRight: 50,
        marginLeft: 230
    },
    imageIconfbgg: {
        justifyContent: 'center', alignSelf: 'center', marginTop: 10
    },
})
export default Login;
