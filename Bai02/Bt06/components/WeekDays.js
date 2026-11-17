import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const days = [
  { id: 0, name: 'T2' },
  { id: 1, name: 'T3' },
  { id: 2, name: 'T4' },
  { id: 3, name: 'T5' },
  { id: 4, name: 'T6' },
  { id: 5, name: 'T7' },
  { id: 6, name: 'CN' }
];

export default function WeekDays({ selectedDay, onSelect }) {
  return (
    <View style={styles.container}>
      {days.map(day => (
        <TouchableOpacity
          key={day.id}
          style={[
            styles.day,
            selectedDay === day.id && styles.active
          ]}
          onPress={() => onSelect(day.id)}
        >
          <Text style={[
            styles.text,
            selectedDay === day.id && styles.activeText
          ]}>
            {day.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22
  },
  day: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  active: {
    backgroundColor: '#2563EB'
  },
  text: {
    color: '#333',
    fontWeight: 'bold'
  },
  activeText: {
    color: 'white'
  }
});