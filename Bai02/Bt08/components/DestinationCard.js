
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DestinationCard({ item }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>📍 {item.location}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  image: { width: '100%', height: 170 },
  info: { padding: 12 },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#183B56',
  },
  description: { color: '#666', marginTop: 5 },
});
