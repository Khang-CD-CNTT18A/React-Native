
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function FavoriteCard({ item }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>📍 {item.location}</Text>
        <Text style={styles.favorite}>❤️ Yêu thích</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  image: { width: 110, height: 110 },
  info: { flex: 1, padding: 12, justifyContent: 'center' },
  name: { fontSize: 17, fontWeight: 'bold' },
  favorite: { color: 'red', marginTop: 8 },
});
