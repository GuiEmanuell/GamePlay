import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Background } from '../components/Background';
import { Avatar } from '../components/Avatar';
import { CategorySelect } from '../components/CategorySelect';
import { Appointment } from '../components/Appointment';
import { ListEmpty } from '../components/ListEmpty';
import { ButtonIcon } from '../components/ButtonIcon';
import { LogoutModal } from '../components/LogoutModal';
import theme from '../theme';

const user = {
  name: 'Alan',
  avatarUrl: 'https://i.pinimg.com/474x/b6/a3/84/b6a384e5e46e992ea13a88efbfe2ec11.jpg',
};

const appointmentsMock = [
  { id: '1', guildName: 'Lendários', bannerUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZfX2q_r0LFXy2LKvfi4A4GET5BbFTzLaZaRnGMgFrg&s', categoryId: '1', category: 'Ranqueada', date: '18/06 às 21:00h', role: 'Anfitrião' },
  { id: '2', guildName: 'Yeah, boy', bannerUrl: 'https://thumb.wikimedia.org/wikipedia/pt/thumb/e/e7/Red_Dead_Redemption_2.png/330px-Red_Dead_Redemption_2.png?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail', categoryId: '3', category: 'Diversão', date: '23/06 às 19:00h', role: 'Visitante' },
  { id: '3', guildName: 'Rumo ao topo', bannerUrl: 'https://images.seeklogo.com/logo-png/27/1/counter-strike-global-offensive-logo-png_seeklogo-273411.png', categoryId: '2', category: 'Duelo 1x1', date: '20/06 às 09:00h', role: 'Anfitrião' },
  { id: '4', guildName: 'Bora queimar tudo', bannerUrl: 'https://t.ctcdn.com.br/_OBSUxTxHL9HKC_vjTjSgghbaIc=/768x432/smart/i344574.png', categoryId: '1', category: 'Ranqueada', date: '20/06 às 14:20h', role: 'Anfitrião' },
  { id: '5', guildName: 'Valorosos', bannerUrl: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/d0db663bf28844dcbd744935cdd8c71083e0031c-5600x3150.jpg', categoryId: '3', category: 'Diversão', date: '24/06 às 21:00h', role: 'Anfitrião' },
];

export function Home({ navigation }) {
  const [category, setCategory] = useState('');
  const [logoutVisible, setLogoutVisible] = useState(false);

  const appointments = category
    ? appointmentsMock.filter((item) => item.categoryId === category)
    : appointmentsMock;

  return (
    <Background>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity style={styles.profile} onPress={() => setLogoutVisible(true)}>
          <Avatar uri={user.avatarUrl} size={56} />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.greeting}>
              Olá, <Text style={styles.name}>{user.name}</Text>
            </Text>
            <Text style={styles.subtitle}>Hoje é dia de vitória</Text>
          </View>
        </TouchableOpacity>

        <ButtonIcon icon="add" onPress={() => navigation.navigate('New')} />
      </View>

      <View style={{ marginTop: 32 }}>
        <CategorySelect selected={category} setSelected={setCategory} />
      </View>

      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Partidas agendadas</Text>
        <Text style={styles.listTotal}>Total {appointments.length}</Text>
      </View>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 40, flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <ListEmpty title="Não há convocações" />}
        renderItem={({ item }) => (
          <Appointment
            data={item}
            onPress={() => navigation.navigate('AppointmentDetails', { appointment: item })}
          />
        )}
      />

      <LogoutModal
        visible={logoutVisible}
        onCancel={() => setLogoutVisible(false)}
        onConfirm={() => {
          setLogoutVisible(false);
          navigation.replace('SignIn');
        }}
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 55,
  },
  profile: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  greeting: {
    color: theme.colors.standard,
    fontSize: 20,
  },
  name: {
    fontWeight: '700',
    color: theme.colors.heading,
  },
  subtitle: {
    color: theme.colors.caption,
    fontSize: 14,
    marginTop: 2,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 32,
    marginBottom: 16,
  },
  listTitle: {
    fontWeight: '600',
    color: theme.colors.heading,
    fontSize: 18,
  },
  listTotal: {
    color: theme.colors.caption,
    fontSize: 14,
  },
  list: { paddingHorizontal: 24 },
});
