/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainScreen from './src/WithoutAnimations/MainScreen'
import MainScreenAnimation from './src/WithAnimations/MainScreenAnimation'

AppRegistry.registerComponent(appName, () => MainScreenAnimation);
