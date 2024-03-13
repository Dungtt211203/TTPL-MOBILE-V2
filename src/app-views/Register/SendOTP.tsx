import { useOnEventCallback } from "@app-helper/hooks";
import { goBack, navigate } from "@app-navigation/navigation-services";
import { StackNavigationProps } from "@app-navigation/types";
import { iconBackSvg } from "@app-uikits/icon-svg";
import React, { useRef, useState } from "react";
import { Text, View, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import { SvgXml } from "react-native-svg";
import styles_c from "@assets/styles/styles_c";

export interface SendOTPProps { }

const SendOTP: React.FC<StackNavigationProps<'SendOTP'>> = () => {
    const goToBack = useOnEventCallback(() =>
        goBack()
    );

    const goToSelectAccount = useOnEventCallback(() =>
        navigate('SelectAccount')
    );
    const inputRefs = [
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
        useRef<TextInput>(null),
    ];
    const [otp, setOTP] = useState(""); // Trạng thái lưu trữ giá trị OTP
    const handleOTPEdit = (value: string, index: number) => {
        // Xử lý sự kiện khi người dùng chỉnh sửa giá trị OTP
        const newOTP = otp.split(""); // Chuyển chuỗi OTP thành mảng các ký tự
        newOTP[index] = value; // Cập nhật ký tự tại vị trí index
        setOTP(newOTP.join("")); // Gán giá trị OTP mới bằng cách nối các ký tự lại thành chuỗi
        // Tự động chuyển trọng tâm nhập liệu vào ô input kế tiếp
        if (value && index < 5 && inputRefs[index + 1]?.current) {
            inputRefs[index + 1].current?.focus();
        }

    };
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={goToBack}>
                <SvgXml xml={iconBackSvg()} style={{ marginLeft: 16, marginTop: 32 }} />
            </TouchableOpacity>
            <View style={{ marginTop: 64, marginLeft: 16 }}>
                <Text style={{ color: "#262C41", fontSize: 32, fontWeight: "700", fontStyle: 'normal' }}>
                    Xác nhận OTP
                </Text>
            </View>
            <View style={{ marginLeft: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: "400", color: "#262C41" }}>
                    Một đoạn code dài 6 ký tự đã được gửi tới số (+84) 0123 456 789
                </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 56 }}>
                {inputRefs.map((inputRef, index) => (
                    <View key={index}>
                        <TextInput
                            ref={inputRef}
                            style={{
                                width: 44, height: 50, borderWidth: 0, marginLeft: 10, textAlign: "center", ...styles_c.font_text_22_600, borderBottomWidth: 2, // Độ dày của gạch dưới
                                borderBottomColor: 'black'
                            }}
                            keyboardType={"numeric"}
                            maxLength={1}
                            value={otp.charAt(index)}
                            onChangeText={(value) => handleOTPEdit(value, index)}
                        />
                    </View>
                ))}
            </View>
            <View style={{ alignItems: 'center', marginTop: 400, flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ ...styles_c.font_text_14_400, color: "#B5B9C7" }}>
                    Không nhận được mã?{" "}
                </Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 12, fontWeight: "700", color: "#4755D4" }}>
                        Gửi lại mã
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#4755D4",
                        width: 343,
                        height: 54,
                        borderRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 30,
                        marginTop: 20
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            color: "#FFFFFF",
                            fontWeight: "500",
                            fontSize: 16,
                        }}
                    >
                        Tiếp tục
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default SendOTP;