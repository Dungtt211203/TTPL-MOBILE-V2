
import { useOnEventCallback } from '@app-helper/hooks';
import { pop } from '@app-navigation/navigation-services';
import {
    Box,

    Footer,
    IButtonProps,
    ITextProps,
    PresenceTransition,
    Slide,
} from 'native-base';
import React, { forwardRef, useImperativeHandle, useState } from 'react';

import { TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SvgXml } from 'react-native-svg';

export interface BaseModalProps {
    onClose?: () => void;
    children?: React.ReactNode;
    isVisible?: boolean;
    isFooter?: boolean;
    titleButtonLeft?: string;
    titleButtonRight?: string;
    onPressLeft?: () => void;
    onPressRight?: () => void;
    buttonLeftStyle?: IButtonProps;
    buttonRightStyle?: IButtonProps;
    titleLeftStyle?: ITextProps;
    titleRightStyles?: ITextProps;
    backgroundColor?: string;
}
export interface BaseModalRefs {
    close?: () => void;
}
const animDuration = 300;

const BaseModal = forwardRef<BaseModalRefs, BaseModalProps>(
    (
        {
            children,
            isVisible = true,
            isFooter = false,
            titleButtonLeft,
            titleButtonRight,
            backgroundColor,
        },
        ref,
    ) => {
        const [isOpen, setIsOpen] = useState(isVisible);

        useImperativeHandle(ref, () => ({
            close: () => {
                onDismiss();
            },
        }));

        const onDismiss = useOnEventCallback(() => {
            onCloseModal();
        });

        const onCloseModal = useOnEventCallback(() => {
            setIsOpen(false);
            setTimeout(() => pop(), animDuration);
        });

        return (
            <Box width={'full'} height={'full'}>
                <PresenceTransition
                    visible={isOpen}
                    style={styles.outside}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: animDuration } }}>
                    <TouchableOpacity
                        style={styles.container}
                        activeOpacity={1}
                        onPress={onDismiss}
                    />
                </PresenceTransition>
                <Slide
                    overlay={false}
                    in={isOpen}
                    placement="bottom"
                    width={'full'}
                    justifyContent={'flex-end'}
                    alignItems={'center'}
                    duration={animDuration}>
                    <Box
                        width={'full'}
                        backgroundColor={backgroundColor ? backgroundColor : '#fff'}
                        borderTopRadius={'40px'}
                        paddingBottom={
                            titleButtonLeft || titleButtonRight ? '0px' : '15px'
                        }>
                        <Box pb="30px" px="15px">
                            {children}
                        </Box>
                        {isFooter && (
                            <Footer px="20px" shadow={'9'} pt="20px" borderTopRadius={'16px'}></Footer>
                        )}
                    </Box>
                </Slide>
            </Box>
        );
    },
);

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    outside: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
        position: 'absolute',
    },
});

export default BaseModal;