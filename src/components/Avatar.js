import React from 'react';
import { Image, StyleSheet } from 'react-native';
import theme from '../theme';

export function Avatar({ uri, size = 56 }) {
  return (
    <Image
      source={{ uri }}
      style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
});
