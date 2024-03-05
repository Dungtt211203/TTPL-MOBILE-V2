import {Dimensions} from 'react-native';
import {t} from 'i18next';

export const getAuthenticationBiometryError = (error: any) => {
  switch (error.name) {
    case 'LAErrorAuthenticationFailed':
      return t(
        'sercure.LAErrorAuthenticationFailed',
        'Authentication was not successful because the user failed to provide valid credentials.',
      );
    case 'LAErrorUserCancel':
      return t(
        'sercure.LAErrorUserCancel',
        'Authentication was canceled by the user—for example, the user tapped Cancel in the dialog.',
      );
    case 'LAErrorUserFallback':
      return t(
        'sercure.LAErrorUserFallback',
        'Authentication was canceled because the user tapped the fallback button (Enter Password).',
      );
    case 'LAErrorSystemCancel':
      return t(
        'sercure.LAErrorSystemCancel',
        'Authentication was canceled by system—for example, if another application came to foreground while the authentication dialog was up.',
      );
    case 'LAErrorPasscodeNotSet':
      return t(
        'sercure.LAErrorPasscodeNotSet',
        'Authentication could not start because the passcode is not set on the device.',
      );
    case 'LAErrorTouchIDNotAvailable':
      return t(
        'sercure.LAErrorTouchIDNotAvailable',
        'Authentication could not start because Touch ID or Face ID is not available on the device',
      );
    case 'LAErrorTouchIDNotEnrolled':
      return t(
        'sercure.LAErrorTouchIDNotEnrolled',
        'Authentication could not start because Touch ID or Face ID has no enrolled fingers.',
      );
    case 'LAErrorTouchIDLockout':
      return t(
        'sercure.LAErrorTouchIDLockout',
        'Authentication failed because of too many failed attempts.',
      );
    case 'RCTTouchIDUnknownError':
      return t(
        'sercure.RCTTouchIDUnknownError',
        'Could not authenticate for an unknown reason.',
      );
    case 'RCTTouchIDNotSupported':
      return t(
        'sercure.RCTTouchIDNotSupported',
        'Device does not support Touch ID or Face ID.',
      );
  }
};

const {width, height} = Dimensions.get('window');

const width_current = 375;
const height_current = 815;

const scaleW = width / width_current;
const scaleH = height / height_current;
const width_screen = width;
const height_screen = height;
export {scaleW, scaleH, width_screen, height_screen};
