
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import TravelHeader from './components/TravelHeader';
import DestinationCard from './components/DestinationCard';
import CategoryList from './components/CategoryList';
import FavoriteCard from './components/FavoriteCard';
import ProfileInfo from './components/ProfileInfo';

const destinations = [
  {
    id: '1',
    name: 'Vịnh Hạ Long',
    location: 'Quảng Ninh',
    category: 'Biển',
    description: 'Di sản thiên nhiên thế giới nổi tiếng.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800',
  },
  {
    id: '2',
    name: 'Đà Lạt',
    location: 'Lâm Đồng',
    category: 'Núi',
    description: 'Thành phố ngàn hoa thơ mộng.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
  },
  {
    id: '3',
    name: 'Phú Quốc',
    location: 'Kiên Giang',
    category: 'Biển',
    description: 'Hòn đảo xinh đẹp với biển xanh.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800',
  },
  {
    id: '4',
    name: 'Đà Nẵng',
    location: 'Đà Nẵng',
    category: 'Thành phố',
    description: 'Thành phố đáng sống bên bờ biển.',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800',
  },
  {
    id: '5',
    name: 'Nha Trang',
    location: 'Khánh Hòa',
    category: 'Biển',
    description: 'Thiên đường du lịch biển Việt Nam.',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800',
  },
  {
    id: '6',
    name: 'Sa Pa',
    location: 'Lào Cai',
    category: 'Núi',
    description: 'Vùng núi với ruộng bậc thang tuyệt đẹp.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
  },
];

export default function App() {
  const [page, setPage] = useState('home');
  const [favorites, setFavorites] = useState([]);
  const [category, setCategory] = useState('Tất cả');

  const filteredDestinations = destinations.filter(item =>
    category === 'Tất cả' || item.category === category
  );

  const toggleFavorite = (item) => {
    const exists = favorites.some(fav => fav.id === item.id);

    if (exists) {
      setFavorites(favorites.filter(fav => fav.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const renderHome = () => (
    <ScrollView style={styles.content}>
      <TravelHeader />

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Khám phá thế giới</Text>
        <Text style={styles.bannerText}>
          Lưu giữ những hành trình đáng nhớ cùng chúng tôi.
        </Text>
      </View>

      <Text style={styles.heading}>Danh mục địa điểm</Text>

      <CategoryList
        selected={category}
        onSelect={setCategory}
      />

      <Text style={styles.heading}>Địa điểm nổi bật</Text>

      {filteredDestinations.map(item => (
        <View key={item.id}>
          <DestinationCard item={item} />

          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => toggleFavorite(item)}
          >
            <Text style={styles.favoriteText}>
              {favorites.some(fav => fav.id === item.id)
                ? '❤️ Đã yêu thích'
                : '🤍 Thêm yêu thích'}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );

  const renderFavorites = () => (
    <ScrollView style={styles.content}>
      <Text style={styles.pageTitle}>❤️ Địa điểm yêu thích</Text>

      {favorites.length === 0 ? (
        <Text style={styles.empty}>
          Bạn chưa có địa điểm yêu thích.
        </Text>
      ) : (
        favorites.map(item => (
          <View key={item.id}>
            <FavoriteCard item={item} />
            <TouchableOpacity
              onPress={() => toggleFavorite(item)}
              style={styles.removeButton}
            >
              <Text style={styles.removeText}>Bỏ yêu thích</Text>
            </TouchableOpacity>
          </View>
        ))
      )}
    </ScrollView>
  );

  const renderProfile = () => (
    <ScrollView style={styles.content}>
      <Text style={styles.pageTitle}>Thông tin cá nhân</Text>
      <ProfileInfo />
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {page === 'home' && renderHome()}
        {page === 'favorites' && renderFavorites()}
        {page === 'profile' && renderProfile()}
      </View>

      <View style={styles.bottomMenu}>
        <TouchableOpacity onPress={() => setPage('home')}>
          <Text style={page === 'home' ? styles.activeMenu : styles.menu}>
            🏠 Trang chủ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPage('favorites')}>
          <Text style={page === 'favorites' ? styles.activeMenu : styles.menu}>
            ❤️ Yêu thích
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPage('profile')}>
          <Text style={page === 'profile' ? styles.activeMenu : styles.menu}>
            👤 Cá nhân
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7FA',
  },
  main: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  banner: {
    backgroundColor: '#168AAD',
    padding: 22,
    borderRadius: 15,
    marginTop: 15,
  },
  bannerTitle: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
  bannerText: {
    color: 'white',
    marginTop: 8,
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#183B56',
    marginTop: 18,
    marginBottom: 10,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#183B56',
    marginVertical: 20,
  },
  favoriteButton: {
    backgroundColor: '#E0F4F7',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: -8,
    marginBottom: 15,
  },
  favoriteText: {
    color: '#168AAD',
    fontWeight: 'bold',
  },
  empty: {
    textAlign: 'center',
    color: '#777',
    marginTop: 50,
  },
  removeButton: {
    padding: 10,
    alignItems: 'center',
    marginTop: -10,
    marginBottom: 12,
  },
  removeText: {
    color: 'red',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  menu: {
    color: '#777',
    fontSize: 13,
  },
  activeMenu: {
    color: '#168AAD',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
