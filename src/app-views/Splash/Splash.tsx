import {replace} from '@app-navigation/navigation-services';
import React, {useEffect} from 'react';
import {Box} from 'native-base';
import RNSplashScreen from 'react-native-splash-screen';
import i18next from 'i18next';
import {ServiceStorage} from '@app-services';
// import {useRealm} from '@realm/react';

interface SplashScreenProps {}

const SplashScreen: React.FC<SplashScreenProps> = props => {
  // const realm = useRealm();
  useEffect(() => {
    getLanguage();
    (async () => {
      const timer = setTimeout(() => {
        replace('LoginApp');
        RNSplashScreen.hide();
        clearTimeout(timer);
      }, 300);
    })();
  }, []);

  const getLanguage = async () => {
    const LANGUAGE = 'LANGUAGE';
    const language = await ServiceStorage.getString(LANGUAGE);
    console.log(language);
    if (language !== null) {
      i18next.changeLanguage(language);
    } else {
      i18next.changeLanguage('en');
    }
  };

  return (
    <Box flex={1} justifyContent={'center'} alignItems={'center'}>
      {/* <SvgXml xml={logoSvg()} /> */}
    </Box>
  );
};

export default SplashScreen;
