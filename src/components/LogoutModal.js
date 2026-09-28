import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../theme';

export function LogoutModal({ visible, onCancel, onConfirm }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>
            Deseja sair do{' '}
            <Text style={{ color: theme.colors.white }}>Game</Text>
            <Text style={{ color: theme.colors.primary }}>Play</Text>?
          </Text>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.noButton} onPress={onCancel}>
              <Text style={styles.noText}>Não</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.yesButton} onPress={onConfirm}>
              <Text style={styles.yesText}>Sim</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: theme.colors.overlay,
    padding: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: theme.colors.heading,
  },
  buttons: { flexDirection: 'row' },
  noButton: {
    flex: 1,
    height: 56,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.colors.navyLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  noText: {
    fontWeight: '600',
    color: theme.colors.heading,
    fontSize: 16,
  },
  yesButton: {
    flex: 1,
    height: 56,
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  yesText: {
    fontWeight: '600',
    color: theme.colors.white,
    fontSize: 16,
  },
});
