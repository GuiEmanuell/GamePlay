import React from 'react';
import { Image, StyleSheet } from 'react-native';
import theme from '../theme';

export function GuildBanner({ uri, size = 64 }) {
  return <Image source={{ uri }} style={[styles.image, { width: size, height: size }]} />;
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 8,
    backgroundColor: theme.colors.navy,
  },
});
