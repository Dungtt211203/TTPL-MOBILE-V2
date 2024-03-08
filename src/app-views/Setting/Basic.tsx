import { StackNavigationProps } from "@app-navigation/types";
import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native"
export interface BasicProps { };
const Basic: React.FC<StackNavigationProps<'Basic'>> = () => {

    return (

        <ScrollView>
            <View style={{ flexDirection: 'row', marginTop: 16, }}>
                <Text style={{ fontWeight: '700', fontSize: 20, color: "#262C41", marginLeft: 10 }}>Các gói dịch vụ</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <TouchableOpacity>
                    <Text style={{ fontWeight: "500", fontSize: 14, color: "#B5B9C7" }}>Gói Free</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontWeight: "500", fontSize: 14, color: "#B5B9C7", marginLeft: 20 }}>Basic</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ fontWeight: "500", fontSize: 14, color: "#B5B9C7", marginLeft: 20 }}>LZ Pro</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ fontWeight: "500", fontSize: 16, marginLeft: 20, color: "#4755D4", lineHeight: 24 }}>Thành viên Basic được nhận các quyền lợi của thành viên Free và thêm:</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Tra cứu thủ tục hành chính và thông tin thực tiễn thực hiện thủ tục hành chính tại các bộ/sở/ban/ngành</Text>

            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Được sử dụng phần mềm quản lý công việc, quản lý nhân viên:</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Quản lý được thông tin của nhân viên</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Biết được toàn bộ công việc đang có và tình trạng cụ thể</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Giao việc cho nhân viên thông qua app</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Quản lý được số ngày công, ngày nghỉ của nhân viên</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Tính được lương + KPI cho nhân viên</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Nhân viên được phản hồi thông tin trên app gửi thông báo đến chủ doanh nghiệp</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Nhân viên sẽ xem được toàn bộ quy định/quy chế/chính sách của công ty tại app</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Khi xem thủ tục hành chính tại app bạn sẽ được biết:</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Thực tế thực hiện tại các bộ/sở/ban/ngành đối với thủ tục đang xem</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Số điện thoại liên hệ</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Địa chỉ cụ thể/bản đồ chỉ dẫn/hình ảnh nơi thực hiện thủ tục</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Lược đồ thủ tục: giúp bạn biết thủ tục hành chính đang xem có quan hệ như thế nào với toàn bộ hệ thống pháp luật Việt Nam, bao gồm Văn bản pháp luật</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Trình tự thủ tục thực hiện cụ thể</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Thành phần hồ sơ gồm những gì</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Cách thức nộp hồ sơ như thế nào</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Những yêu cầu và điều kiện kèm theo</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Giấy phép hoặc giấy tờ phải thực hiện trước hoặc sau thủ tục hiện tại</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>- Biểu mẫu áp dụng cho thủ tục</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Được Thông báo qua Email/điện thoại khi có thủ tục mới bạn đang quan tâm</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 20 }}>
                <View style={{ width: 5, height: 5, borderRadius: 5 / 2, borderColor: "black", borderWidth: 1, backgroundColor: "black" }}></View>
                <Text style={{ fontWeight: "400", fontSize: 14, marginLeft: 10, color: "#262C41", lineHeight: 24, marginTop: -10 }}>Được hỗ trợ sơ bộ về pháp lý qua ĐT, Email và Skype</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 150, marginLeft: 20 }}>
                <TouchableOpacity style={{ width: 335, height: 56, borderRadius: 10, backgroundColor: "#4755D4", marginLeft: 20 }}>
                    <Text style={{ fontWeight: "700", fontSize: 16, textAlign: "center", color: "#FCFCFE", marginTop: 15 }}>Đăng ký gói</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
export default Basic;