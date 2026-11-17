
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressCard({ progress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Mục tiêu: Học React Native</Text>
      <Text>Tiến độ: {progress}%</Text>

      <View style={styles.bar}>
        <View style={[styles.fill, { width: `${progress}%` }]} />
      </View>

      <Text>{progress / 25} / 4 buổi học</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 15,
    marginBottom: 25
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1976D2'
  },
  bar: {
    height: 12,
    backgroundColor: '#DDD',
    borderRadius: 10,
    marginVertical: 15
  },
  fill: {
    height: 12,
    backgroundColor: '#2196F3',
    borderRadius: 10
  }
});
