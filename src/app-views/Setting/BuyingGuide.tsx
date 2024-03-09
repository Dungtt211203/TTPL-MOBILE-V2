import React, { useCallback, useState } from 'react';
import { StackNavigationProps } from '@app-navigation/types';
import { Box, Text, Input } from 'native-base';
import { Dimensions, FlatList, StyleSheet, TextInput, View } from 'react-native';
import styles_c from '@assets/styles/styles_c';
import {
    GestureHandlerRootView,
    TouchableOpacity,
} from 'react-native-gesture-handler';
import BaseModal from './BaseModal';
import { SvgXml } from 'react-native-svg';
import { iconLineSvg, iconLinesmSvg } from '@app-uikits/icon-svg';

export interface BuyingGuideProps { }

const BuyingGuide: React.FC<
    StackNavigationProps<'BuyingGuide'>
> = () => {
    return (
        <GestureHandlerRootView>
            <BaseModal isVisible={true}>
                <SvgXml xml={iconLinesmSvg()} style={{ alignSelf: "center", marginTop: 16 }} />
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Text style={{ ...styles_c.font_text_22_600 }}>Đăng ký gói Basic</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Text style={{ ...styles_c.font_text_14_400, color: "#262C41" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quis ultrices nunc sed pharetra mattis egestas. Gravida consequat curabitur consectetur imperdiet cursus tortor, malesuada lacus sit. A neque urna, id diam vitae etiam tellus aliquet at. Id posuere fames leo dolor netus fusce scelerisque. Vivamus gravida laoreet imperdiet massa lacus.

                        Tellus orci faucibus urna, ipsum. Ornare nec velit vivamus convallis. Commodo, ut vel, quisque eget elementum. Mi tortor nisl tortor imperdiet amet, tellus augue ut neque. Eu ac in mi amet, non lorem. Nulla pellentesque turpis hendrerit ultricies sed facilisi auctor eget est. Imperdiet mi, tellus, etiam porta eget vestibulum urna justo, vulputate. Sem id donec diam a. Dolor suspendisse sapien, tellus euismod venenatis massa. Tortor eget velit non curabitur egestas mattis sit viverra. Pulvinar in sed mattis quis commodo, nunc dui. Egestas nec facilisi est pulvinar tempor gravida non.

                        Tristique viverra porta mattis nec massa vulputate. Non diam ac mattis eleifend urna pretium velit urna justo. Nunc, sed augue hendrerit at viverra arcu. Tortor sed morbi nunc, tortor feugiat. Volutpat tortor, aliquam fames lacus pellentesque. Curabitur mattis phasellus lacus, tortor ante. Pellentesque eu, ut elit erat nisl, tortor nisl. Volutpat cursus orci rhoncus, condimentum nunc.</Text>
                </View>
            </BaseModal>
        </GestureHandlerRootView>
    );
};
const styles = StyleSheet.create({
    columnWrapper: {
        flex: 1,
        justifyContent: 'space-between',
    },

    item: {
        width: '33%',
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginTop: 6,
    },
});
export default BuyingGuide;