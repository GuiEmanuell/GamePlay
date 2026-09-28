import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Linking, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Background } from '../components/Background';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';
import theme from '../theme';

const data = {
  guildName: 'Lendários',
  description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  players: [
    { id: '1', name: 'Jason Duval', avatarUrl: 'https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_02.1486~7_v40cn..jpg?akim=1&imdensity=1&imwidth=1920', status: 'Disponível' },
    { id: '2', name: 'Ezio Auditore', avatarUrl: 'https://static.wikitide.net/deathbattlewiki/c/c2/Portrait.ezioauditoredafirenze.png', status: 'Ocupado' },
    { id: '3', name: 'Miles Morales', avatarUrl: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2020/06/spiderman-miles-morales-nao-e-sequencia.jpg', status: 'Ocupado' },
  ],
};

export function AppointmentDetails({ navigation }) {
  function handleOpenGuild() {
    Linking.openURL('https://discord.com/');
  }

  return (
    <Background>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalhes</Text>
        <Ionicons name="share-social" size={22} color={theme.colors.primary} />
      </View>

      <Image source={require('../assets/banner-sample.png')} style={styles.banner} />
      <View style={styles.bannerOverlay}>
        <Text style={styles.guildName}>{data.guildName}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>

      <View style={styles.playersHeader}>
        <Text style={styles.playersTitle}>Jogadores</Text>
        <Text style={styles.playersTotal}>Total {data.players.length}</Text>
      </View>

      <FlatList
        data={data.players}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        renderItem={({ item }) => (
          <View style={styles.playerRow}>
            <Avatar uri={item.avatarUrl} size={48} />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.playerName}>{item.name}</Text>
              <View style={styles.statusRow}>
                <View
                  style={[
                    styles.statusDot,
                    { backgroundColor: item.status === 'Disponível' ? theme.colors.success : theme.colors.primary },
                  ]}
                />
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Button title="Entrar na partida" showDiscordIcon onPress={handleOpenGuild} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.navy,
    paddingHorizontal: 24,
    paddingTop: 55,
    paddingBottom: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerTitle: {
    fontWeight: '700',
    color: theme.colors.white,
    fontSize: 18,
  },
  banner: { width: '100%', height: 160 },
  bannerOverlay: {
    backgroundColor: 'rgba(11,13,23,0.55)',
    padding: 20,
    marginTop: -60,
    height: 60,
    justifyContent: 'center',
  },
  guildName: {
    fontWeight: '700',
    color: theme.colors.white,
    fontSize: 22,
  },
  description: {
    color: theme.colors.standard,
    fontSize: 13,
    marginTop: 4,
  },
  playersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 24,
    marginBottom: 16,
  },
  playersTitle: {
    fontWeight: '600',
    color: theme.colors.heading,
    fontSize: 18,
  },
  playersTotal: {
    color: theme.colors.caption,
    fontSize: 14,
  },
  playerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  playerName: {
    fontWeight: '600',
    color: theme.colors.heading,
    fontSize: 15,
  },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  statusDot: { width: 8, height: 8, borderRadius: 4, marginRight: 6 },
  statusText: {
    color: theme.colors.standard,
    fontSize: 13,
  },
  footer: { paddingHorizontal: 24, marginTop: 'auto', marginBottom: 32 },
});
