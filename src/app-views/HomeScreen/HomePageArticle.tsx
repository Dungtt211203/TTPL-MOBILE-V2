import FormInputBase from "@app-components/FromInputBase";
import { iconCommentSvg, iconDislikeSvg, iconLND4040Svg, iconLikeColorSvg, iconLikeColorXanhSvg, iconMenuTabSvg, iconRecordSvg, iconSearchColorSvg, iconShareeSvg, iconTBMesSvg, iconXexitSvg } from "@app-uikits/icon-svg";
import iconTBMes from "@assets/svg/iconTBMes";
import React, { useState } from "react";
import { Text, View, TouchableOpacity, SafeAreaView, TextInput, Image } from "react-native";
import { SvgXml } from "react-native-svg";
import styles_c from "@assets/styles/styles_c";
import { ScrollView } from "react-native-gesture-handler";

const HomePageArticle = () => {
    const [likePressed, setLikePressed] = useState(false);

    const handleLikePress = () => {
        setLikePressed(true);
        // Thực hiện các hành động khác khi like được nhấn
        console.log("Like thành công")
    };
    const handleDislikePress = () => {
        setLikePressed(false);
        // Thực hiện các hành động khác khi dislike được nhấn
        console.log("Dislike thành công");
    };
    return (
        <ScrollView>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ marginTop: 32, marginLeft: 16 }}>
                    <SvgXml xml={iconMenuTabSvg()} />
                </TouchableOpacity>
                <View style={{ flexDirection: "row", marginLeft: 30, marginTop: 25 }}>
                    <SvgXml xml={iconSearchColorSvg()} style={{}} />
                    <TextInput style={{ borderWidth: 1, height: 36, width: 220, borderRadius: 8, marginLeft: -45 }} />
                    <SvgXml xml={iconXexitSvg()} style={{ marginTop: 5, marginLeft: -30 }} />
                </View>
                <View style={{ marginTop: 25, marginLeft: 50 }}>
                    <TouchableOpacity>
                        <SvgXml xml={iconRecordSvg()} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 9, marginTop: 25 }}>
                    <TouchableOpacity>
                        <SvgXml xml={iconTBMesSvg()} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{ ...styles_c.font_text_20_600, color: "#262C41", marginLeft: 16, marginTop: 16 }}>Bài viết</Text>
            <View style={{ flexDirection: "row", marginTop: 16, paddingVertical: 9 }}>
                <View style={{ marginLeft: 16 }}>
                    <SvgXml xml={iconLND4040Svg()} />
                </View>
                <View style={{ marginLeft: 8 }}>
                    <Text style={{ ...styles_c.font_text_14_600, color: "#262C41" }}>Nguyễn Thanh Điệp</Text>
                    <Text style={{ ...styles_c.font_text_12_400, color: "#B5B9C7" }}>20 phút trước</Text>
                </View>
                <View style={{ marginLeft: 100, marginTop: 5 }}>
                    <TouchableOpacity style={{ height: 30, width: 100, backgroundColor: "#F4F5F8" }}>
                        <Text style={{ ...styles_c.font_text_12_600, textAlign: "center", marginTop: 5, color: "#262C41" }}>Đang theo dõi</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 12 }}>
                <View>
                    <Image source={require("../../assets/images/chinh-sach-moi-thang-3-2024.jpg")} style={{ width: "100%", height: 274 }} />
                </View>
                <View style={{ paddingVertical: 12, marginHorizontal: 12 }}>
                    <Text style={{ ...styles_c.font_text_14_600, color: "#262C41" }}>MỘT SỐ VẤN ĐỀ PHÁP LÝ về sáng chế liên quan đến Chương trình máy tính</Text>
                    <Text style={{ ...styles_c.font_text_12_400, color: "#686E7E" }}>Hiện nay, hệ thống pháp luật Việt Nam và các nước trên thế giới đều bảo hộ quyền tác giả (QTG) cho CTMT vì quyền tác giả bảo vệ những yếu tố bằng chữ ký tự của các mã CTMT</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                {/* Comment Like Chia Sẻ */}
                <View style={{ flexDirection: "row" }}>
                    <SvgXml xml={iconLikeColorXanhSvg()} style={{ marginLeft: 16 }} />
                    <Text style={{ marginLeft: 5 }}>120</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: 180 }}>
                    <Text>123 lượt xem</Text>
                    {""}
                    <Text>5 bình luận</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ flexDirection: "row", marginLeft: 10 }} onPress={handleLikePress}>
                    <SvgXml xml={iconLikeColorSvg()} style={{ marginLeft: 16, marginTop: 16 }} />
                    <Text style={{ ...styles_c.font_text_14_400, marginTop: 16, marginLeft: 9, color: "#4755D4" }}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginLeft: 10 }} onPress={handleDislikePress}>
                    <SvgXml xml={iconDislikeSvg()} style={{ marginTop: 16, marginLeft: 16 }} />
                    <Text style={{ ...styles_c.font_text_14_400, marginTop: 16, marginLeft: 9 }}>Dislike</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginLeft: 10 }}>
                    <SvgXml xml={iconCommentSvg()} style={{ marginTop: 16, marginLeft: 16 }} />
                    <Text style={{ ...styles_c.font_text_14_400, marginTop: 16, marginLeft: 9 }}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: "row", marginLeft: 10 }}>
                    <SvgXml xml={iconShareeSvg()} style={{ marginTop: 16, marginLeft: 16 }} />
                    <Text style={{ ...styles_c.font_text_14_400, marginTop: 16, marginLeft: 9 }}>Share</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default HomePageArticle;
