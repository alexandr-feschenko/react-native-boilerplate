import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Details = () => {
  return (
    <View style={styles.container}>
      <Text>DETAILS</Text>
    </View>
  );
};

export default memo(Details);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
