import { iconBacksmSvg } from "@app-uikits/icon-svg";
import React from "react";
import { View, Image, ScrollView, Text } from "react-native"
import { SvgXml } from "react-native-svg";
const LegalNews = () => {
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', marginTop: 16, }}>
                <SvgXml xml={iconBacksmSvg()} style={{ marginLeft: 16 }} />
                <Text style={{ fontWeight: '700', fontSize: 20, color: "#262C41", marginLeft: 10 }}>Tin Tức Pháp Luật</Text>
            </View>
            <View>
            </View>
        </ScrollView>
    )
}
export default LegalNews;