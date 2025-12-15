import { useTheme } from '@react-navigation/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home.tsx';
import { RootStackParamList } from './types.ts';
import { ROUTES } from '../constants/routes.ts';
import Details from '../screens/Details.tsx';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
      }}
    >
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.DETAILS} component={Details} />
    </Stack.Navigator>
  );
};
