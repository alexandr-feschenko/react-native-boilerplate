import { AppRegistry } from 'react-native';

import App from './App';
import StorybookUI from './.rnstorybook';
import { name as appName } from './app.json';

if (__DEV__) {
    require("./ReactotronConfig");
}

const isStorybook = process.env.STORYBOOK_ENABLED === 'true';

AppRegistry.registerComponent(appName, () => isStorybook ? StorybookUI : App);
