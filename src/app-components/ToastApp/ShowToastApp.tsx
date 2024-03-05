import sizes from '@assets/styles/sizes';
import Toast from 'react-native-toast-message';

const showToastApp = ({
  type,
  title,
  text,
  position = 'bottom',
}: {
  type?: 'success' | 'error' | 'info' | 'tomatoToast';
  title?: string;
  text?: string;
  position?: 'top' | 'bottom';
}) => {
  return Toast.show({
    position: position,
    type: type,
    topOffset: sizes._screen_height / 4,
    bottomOffset: sizes._screen_height / 4,
    keyboardOffset: sizes._screen_height / 4,
    // And I can pass any custom props I want
    text1: title,
    text2: text,
  });
};

export default showToastApp;
