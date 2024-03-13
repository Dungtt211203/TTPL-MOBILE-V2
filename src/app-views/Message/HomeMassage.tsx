import FormInputBase from "@app-components/FromInputBase";
import { iconChatSvg, iconChatTBSvg, iconLND4040Svg, iconLNDBTSvg, iconNLHSvg, iconSearchColorSvg, iconTronXanhSvg } from "@app-uikits/icon-svg";
import iconTBMes from "@assets/svg/iconTBMes";
import React, { useState } from "react";
import { Text, View, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { SvgXml } from "react-native-svg";
import styles_c from "@assets/styles/styles_c";

const ContantMassage = () => {
    const [isMessageClicked, setIsMessageClicked] = useState(false);
    const handlePressMessage = () => {
        setIsMessageClicked(true);
        console.log("Press Message")
    };
    const handlePressContact = () => {
        setIsMessageClicked(false);
        console.log("Press Contact");
    };
    return (
        <SafeAreaView>
            <View style={{ marginTop: 32, marginLeft: 16, flexDirection: "row" }}>
                <Text style={{ ...styles_c.font_text_20_600, fontStyle: 'normal', color: "#262C41" }}>Tin nhắn</Text>
                <TouchableOpacity style={{
                    alignSelf: "flex-end",
                    marginLeft: 230,
                    marginTop: 5
                }}><SvgXml xml={iconSearchColorSvg()} /></TouchableOpacity>
                <TouchableOpacity style={{
                    alignSelf: "flex-end",
                }}><SvgXml xml={iconTBMes()} /></TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ width: 188, height: 54, marginLeft: 16, marginTop: 16, flexDirection: "row" }}>
                    <TouchableOpacity onPress={handlePressMessage}>
                        <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 70 }}>
                            <SvgXml xml={iconChatSvg()} style={{}} />
                        </View>
                        <View >
                            <Text style={{ ...styles_c.font_text_12_400, color: "black", textAlign: "center", marginLeft: 70 }}>Tin nhắn</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ width: 188, height: 54, marginLeft: 16, alignSelf: "flex-end", marginRight: 10 }}>
                    <TouchableOpacity onPress={handlePressContact}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <SvgXml xml={iconNLHSvg()} />
                        </View>
                        <View >
                            <Text style={{ ...styles_c.font_text_12_400, color: "#4755D4", textAlign: "center" }}>Người liên hệ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {isMessageClicked ? (
                // Form Tin Nhắn
                <View>
                    <View>
                        <FormInputBase style={{
                            height: 40,
                            width: 343,
                            borderRadius: 5,
                            backgroundColor: "#F4F5F8",
                            marginLeft: 32
                        }} placeholder={"Tìm"} />
                    </View>
                    <View>
                        {/*1*/}
                        <View style={{ marginLeft: 32, marginTop: 50, flexDirection: 'row' }}>
                            <SvgXml xml={iconLND4040Svg()} />
                            <SvgXml xml={iconTronXanhSvg()} style={{ alignItems: "center", justifyContent: "center", marginTop: 25, marginLeft: -10 }} />
                        </View>
                        <Text style={{ ...styles_c.font_text_14_600, color: "#262C41", marginLeft: 80, marginTop: -40 }}>Anh Thư</Text>
                        <Text style={{ ...styles_c.font_text_14_400, color: "#262C41", marginLeft: 80 }}>Lorem ipsum dolor sit amet, consecto...</Text>
                    </View>
                    {/*2*/}
                    <View>
                        <View style={{
                            marginLeft: 32,
                            marginTop: 32
                        }}><SvgXml xml={iconLND4040Svg()} /></View>
                        <Text style={{ ...styles_c.font_text_14_600, color: "#262C41", marginLeft: 80, marginTop: -40 }}>Ngọc Hà</Text>
                        <Text style={{ ...styles_c.font_text_14_400, color: "#262C41", marginLeft: 80 }}>Lorem ipsum dolor sit amet, consecto...</Text>
                    </View>
                    {/*3*/}
                    <View>
                        <View style={{
                            marginLeft: 32,
                            marginTop: 32
                        }}><SvgXml xml={iconLND4040Svg()} /></View>
                        <Text style={{ ...styles_c.font_text_14_600, color: "#262C41", marginLeft: 80, marginTop: -40 }}>Thinh Hoang</Text>
                        <Text style={{ ...styles_c.font_text_12_400, color: "#262C41", marginLeft: 80 }}>Lorem ipsum dolor sit amet, consecto...</Text>
                    </View>
                    {/*4*/}
                    <View>
                        <View style={{
                            marginLeft: 32,
                            marginTop: 32
                        }}><SvgXml xml={iconLND4040Svg()} /></View>
                        <Text style={{ ...styles_c.font_text_14_600, color: "#262C41", marginLeft: 80, marginTop: -40 }}>Nela Canovic</Text>
                        <Text style={{ ...styles_c.font_text_12_400, color: "#262C41", marginLeft: 80 }}>Lorem ipsum dolor sit amet, consecto...</Text>
                    </View>
                    {/*5*/}
                    <View>
                        <View style={{
                            marginLeft: 32,
                            marginTop: 32
                        }}><SvgXml xml={iconLND4040Svg()} /></View>
                        <Text style={{ ...styles_c.font_text_14_600, color: "#262C41", marginLeft: 80, marginTop: -40 }}>Lê nghĩa</Text>
                        <Text style={{ ...styles_c.font_text_14_400, color: "#262C41", marginLeft: 80 }}>Lorem ipsum dolor sit amet, consecto...</Text>
                    </View>
                    {/*6*/}
                    <View>
                        <View style={{
                            marginLeft: 32,
                            marginTop: 32
                        }}><SvgXml xml={iconLND4040Svg()} /></View>
                        <Text style={{ ...styles_c.font_text_14_600, color: "#262C41", marginLeft: 80, marginTop: -40 }}>Carol Peiffer</Text>
                        <Text style={{ ...styles_c.font_text_14_400, color: "#262C41", marginLeft: 80 }}>Lorem ipsum dolor sit amet, consecto...</Text>
                    </View>
                    {/*7*/}
                    <View>
                        <View style={{
                            marginLeft: 32,
                            marginTop: 32,
                        }}>
                            <SvgXml xml={iconLND4040Svg()} />
                        </View>
                        <Text style={{ ...styles_c.font_text_14_600, color: "#262C41", marginLeft: 80, marginTop: -40 }}>An Bảo Trần</Text>
                        <Text style={{ ...styles_c.font_text_14_400, color: "#262C41", marginLeft: 80 }}>Lorem ipsum dolor sit amet, consecto...</Text>
                    </View>
                </View>
            ) : (
                <View>
                    {/* Form Người liên hệ */}
                    <View>
                        <FormInputBase style={{
                            height: 40,
                            width: 343,
                            borderRadius: 5,
                            backgroundColor: "#F4F5F8",
                            marginLeft: 32
                        }} placeholder={"Tìm kiếm"} />
                    </View>
                    <View>
                        {/*1*/}
                        <View style={{ marginLeft: 32, marginTop: 50, flexDirection: 'row' }}>
                            <SvgXml xml={iconLND4040Svg()} />
                            <SvgXml xml={iconTronXanhSvg()} style={{ alignItems: "center", justifyContent: "center", marginTop: 25, marginLeft: -10 }} />
                        </View>
                        <Text style={{ ...styles_c.font_text_14_600, color: "#262C41", marginLeft: 80, marginTop: -40 }}>Anh Thư</Text>
                        <Text style={{ ...styles_c.font_text_12_400, color: "#B5B9C7", marginLeft: 80 }}>anhthu@gmail.com</Text>
                    </View>
                    {/*2*/}
                    <View>
                        <View style={{
                            marginLeft: 32,
                            marginTop: 32
                        }}><SvgXml xml={iconLND4040Svg()} /></View>
                        <Text style={{ ...styles_c.font_text_14_600, color: "#262C41", marginLeft: 80, marginTop: -40 }}>Ngọc Hà</Text>
                        <Text style={{ ...styles_c.font_text_12_400, color: "#B5B9C7", marginLeft: 80 }}>ngocha@gmail.com</Text>
                    </View>
                    {/*3*/}
                    <View>
                        <View style={{
                            marginLeft: 32,
                            marginTop: 32
                        }}><SvgXml xml={iconLND4040Svg()} /></View>
                        <Text style={{ ...styles_c.font_text_14_600, color: "#262C41", marginLeft: 80, marginTop: -40 }}>Thinh Hoang</Text>
                        <Text style={{ ...styles_c.font_text_12_400, color: "#B5B9C7", marginLeft: 80 }}>thinhthoang@gmail.com</Text>
                    </View>
                    {/*4*/}
                    <View>
                        <View style={{
                            marginLeft: 32,
                            marginTop: 32
                        }}><SvgXml xml={iconLND4040Svg()} /></View>
                        <Text style={{ ...styles_c.font_text_14_600, color: "#262C41", marginLeft: 80, marginTop: -40 }}>Nela Canovic</Text>
                        <Text style={{ ...styles_c.font_text_12_400, color: "#B5B9C7", marginLeft: 80 }}>nelacanovic@gmail.com</Text>
                    </View>
                    {/*5*/}
                    <View>
                        <View style={{
                            marginLeft: 32,
                            marginTop: 32
                        }}><SvgXml xml={iconLND4040Svg()} /></View>
                        <Text style={{ ...styles_c.font_text_14_600, color: "#262C41", marginLeft: 80, marginTop: -40 }}>Lê nghĩa</Text>
                        <Text style={{ ...styles_c.font_text_12_400, color: "#B5B9C7", marginLeft: 80 }}>lenghia@gmail.com</Text>
                    </View>
                    {/*6*/}
                    <View>
                        <View style={{
                            marginLeft: 32,
                            marginTop: 32
                        }}><SvgXml xml={iconLND4040Svg()} /></View>
                        <Text style={{ ...styles_c.font_text_14_600, color: "#262C41", marginLeft: 80, marginTop: -40 }}>Carol Peiffer</Text>
                        <Text style={{ ...styles_c.font_text_12_400, color: "#B5B9C7", marginLeft: 80 }}>carolpeiffer@gmail.com</Text>
                    </View>
                    {/*7*/}
                    <View>
                        <View style={{
                            marginLeft: 32,
                            marginTop: 32
                        }}><SvgXml xml={iconLND4040Svg()} /></View>
                        <Text style={{ ...styles_c.font_text_14_600, color: "#262C41", marginLeft: 80, marginTop: -40 }}>An Bảo Trần</Text>
                        <Text style={{ ...styles_c.font_text_12_400, color: "#B5B9C7", marginLeft: 80 }}>anbaotran@gmail.com</Text>
                    </View></View>
            )}

        </SafeAreaView>
    )
}
export default ContantMassage;
