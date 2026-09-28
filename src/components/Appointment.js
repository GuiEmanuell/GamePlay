import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GuildBanner } from './GuildBanner';
import theme from '../theme';

export function Appointment({ data, ...rest }) {
  const isHost = data.role === 'Anfitrião';

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <GuildBanner uri={data.bannerUrl} size={64} />

      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.title}>{data.guildName}</Text>
          <Text style={styles.category}>{data.category}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.rowCenter}>
            <Ionicons name="calendar-outline" size={14} color={theme.colors.primary} />
            <Text style={styles.date}>{data.date}</Text>
          </View>
          <View style={styles.rowCenter}>
            <Ionicons
              name="person"
              size={14}
              color={isHost ? theme.colors.primary : theme.colors.success}
            />
            <Text
              style={[
                styles.role,
                { color: isHost ? theme.colors.primary : theme.colors.success },
              ]}
            >
              {data.role}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    color: theme.colors.heading,
    fontSize: 17,
  },
  category: {
    color: theme.colors.caption,
    fontSize: 13,
  },
  date: {
    color: theme.colors.standard,
    fontSize: 13,
    marginLeft: 6,
  },
  role: {
    fontWeight: '600',
    fontSize: 13,
    marginLeft: 6,
  },
});
