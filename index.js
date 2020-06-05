/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainScreenAnimation from './src/WithAnimations/MainScreenAnimation'
import MainScreen from './src/Bridge/MainScreen'
AppRegistry.registerComponent(appName, () => MainScreenAnimation);
