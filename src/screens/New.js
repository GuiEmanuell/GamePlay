import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, KeyboardAvoidingView,
  Platform, Alert, StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Background } from '../components/Background';
import { CategorySelect } from '../components/CategorySelect';
import { GuildBanner } from '../components/GuildBanner';
import { SmallInput } from '../components/SmallInput';
import { TextArea } from '../components/TextArea';
import { Button } from '../components/Button';
import theme from '../theme';


const mockGuild = {
  name: 'Valorosos',
  game: 'Valorant',
  bannerUrl: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/d0db663bf28844dcbd744935cdd8c71083e0031c-5600x3150.jpg',
};

export function New({ navigation }) {
  const [category, setCategory] = useState('');
  const [guild, setGuild] = useState(null);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  function handleSelectGuild() {
    setGuild(guild ? null : mockGuild);
  }

  function handleSave() {
    if (!category) return Alert.alert('Ops', 'Selecione a categoria do jogo.');
    if (!guild) return Alert.alert('Ops', 'Selecione um servidor.');
    if (!day || !month || !hour || !minute) {
      return Alert.alert('Ops', 'Preencha data e hora corretamente.');
    }
    if (description.length === 0) {
      return Alert.alert('Ops', 'Descreva os detalhes da partida.');
    }

    Alert.alert('Sucesso!', 'Convocação criada com sucesso.');
    navigation.goBack();
  }

  return (
    <Background>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Agendar partida</Text>
        <View style={{ width: 24 }} />
      </View>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          <Text style={styles.label}>Categoria</Text>
          <CategorySelect selected={category} setSelected={setCategory} selectable />

          <View style={styles.form}>
            <TouchableOpacity style={styles.guildSelect} onPress={handleSelectGuild}>
              {guild ? (
                <>
                  <GuildBanner uri={guild.bannerUrl} size={48} />
                  <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.guildName}>{guild.name}</Text>
                    <Text style={styles.guildGame}>{guild.game}</Text>
                  </View>
                </>
              ) : (
                <Text style={styles.placeholder}>Selecione um servidor</Text>
              )}
              <Ionicons name="chevron-forward" size={20} color={theme.colors.heading} />
            </TouchableOpacity>

            <View style={styles.fieldGroup}>
              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Dia e mês</Text>
                <View style={styles.row}>
                  <SmallInput maxLength={2} onChangeText={setDay} placeholder="00" />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} onChangeText={setMonth} placeholder="00" />
                </View>
              </View>

              <View style={{ flex: 1, marginLeft: 8 }}>
                <Text style={styles.label}>Horário</Text>
                <View style={styles.row}>
                  <SmallInput maxLength={2} onChangeText={setHour} placeholder="00" />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} onChangeText={setMinute} placeholder="00" />
                </View>
              </View>
            </View>

            <View style={styles.descHeader}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.caption}>Max 100 caracteres</Text>
            </View>
            <TextArea
              maxLength={100}
              onChangeText={setDescription}
              placeholder="Detalhes sobre a partida"
            />

            <View style={{ marginTop: 24 }}>
              <Button title="Agendar" onPress={handleSave} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  label: {
    fontWeight: '600',
    color: theme.colors.standard,
    fontSize: 15,
    paddingHorizontal: 24,
    marginBottom: 8,
    marginTop: 16,
  },
  caption: {
    color: theme.colors.caption,
    fontSize: 12,
  },
  form: { paddingHorizontal: 24, marginTop: 16 },
  guildSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.navy,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.colors.navyLight,
    padding: 12,
    minHeight: 72,
  },
  guildName: {
    fontWeight: '600',
    color: theme.colors.heading,
    fontSize: 16,
  },
  guildGame: {
    color: theme.colors.caption,
    fontSize: 12,
  },
  placeholder: {
    flex: 1,
    fontWeight: '600',
    color: theme.colors.caption,
    fontSize: 15,
  },
  fieldGroup: { flexDirection: 'row', marginTop: 8 },
  descHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 16,
    marginBottom: 8,
    alignItems: 'flex-end',
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  divider: { color: theme.colors.heading, fontSize: 20, marginHorizontal: 6 },
});
