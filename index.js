import { AppRegistry } from 'react-native';

import App from './App';
import StorybookUI from './.rnstorybook';
import { name as appName } from './app.json';

const isStorybook = process.env.STORYBOOK_ENABLED === 'true';

AppRegistry.registerComponent(appName, () => isStorybook ? StorybookUI : App);
