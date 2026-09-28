import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';

export function Category({ title, icon, isSelected, dimmed = false, ...rest }) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: isSelected ? theme.colors.navyLight : theme.colors.navy },
        dimmed && !isSelected && styles.dimmed,
      ]}
      activeOpacity={0.8}
      {...rest}
    >
      {dimmed && (
        <View
          style={[
            styles.dot,
            { backgroundColor: isSelected ? theme.colors.primary : theme.colors.navyLight },
          ]}
        />
      )}
      <Ionicons name={icon} size={32} color={theme.colors.white} style={{ marginBottom: 12 }} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 128,
    height: 128,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    padding: 12,
  },
  dimmed: {
    opacity: 0.5,
  },
  dot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 12,
    height: 12,
    borderRadius: 3,
  },
  title: {
    fontWeight: '600',
    color: theme.colors.white,
    fontSize: 15,
    textAlign: 'center',
  },
});
