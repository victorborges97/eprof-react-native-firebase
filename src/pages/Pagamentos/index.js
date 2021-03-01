import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from "../../../config.json"

export default function Pagamentos() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pagamentos com sucesso !!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: colors.primary,
  }
});
