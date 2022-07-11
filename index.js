/**
 * @format
 */

import React from 'react';
import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import {THEME} from './src/Utils'


LogBox.ignoreLogs([
    'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
    'NativeBase: The contrast ratio of',
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
    'Require cycle:', 
    '`new NativeEventEmitter()`'
])
const AppProvider = () => (
    <PaperProvider theme={THEME}>
        <App />
    </PaperProvider>
)

AppRegistry.registerComponent(appName, () => AppProvider);
