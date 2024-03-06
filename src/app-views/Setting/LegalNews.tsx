import React from "react";
import { View, Image, ScrollView, Text } from "react-native"
import { SvgXml } from "react-native-svg";
import iconBack from "../../Images/svg/iconBack";
const LegalNews = () => {
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', marginTop: 16, }}>
                <SvgXml xml={iconBack()} style={{ marginLeft: 16 }} />
                <Text style={{ fontWeight: '700', fontSize: 20, color: "#262C41", marginLeft: 10 }}>Tin Tức Pháp Luật</Text>
            </View>
            <View>
                <Image source={{ uri: "" }}></Image>
            </View>
        </ScrollView>
    )
}
export default LegalNews;