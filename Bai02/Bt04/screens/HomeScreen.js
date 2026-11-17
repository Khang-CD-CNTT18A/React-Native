
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MULTISCREEN APP</Text>
      <Text style={styles.text}>Chào mừng bạn đến với ứng dụng học tập!</Text>
      <Button
        title="Xem khóa học"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EAF3FF'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    marginBottom: 25
  }
});
