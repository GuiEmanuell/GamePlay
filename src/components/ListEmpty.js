import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';

export function ListEmpty({ title }) {
  return (
    <View style={styles.container}>
      <Ionicons name="happy-outline" size={40} color={theme.colors.caption} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', alignItems: 'center', marginTop: 40 },
  title: {
    fontWeight: '600',
    color: theme.colors.caption,
    fontSize: 15,
    marginTop: 12,
  },
});
