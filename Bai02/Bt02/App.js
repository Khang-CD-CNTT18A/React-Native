import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Header from './components/Header';
import StatCard from './components/StatCard';
import CourseCard from './components/CourseCard';
import BottomMenu from './components/BottomMenu';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F1F5F9' }}>
      <ScrollView>
        <Header />

        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 15 }}>
          Thống kê khóa học
        </Text>

        <View style={{ flexDirection: 'row', gap: 10, marginHorizontal: 15 }}>
          <StatCard title="Tổng khóa học" number="06" />
          <StatCard title="Đã hoàn thành" number="03" />
        </View>

        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 15 }}>
          Môn học của tôi
        </Text>

        <View style={{ marginHorizontal: 15 }}>
          <CourseCard name="React Native" teacher="Nguyễn Văn B" />
          <CourseCard name="Cơ sở dữ liệu" teacher="Trần Văn C" />
          <CourseCard name="JavaScript" teacher="Lê Văn D" />
        </View>
      </ScrollView>

      <BottomMenu />
    </View>
  );
}