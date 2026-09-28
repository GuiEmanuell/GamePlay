import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import theme from '../theme';

export function SmallInput({ maxLength, ...rest }) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={theme.colors.caption}
      keyboardType="numeric"
      maxLength={maxLength}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    backgroundColor: theme.colors.navyLight,
    borderRadius: 4,
    textAlign: 'center',
    color: theme.colors.heading,
    fontSize: 20,
  },
});
