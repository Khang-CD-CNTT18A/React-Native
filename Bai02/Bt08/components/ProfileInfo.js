
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.avatar}>👤</Text>
      <Text style={styles.name}>Lâm Minh Khang</Text>
      <Text style={styles.email}>traveller@example.com</Text>
      <Text style={styles.item}>🌍 Sở thích: Du lịch khám phá</Text>
      <Text style={styles.item}>📍 Địa điểm yêu thích: Việt Nam</Text>
      <Text style={styles.item}>✈️ Chuyến đi đã lưu: 6</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  avatar: { fontSize: 60 },
  name: { fontSize: 22, fontWeight: 'bold', marginTop: 10 },
  email: { color: '#777', marginVertical: 8 },
  item: { padding: 10, fontSize: 15 },
});
