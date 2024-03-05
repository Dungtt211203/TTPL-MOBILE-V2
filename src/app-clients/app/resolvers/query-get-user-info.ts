import ServerClient from '@app-clients/server/server-client';
import { AppConfig } from '@app-config';
import { UserInfoObject } from '@app-database';
import { GetAvatarDocument, GetBackgroundDocument, GetCustomerInfoDocument } from '@app-hooks/gql-generated/server';
import { QueryGetRealmUserInfoArgs, ResRealmUserInfo } from '@app-schemas/app';
import { QueryGetCustomerInfoArgs, ResLoginWithPassWord } from '@app-schemas/server';
import { UpdateMode } from 'realm';

module.exports = async (_: any, args: QueryGetRealmUserInfoArgs) => {
  const { isPass = false } = args
  const realm_user = AppConfig.getRealmUser();
  const email = AppConfig.getEmail()
  const token = AppConfig.getToken()

  const userInfo = realm_user.objectForPrimaryKey<UserInfoObject>(
    UserInfoObject,
    email,
  );
 
  if (!userInfo?.customer_info && userInfo && email && token) {
    try {
      const response = await ServerClient.query<{ query: ResLoginWithPassWord }, QueryGetCustomerInfoArgs>({
        query: GetCustomerInfoDocument, variables: {
          email,
          token: userInfo.token
        },
        fetchPolicy: 'no-cache'
      })

      if (response.data.query.status) {
        const { customer_info, token } = response.data.query
        realm_user.write(() => {
          if (customer_info) {
            userInfo.customer_info = customer_info as any
          }
          if (token) {
            userInfo.token = token
          }
        })
      }
    } catch (e) {
      console.log('====================================')
      console.log(e)
      console.log('====================================')
    }
  }
  if (!userInfo?.avatar && userInfo) {
    try {
      const response = await ServerClient.query({
        query: GetAvatarDocument,
        fetchPolicy: 'no-cache'
      })

      if (response && !!response.data.getAvatar.length) {
        realm_user.write(() => {
          userInfo.avatar = response.data.getAvatar[0].src || ''
        })
      }
    } catch (e) {
      console.log('====================================')
      console.log(e)
      console.log('====================================')
    }
  }

  if (!userInfo?.background_image && userInfo) {
    try {
      const response = await ServerClient.query({
        query: GetBackgroundDocument,
        fetchPolicy: 'no-cache'
      })

      if (response && !!response.data.getBackground.length) {
        realm_user.write(() => {
          userInfo.background_image = response.data.getBackground[0].src || ''
        })
      }
    } catch (e) {
      console.log('====================================')
      console.log(e)
      console.log('====================================')
    }
  }

  let data_response: ResRealmUserInfo = {
    email: '',
    token: '',
    password: '',
    type_login: '',
    background_image: "",
    avatar: "",
    customer_info: null,

  }

  if (userInfo) {
    data_response = {
      email: userInfo?.email,
      token: userInfo?.token,
      password: '',
      type_login: userInfo?.type_login,
      background_image: userInfo.background_image || '',
      avatar: userInfo.avatar || '',
      customer_info: userInfo?.customer_info,
    }

    if (isPass) {
      data_response.password = userInfo?.password
    }
  }
  return data_response;
};
