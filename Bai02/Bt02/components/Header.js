import React from 'react';
import { View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={{ backgroundColor: '#2563EB', padding: 20 }}>
      <Text style={{ color: 'white' }}>Xin chào!</Text>
      <Text style={{ color: 'white', fontSize: 23, fontWeight: 'bold' }}>
        Nguyễn Văn A
      </Text>
      <Text style={{ color: 'white' }}>Sinh viên CNTT18A</Text>
    </View>
  );
}