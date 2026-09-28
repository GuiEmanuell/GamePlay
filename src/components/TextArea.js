import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import theme from '../theme';

export function TextArea({ maxLength, ...rest }) {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={theme.colors.caption}
      multiline
      maxLength={maxLength}
      textAlignVertical="top"
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 96,
    backgroundColor: theme.colors.navyLight,
    borderRadius: 4,
    padding: 16,
    color: theme.colors.heading,
    fontSize: 15,
  },
});
