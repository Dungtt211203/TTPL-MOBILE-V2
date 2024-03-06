import { SafeAreaView, View, Text, TouchableOpacity } from "react-native"
import React from "react";

const MenuSetting = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={{ width: "100%", height: 221, backgroundColor: "#4755D4" }}>
                <Text style={{ fontWeight: "700", fontSize: 24, color: "#FCFCFE", marginLeft: 30, marginTop: 50 }}>Trần Đức Thành</Text>
                <Text style={{ fontWeight: "400", fontSize: 14, color: "#FCFCFE", marginLeft: 30 }}>thanhvn.hd@gmail.com</Text>
                <TouchableOpacity style={{ width: 132, height: 28, marginLeft: 30, backgroundColor: "#FCFCFE", marginTop: 30, borderRadius: 12 }}>
                    <Text style={{ fontWeight: "700", fontSize: 14, color: "#4755D4", textAlign: "center", marginTop: 5 }}>Tài khoản: FREE</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: "#FCFCFE", alignSelf: 'flex-end', marginTop: -50, marginRight: 30, borderRadius: 10 }}>

            </TouchableOpacity>
            <View style={{ marginLeft: 80, marginTop: 30 }}>
                <TouchableOpacity><Text style={{ fontWeight: "700", fontSize: 16, color: "#262C41" }}>Hỏi đáp Pháp luật</Text></TouchableOpacity>
            </View>
            <View style={{ marginLeft: 80, marginTop: 30 }}>
                <TouchableOpacity><Text style={{ fontWeight: "700", fontSize: 16, color: "#262C41" }}>Tin tức Pháp luật</Text></TouchableOpacity>
            </View>
            <View style={{ marginLeft: 80, marginTop: 30 }}>
                <TouchableOpacity><Text style={{ fontWeight: "700", fontSize: 16, color: "#262C41" }}>Các gói dịch vụ</Text></TouchableOpacity>
            </View>
            <View style={{ marginLeft: 80, marginTop: 30 }}>
                <TouchableOpacity><Text style={{ fontWeight: "700", fontSize: 16, color: "#262C41" }}>Giới thiệu</Text></TouchableOpacity>
            </View>
            <View style={{ marginLeft: 80, marginTop: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Contant')}><Text style={{ fontWeight: "700", fontSize: 16, color: "#262C41" }}>Liên hệ</Text></TouchableOpacity>
            </View>
            <View style={{ marginLeft: 80, marginTop: 30 }}>
                <TouchableOpacity><Text style={{ fontWeight: "700", fontSize: 16, color: "#262C41" }}>Phản hồi</Text></TouchableOpacity>
            </View>
            <View style={{ marginLeft: 80, marginTop: 30 }}>
                <TouchableOpacity><Text style={{ fontWeight: "700", fontSize: 16, color: "#262C41" }}>Đánh giá</Text></TouchableOpacity>
            </View>
            <View style={{ marginLeft: 50, marginTop: 30, borderWidth: 0.5, marginRight: 50 }}>

            </View>
            <View style={{ marginLeft: 80, marginTop: 15 }}>
                <Text style={{ fontWeight: "500", fontSize: 16, color: "#B5B9C7" }}>Công ty TNHH Legalzone</Text>
            </View>
            <View style={{ marginLeft: 80, marginTop: 15 }}>
                <Text style={{ fontWeight: "400", fontSize: 13, color: "#B5B9C7" }}>Phòng 1603, Sảnh A3, Toà nhà Ecolife, 58 Tố Hữu, Trung Văn, Nam Từ Liêm, Hà Nội</Text>
            </View>
            <View style={{ marginLeft: 80, marginTop: 15 }}>
                <Text style={{ fontWeight: "500", fontSize: 13, color: "#B5B9C7" }}>0888889366</Text>
            </View>
            <View style={{ marginLeft: 80, marginTop: 15 }}>
                <Text style={{ fontWeight: "500", fontSize: 13, color: "#B5B9C7" }}>support@legalzone.vn</Text>
            </View>
        </SafeAreaView>
    )
}
export default MenuSetting;