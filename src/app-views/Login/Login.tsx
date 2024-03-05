import React, {useEffect, useState} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {Box, Text, Container, Button} from 'native-base';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import FormInputBase from '@app-components/FromInputBase';
import {goBack, navigate, replace} from '@app-navigation/navigation-services';
import {useOnEventCallback} from '@app-helper/hooks';
import {TypeRealmDb, createRealmDB, getDataRealmDB} from '@realm-db/realmdb';
import {useRealm} from '@realm/react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import sizes from '@assets/styles/sizes';
import styles_c from '@assets/styles/styles_c';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {CheckBox} from '@rneui/base';
import {useLoginAppMutation} from '@app-hooks/gql-generated/server';
import ServerClient from '@app-clients/server/server-client';
import showToastApp from '@app-components/ToastApp/ShowToastApp';
import {ServiceStorage} from '@app-services';
import {KEY_STORAGE} from '@app-services/service-storage';

export interface LoginProps {}

const phoneRegex = /^[0-9]{10}$/;
// Schema xác thực với Yup
const SignupSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(phoneRegex, 'Số điện thoại không hợp lệ')
    .required('Số điện thoại không được để trống'),
  password: Yup.string()
    .required('Mật khẩu là bắt buộc')
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    .matches(/[a-z]/, 'Mật khẩu phải có ít nhất một chữ cái thường')
    .matches(/[A-Z]/, 'Mật khẩu phải có ít nhất một chữ cái hoa')
    .matches(/\d/, 'Mật khẩu phải có ít nhất một số'),
});

const Login: React.FC<NavigationProp<'Login'>> = () => {
  const {t} = useTranslation();
  const realm = useRealm();
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [is_login, setIsLogin] = useState<boolean>(false);
  const [user_password, setUserPassword] = useState<string>('');
  const [checked, setChecked] = useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const [loginApp] = useLoginAppMutation({
    client: ServerClient,
  });
  const goToBack = useOnEventCallback(() => {
    goBack();
  });

  const getLocalStorage = async () => {
    const val = await ServiceStorage.getObject(KEY_STORAGE.ACCOUNT);
    if (typeof val === 'object') {
      setPhoneNumber(val.username);
      setUserPassword(val.password);
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  const goToRegister = useOnEventCallback(() => {
    // navigate('Register');
  });

  const goToMain = useOnEventCallback(() => {
    replace('MainApp');
    setTimeout(() => {
      // navigate('ModalSelectSellerOfProduct')
    }, 1000);
  });

  const goToLogin = useOnEventCallback(async values => {
    setIsLogin(true);
    setPhoneNumber(values.phoneNumber);
    setUserPassword(values.password);
    // Gửi dữ liệu đến máy chủ
    loginApp({
      variables: {
        input: {
          username: values.phoneNumber,
          password: values.password,
        },
      },
    })
      .then(async resp => {
        setIsLogin(false);
        const data = resp.data?.loginApp;
        const dataAccount = {
          username: values.phoneNumber,
          password: values.password,
        };
        if (typeof data === 'string') {
          await ServiceStorage.setString(KEY_STORAGE.UserToken, data);
          await ServiceStorage.setObject(KEY_STORAGE.ACCOUNT, dataAccount);
          goToMain();
        } else {
          showToastApp({
            type: 'error',
            title: 'Tài khoản hoặc mật khẩu không chính xác',
          });
        }
      })
      .catch(err => {
        setIsLogin(false);
        showToastApp({
          type: 'error',
          text: 'Đã có lỗi xảy ra!',
        });
      });
  });

  const reGoToLogin = useOnEventCallback(async () => {
    setIsLogin(true);
    loginApp({
      variables: {
        input: {
          username: phoneNumber,
          password: user_password,
        },
      },
    })
      .then(async resp => {
        setIsLogin(false);
        const data = resp.data?.loginApp;
        if (typeof data === 'string') {
          await ServiceStorage.setString(KEY_STORAGE.UserToken, data);
          goToMain();
        } else {
          showToastApp({
            type: 'error',
            title: 'Tài khoản hoặc mật khẩu không chính xác',
          });
        }
      })
      .catch(err => {
        setIsLogin(false);
      });
  });

  return (
    <Container style={{flex:1}}>
      <TouchableOpacity
        onPress={goToBack}
        style={{
          ...styles.back,
        }}>
        <AntDesign name="left" size={18} />
      </TouchableOpacity>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? sizes._10sdp : 0}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.banner}>
            {/* <SvgXml xml={bannerSvg()} /> */}
          </View>
          <Formik
            initialValues={{
              boothName: '',
              email: '',
              phoneNumber: phoneNumber,
              password: user_password,
            }}
            validationSchema={SignupSchema}
            onSubmit={goToLogin}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => {
              return (
                <View style={{paddingHorizontal: 16}}>
                  <FormInputBase
                    value={values.phoneNumber || phoneNumber}
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    keyboardType="numeric"
                    name="phoneNumber"
                    placeholder={t('login.phoneNumber', 'Số điện thoại')}
                    inValid={touched.phoneNumber && !!errors.phoneNumber}
                    textInvalid={errors.phoneNumber}
                  />
                  <FormInputBase
                    value={values.password || user_password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    name="password"
                    type="password"
                    placeholder={t('login.password', 'Mật khẩu')}
                    inValid={touched.password && !!errors.password}
                    textInvalid={errors.password}
                  />
                  <View style={{...styles_c.row_beetween}}>
                    <View style={{...styles_c.row_start}}>
                      <CheckBox
                        containerStyle={{
                          marginLeft: 0,
                          paddingLeft: 0,
                          marginRight: 0,
                        }}
                        checked={checked}
                        onPress={toggleCheckbox}
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                      />
                      <Text style={{...styles_c.font_text_14_400}}>
                        Nhớ mật khẩu
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <Text
                        style={{
                          ...styles_c.font_text_14_400,
                          color: '#1890FF',
                        }}>
                        Quên mật khẩu
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Button
                    isLoading={is_login}
                    style={{marginTop: 24}}
                    onPress={() => {
                      handleSubmit();
                      reGoToLogin();
                    }}>
                    <Text style={styles.textLogin}>
                      {t('login.login', 'Đăng nhập')}
                    </Text>
                  </Button>
                </View>
              );
            }}
          </Formik>
          <View>
            <Box style={{...styles_c.row_center, marginTop: 64}}>
              <Text style={styles.text}>
                {t('login.dontAccount', 'Bạn chưa có tài khoản?')}
              </Text>
              <TouchableOpacity onPress={goToRegister}>
                <Text style={styles.textSignUp}>
                  {t('signup', 'Đăng kí ngay!')}
                </Text>
              </TouchableOpacity>
            </Box>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  textLogin: {
    ...styles_c.font_text_14_600,
    color: 'white',
  },
  textSignUp: {
    ...styles_c.font_text_14_600,
    color: '#1890FF',
  },
  text: {
    ...styles_c.font_text,
  },
  banner: {
    alignSelf: 'center',
    marginTop: 59,
    paddingBottom: 107,
    paddingHorizontal: 61,
  },
  back: {
    height: sizes._40sdp,
    width: sizes._40sdp,
    borderRadius: sizes._20sdp,
    ...styles_c.box_shadow,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    left: 16,
    top: 45,
  },
});
