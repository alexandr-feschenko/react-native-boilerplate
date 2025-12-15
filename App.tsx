import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

import { store } from './src/store';
import { DefaultAppTheme } from './src/theme/defaultTheme.ts';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer theme={DefaultAppTheme}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AppContent />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

function AppContent() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
