import React from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context'

import { colors } from "../../../config.json"

export default function Background({children}) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
});
