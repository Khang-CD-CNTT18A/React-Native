import React from 'react';
import { View, Text } from 'react-native';

export default function BottomMenu() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 18, backgroundColor: '#2563EB' }}>
      <Text style={{ color: 'white' }}>Home</Text>
      <Text style={{ color: 'white' }}>Khóa học</Text>
      <Text style={{ color: 'white' }}>Cá nhân</Text>
    </View>
  );
}