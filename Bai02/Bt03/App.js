
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductCard from './components/ProductCard';

const products = [
  {
    id: '1',
    name: 'Điện thoại Samsung',
    price: '5.500.000đ',
    description: 'Điện thoại màn hình đẹp, pin bền.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600',
  },
  {
    id: '2',
    name: 'Laptop Dell',
    price: '15.000.000đ',
    description: 'Laptop phục vụ học tập và làm việc.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
  },
  {
    id: '3',
    name: 'Tai nghe',
    price: '850.000đ',
    description: 'Âm thanh rõ, thiết kế gọn nhẹ.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
  },
  {
    id: '4',
    name: 'Đồng hồ thông minh',
    price: '2.000.000đ',
    description: 'Theo dõi hoạt động và thời gian.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
  },
  {
    id: '5',
    name: 'Máy ảnh',
    price: '8.500.000đ',
    description: 'Chụp ảnh sắc nét, dễ sử dụng.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600',
  },
  {
    id: '6',
    name: 'Loa Bluetooth',
    price: '1.200.000đ',
    description: 'Loa nhỏ gọn, âm thanh sống động.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PRODUCT APP</Text>
      <Text style={styles.subtitle}>Cửa hàng thiết bị công nghệ</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    paddingTop: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2563EB',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    margin: 10,
    color: '#666',
  },
});
