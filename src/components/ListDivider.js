import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';

export function ListDivider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: theme.colors.line,
    marginBottom: 16,
  },
});
