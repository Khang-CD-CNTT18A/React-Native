import React from 'react';
import { View, Text } from 'react-native';

export default function StatCard({ title, number }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#DBEAFE', padding: 15, borderRadius: 10 }}>
      <Text>{title}</Text>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2563EB' }}>
        {number}
      </Text>
    </View>
  );
}