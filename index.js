/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import MainScreen from './src/WithoutAnimations/MainScreen'
import MyTests from './src/MyTests/test1'
import MainScreenAnimation from './src/WithAnimations/MainScreenAnimation'

AppRegistry.registerComponent(appName, () => MainScreenAnimation);
