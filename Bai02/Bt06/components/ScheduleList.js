import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const schedules = {
  0: [
    {
      subject: 'Lập trình React Native',
      room: 'A101',
      time: '07:00 - 09:30',
      teacher: 'Nguyễn Văn An',
      color: '#2563EB'
    },
    {
      subject: 'Cơ sở dữ liệu',
      room: 'B203',
      time: '13:00 - 15:30',
      teacher: 'Trần Thị Lan',
      color: '#16A34A'
    }
  ],
  1: [
    {
      subject: 'Lập trình JavaScript',
      room: 'A102',
      time: '07:00 - 09:30',
      teacher: 'Lê Văn Bình',
      color: '#EA580C'
    }
  ],
  2: [
    {
      subject: 'Thiết kế giao diện',
      room: 'C201',
      time: '09:00 - 11:30',
      teacher: 'Phạm Thị Mai',
      color: '#9333EA'
    }
  ],
  3: [
    {
      subject: 'Lập trình Node.js',
      room: 'A103',
      time: '07:00 - 09:30',
      teacher: 'Nguyễn Văn An',
      color: '#0891B2'
    }
  ],
  4: [
    {
      subject: 'Phát triển ứng dụng',
      room: 'B202',
      time: '13:00 - 15:30',
      teacher: 'Trần Thị Lan',
      color: '#DB2777'
    }
  ],
  5: [
    {
      subject: 'Thực hành dự án',
      room: 'Lab 01',
      time: '07:00 - 10:00',
      teacher: 'Lê Văn Bình',
      color: '#16A34A'
    }
  ],
  6: []
};

const dayNames = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'];

export default function ScheduleList({ selectedDay }) {
  const list = schedules[selectedDay];

  return (
    <View>
      <Text style={styles.heading}>{dayNames[selectedDay]}</Text>

      {list.length === 0 ? (
        <Text style={styles.empty}>Hôm nay không có lịch học 🎉</Text>
      ) : (
        list.map((item, index) => (
          <View
            key={index}
            style={[styles.card, { borderLeftColor: item.color }]}
          >
            <Text style={styles.subject}>{item.subject}</Text>
            <Text style={styles.info}>🕒 {item.time}</Text>
            <Text style={styles.info}>📍 Phòng: {item.room}</Text>
            <Text style={styles.info}>👨‍🏫 Giảng viên: {item.teacher}</Text>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1E293B'
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 13,
    borderLeftWidth: 5
  },
  subject: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1E293B'
  },
  info: {
    color: '#475569',
    marginTop: 4
  },
  empty: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 12,
    textAlign: 'center',
    color: '#64748B',
    fontSize: 16
  }
});