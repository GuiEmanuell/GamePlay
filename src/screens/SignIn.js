import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Background } from '../components/Background';
import { Button } from '../components/Button';
import theme from '../theme';

export function SignIn({ navigation }) {
  function handleSignIn() {
    navigation.replace('Home');
  }

  return (
    <Background>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/shape.png')}
          style={styles.shape}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/lol.png')}
          style={styles.fighter}
          resizeMode="cover"
        />

        
        <LinearGradient
          colors={['transparent', theme.colors.background]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.fade}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}e organize suas jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games favoritos com seus amigos
        </Text>

        <View style={styles.footer}>
          <Button title="Entrar com Discord" showDiscordIcon onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 500,
  },
  shape: {
    position: 'absolute',
    top: 40,
    right: 0,
    width: 400,
    height: 400,
    opacity: 0.9,
  },
  fighter: {
    width: '100%',
    height: '100%',
  },
  fade: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 160,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: -40,
  },
  title: {
    fontWeight: '700',
    color: theme.colors.heading,
    fontSize: 28,
    textAlign: 'center',
  },
  subtitle: {
    color: theme.colors.standard,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 12,
  },
  footer: {
    width: '100%',
    marginTop: 40,
  },
});