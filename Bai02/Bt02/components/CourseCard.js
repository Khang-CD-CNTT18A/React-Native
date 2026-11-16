import React from 'react';
import { View, Text } from 'react-native';

export default function CourseCard({ name, teacher }) {
  return (
    <View style={{ backgroundColor: 'white', padding: 15, marginBottom: 10, borderRadius: 10 }}>
      <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{name}</Text>
      <Text>Giảng viên: {teacher}</Text>
    </View>
  );
}