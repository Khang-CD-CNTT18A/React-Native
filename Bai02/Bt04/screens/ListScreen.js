
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const courses = [
  { id: '1', name: 'React Native', description: 'Học lập trình ứng dụng di động.' },
  { id: '2', name: 'JavaScript', description: 'Học ngôn ngữ JavaScript cơ bản.' },
  { id: '3', name: 'Node.js', description: 'Lập trình backend với Node.js.' },
  { id: '4', name: 'HTML & CSS', description: 'Thiết kế giao diện website.' },
  { id: '5', name: 'Database', description: 'Tìm hiểu cơ sở dữ liệu.' },
  { id: '6', name: 'Python', description: 'Lập trình Python cơ bản.' }
];

export default function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DANH SÁCH KHÓA HỌC</Text>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { course: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text>Xem chi tiết →</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F5F8FC'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 15
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  }
});
