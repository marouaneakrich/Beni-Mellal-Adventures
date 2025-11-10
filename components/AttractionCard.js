import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { MapPin } from 'lucide-react-native';
import HeartButton from './HeartButton';
import useStore from '../store/useStore';

const AttractionCard = ({ item, index, onPress }) => {
  const { isFavorite, addFavorite, removeFavorite } = useStore();
  const isFav = isFavorite(item.id);

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100).springify()}
      style={{ marginBottom: 20 }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#fff',
          borderRadius: 20,
          overflow: 'hidden',
          elevation: 4,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        }}
      >
        <View style={{ position: 'relative' }}>
          <Image
            source={{ uri: item.image }}
            style={{ width: '100%', height: 200 }}
            resizeMode="cover"
          />
          <View
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              backgroundColor: 'rgba(0,0,0,0.3)',
              borderRadius: 20,
              padding: 4,
            }}
          >
            <HeartButton
              isFavorite={isFav}
              onPress={() => (isFav ? removeFavorite(item.id) : addFavorite(item.id))}
            />
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#1f2937', marginBottom: 8 }}>
            {item.name}
          </Text>
          <Text style={{ fontSize: 14, color: '#6b7280', marginBottom: 12 }} numberOfLines={2}>
            {item.description}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <MapPin size={16} color="#f97316" />
            <Text style={{ fontSize: 12, color: '#f97316', fontWeight: '600' }}>
              Beni Mellal
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default AttractionCard;