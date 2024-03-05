import NavigationContainer from './app-navigation/navigation-container';
import {ServiceStorage} from '@app-services';
import moment from 'moment';
// import {NativeBaseProvider} from 'native-base';
import React, {useCallback, useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {RealmProvider} from '@realm/react';
import {toastConfig} from '@app-components/ToastApp/ToatConfig';
import {Schemas} from '@realm-db/schemas';
import {NativeBaseProvider} from 'native-base/core';
// Khởi tạo biến với EStyleSheet.build

const realmConfig: Realm.Configuration = {
  schema: Schemas,
};

function App(): JSX.Element {
  useEffect(() => {
    handleFirstInstall();
  }, []);

  const handleFirstInstall = async () => {
    const FIST_INSTALL = 'FIST_INSTALL';
    const is_first_install = await ServiceStorage.getString(FIST_INSTALL);
    if (!is_first_install) {
      await ServiceStorage.setString(
        FIST_INSTALL,
        moment().valueOf().toString(),
      );
    }
  };

  return (
    <RealmProvider {...realmConfig}>
      <NativeBaseProvider config={{}}>
        {/* <RootComponent> */}
        <NavigationContainer />
        {/* </RootComponent> */}
        <Toast config={toastConfig} />
      </NativeBaseProvider>
    </RealmProvider>
  );
}

export default App;
