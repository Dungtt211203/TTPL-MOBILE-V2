import { useOnEventCallback } from "@app-helper/hooks";
import { goBack } from "@app-navigation/navigation-services";
import { StackNavigationProps } from "@app-navigation/types";
import { iconBacksmSvg } from "@app-uikits/icon-svg";
import React from "react";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native"
import { SvgXml } from "react-native-svg";
import style_c from "@assets/styles/styles_c"
export interface LegalNewProps { };
const LegalNew: React.FC<StackNavigationProps<'LegalNew'>> = () => {

    const goToBack = useOnEventCallback(() =>
        goBack()
    )
    return (
        <ScrollView>
            <View style={{ flexDirection: 'row', marginTop: 16, alignItems: 'center' }}>
                <TouchableOpacity onPress={goToBack}>
                    <SvgXml xml={iconBacksmSvg()} style={{ marginHorizontal: 16 }} />
                </TouchableOpacity>
                <Text style={{ ...style_c.font_text_20_600 }}>Tin tức pháp luật</Text>
            </View>
        </ScrollView>
    )
}
export default LegalNew;