
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { course } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.name}</Text>
      <Text style={styles.text}>{course.description}</Text>

      <Button
        title="Quay lại danh sách"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#EAF3FF'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 20
  },
  text: {
    fontSize: 17,
    marginBottom: 25,
    textAlign: 'center'
  }
});
