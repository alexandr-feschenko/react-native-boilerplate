import { reactotronRedux } from 'reactotron-redux';
import Reactotron, { trackGlobalErrors } from 'reactotron-react-native';

const reactotron = Reactotron.configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .use(trackGlobalErrors())
    .connect(); // let's connect!

export default reactotron;
