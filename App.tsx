import { Provider } from 'react-redux';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from './src/store';
import { DefaultAppTheme } from './src/theme/defaultTheme.ts';
import { RootStack } from './src/navigation/RootNavigation.tsx';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer theme={DefaultAppTheme}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <RootStack />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
