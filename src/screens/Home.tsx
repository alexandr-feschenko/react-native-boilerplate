import React, { memo } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigation/types.ts';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ROUTES } from '../constants/routes.ts';

type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  typeof ROUTES.HOME
>;
interface HomeProps extends NavigationProps {
  // props here
}

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
      <Button
        title="Go To"
        onPress={() => navigation.navigate(ROUTES.DETAILS)}
      />
    </View>
  );
};
export default memo(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
