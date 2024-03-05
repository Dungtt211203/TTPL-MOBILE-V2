/**
 * @format
 */
import { AppRegistry } from 'react-native';
// import './i18n';
import App from './src/App';
import { name as appName } from './app.json';
import EStyleSheet from 'react-native-extended-stylesheet';
import './ReactotronConfig';
EStyleSheet.build();
AppRegistry.registerComponent(appName, () => App);
