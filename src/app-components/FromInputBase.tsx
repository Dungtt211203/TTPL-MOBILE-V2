import { Box, Input, Text } from 'native-base';
import { useState } from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SvgXml } from 'react-native-svg';
import styles_c from '@assets/styles/styles_c';
import sizes from '@assets/styles/sizes';
import eyeSvg from '@assets/svg/eyeSvg';
import eyeHideSvg from '@assets/svg/eyeHideSvg';
import emailSvg from '@assets/svg/emailSvg';
import phoneSvg from '@assets/svg/phoneSvg';
import userSvg from '@assets/svg/userSvg';
import lockSvg from '@assets/svg/lockSvg';

interface FormInputBaseProps {
  phoneCode?: boolean;
  style?: StyleProp<ViewStyle>;
  type?: 'text' | 'password';
  name?: 'user' | 'email' | 'password' | 'phoneNumber' | 'default';
  textInvalid?: string;
  placeholder?: string;
  inValid?: boolean;
  keyboardType?: KeyboardTypeOptions;
  value?: string;
  editable?: boolean;
  label?: string;
  labelStyle?: TextStyle;
  onChangeText?: (value: string) => void;
  onBlur?: (value: any) => void;
  maxLength?: number;
  disableFullscreenUI?: boolean;
  onChangeCodePhone?: (value: string) => void;
}
const FormInputBase: React.FC<FormInputBaseProps> = ({
  style,
  phoneCode,
  label,
  labelStyle,
  type = 'text',
  name = 'default',
  textInvalid,
  placeholder,
  inValid,
  value,
  keyboardType,
  editable,
  onChangeText,
  onBlur,
  maxLength,
  disableFullscreenUI,
  onChangeCodePhone,
}) => {
  const [is_eye, setIsEye] = useState(true);
  const [code, setCode] = useState('+84');
  const [is_phone, setIsPhone] = useState(false);
  const countryCodeArray = [
    { country: 'Việt Nam', code: '+84', value: 'VI' },
    // Các quốc gia khác có thể được thêm vào mảng tương tự
  ];
  const onPress = () => {
    setIsPhone(!is_phone);
  };

  const onPressCounTry = (item: any) => {
    setIsPhone(!is_phone);
    setCode(item.code);
    onChangeCodePhone && onChangeCodePhone(item);
  };

  const InputLeftElement = () => {
    return phoneCode ? (
      <TouchableOpacity
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingLeft: 8,
        }}
        onPress={onPress}>
        <Text style={{ ...styles_c.font_text_12_600 }}>{code}</Text>
      </TouchableOpacity>
    ) : (
      <Box style={{ marginLeft: name != 'default' ? sizes._20sdp : 0 }}>
        <SvgXml
          xml={
            name == 'email'
              ? emailSvg('#878686')
              : name == 'user'
                ? userSvg()
                : name == 'password'
                  ? lockSvg('#d9d9d9')
                  : name == 'phoneNumber'
                    ? phoneSvg('#d9d9d9')
                    : null
          }
        />
      </Box>
    );
  };
  return (
    <Box style={style}>
      <Box>
        {labelStyle ? (
          <Text style={labelStyle}>{label}</Text>
        ) : (
          <Text style={[{ ...styles_c.font_text_16_600, color: '#373737' }]}>
            {label}
          </Text>
        )}
      </Box>
      <Input
        height={sizes.height_item}
        borderRadius={'8px'}
        borderWidth={1}
        borderColor={'#e2e2e2'}
        placeholder={placeholder}
        placeholderTextColor={'#CCCCCC'}
        fontWeight={'400'}
        fontSize={'14px'}
        value={value}
        disableFullscreenUI={disableFullscreenUI}
        maxLength={maxLength}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        editable={editable}
        onBlur={onBlur}
        type={!is_eye ? 'text' : type}
        InputLeftElement={InputLeftElement()}
        InputRightElement={
          type !== 'text' ? (
            <TouchableOpacity
              style={{ marginRight: 20 }}
              onPress={() => {
                setIsEye(!is_eye);
              }}>
              <SvgXml xml={is_eye ? eyeSvg() : eyeHideSvg('#5F5E5E')} />
            </TouchableOpacity>
          ) : (
            <></>
          )
        }
      />
      <Text style={{ ...styles_c.font_text_8_400, color: 'red', paddingLeft: 4 }}>
        {inValid && textInvalid}
      </Text>
      {is_phone && (
        <View
          style={{
            zIndex: 9999,
            borderRadius: 5,
            ...styles_c.box_shadow,
            width: sizes._100sdp,
          }}>
          {countryCodeArray.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => onPressCounTry(item)}
                key={index}
                style={[
                  {
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                  },
                  index != 1 && { ...styles_c.border_bottom },
                ]}>
                <Text
                  style={{
                    ...styles_c.font_text_10_600,
                    color:
                      code == item.code
                        ? EStyleSheet.value('$mainColor')
                        : 'black',
                  }}>
                  {item.country}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </Box>
  );
};
export default FormInputBase;
