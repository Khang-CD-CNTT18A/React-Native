
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TravelHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.small}>KHÁM PHÁ VIỆT NAM</Text>
      <Text style={styles.title}>Đi để trải nghiệm 🌍</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#168AAD',
    padding: 20,
    borderRadius: 12,
  },
  small: { color: '#D9F3FF', fontSize: 12 },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
