
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const categories = ['Tất cả', 'Biển', 'Núi', 'Thành phố'];

export default function CategoryList() {
  return (
    <View style={styles.container}>
      {categories.map((item) => (
        <View key={item} style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 15,
  },
  item: {
    backgroundColor: '#D9F3FF',
    padding: 10,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  text: { color: '#168AAD' },
});
