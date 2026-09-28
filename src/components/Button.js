import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import theme from '../theme';

export function Button({ title, showDiscordIcon = false, ...rest }) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      {showDiscordIcon && (
        <Image
          source={require('../assets/discord-icon.png')}
          style={styles.icon}
          resizeMode="contain"
        />
      )}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  title: {
    fontWeight: '600',
    color: theme.colors.white,
    fontSize: 16,
  },
});
