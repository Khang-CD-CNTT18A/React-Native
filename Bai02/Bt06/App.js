import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Header from './components/Header';
import WeekDays from './components/WeekDays';
import ScheduleList from './components/ScheduleList';

export default function App() {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <Header />

      <Text style={styles.label}>Chọn ngày học</Text>

      <WeekDays
        selectedDay={selectedDay}
        onSelect={setSelectedDay}
      />

      <ScheduleList selectedDay={selectedDay} />

      <Text style={styles.footer}>ScheduleApp - Thời khóa biểu của tôi</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF6FF',
    padding: 18,
    paddingTop: 45
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 12
  },
  footer: {
    textAlign: 'center',
    color: '#64748B',
    marginVertical: 25
  }
});