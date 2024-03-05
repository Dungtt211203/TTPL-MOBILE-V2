import {Theme} from '@shoutem/theme';
import getThemeStyle from './theme/components';
import EStyleSheet from 'react-native-extended-stylesheet';
import variable from './theme/variables/platform';
import * as _ from 'lodash';

export default function setDefaultThemeStyle(newVariables = variable) {
  const variables = _.merge(variable, newVariables);

  const theme = getThemeStyle(variables);

  Theme.setDefaultThemeStyle(theme);

  EStyleSheet.clearCache();

  EStyleSheet.build({
    $mainColor: variable.mainColor,
    $platformStyle: variables.platformStyle,
    $rem: variables.rem,
    $brandPrimary: variables.brandPrimary,
    $brandSecondary: variables.brandSecondary,
    $backgroundBody: variables.backgroundBody,
    $textColor: variables.textColor,
    $brandSuccess: variables.brandSuccess,
    $buttonMainPrimary: variables.buttonMainPrimary,
    $brandDanger: variables.brandDanger,
    $backgroundTabBar: variables.backgroundTabBar,
    $backgroundDrawer: variables.backgroundDrawer,
    $iconDrawer: variables.iconDrawer,
    $brandOrange: variables.brandOrange,
    $placeholderTextColor: variables.placeholderTextColor,
    $inactiveColor: variables.inactive,
    $error: variables.error,
  });
}
