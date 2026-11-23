
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const times = ['08:00', '09:00', '10:00', '13:00', '14:00', '15:00'];

export default function TimeSlot({ selectedTime, onSelect }) {
  return (
    <View style={styles.container}>
      {times.map((time) => (
        <Pressable
          key={time}
          style={[
            styles.item,
            selectedTime === time && styles.active
          ]}
          onPress={() => onSelect(time)}
        >
          <Text style={[
            styles.text,
            selectedTime === time && styles.activeText
          ]}>
            {time}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  item: {
    width: '30%',
    padding: 13,
    borderRadius: 9,
    backgroundColor: '#1C1D22',
    alignItems: 'center'
  },
  active: { backgroundColor: '#D4AF37' },
  text: { color: 'white', fontWeight: 'bold' },
  activeText: { color: '#101114' }
});
