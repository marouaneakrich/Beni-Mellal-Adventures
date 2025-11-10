import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { ChevronLeft, Clock, Users, MapPin, Map } from 'lucide-react-native';
import useStore from '../store/useStore';
import HeartButton from '../components/HeartButton';

export default function DetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { attractions, isFavorite, addFavorite, removeFavorite } = useStore();

  const item = attractions.find((a) => a.id === id);
  
  if (!item) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Attraction not found</Text>
      </View>
    );
  }

  const isFav = isFavorite(item.id);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="light-content" />

      <View style={{ position: 'relative' }}>
        <Image source={{ uri: item.image }} style={{ width: '100%', height: 400 }} resizeMode="cover" />

        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
        />

        <SafeAreaView style={{ position: 'absolute', top: 0, left: 0 }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              marginLeft: 20,
              marginTop: 10,
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: 20,
              padding: 8,
            }}
          >
            <ChevronLeft size={24} color="#fff" />
          </TouchableOpacity>
        </SafeAreaView>

        <SafeAreaView style={{ position: 'absolute', top: 0, right: 0 }}>
          <View style={{ marginRight: 20, marginTop: 10, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 20 }}>
            <HeartButton
              isFavorite={isFav}
              onPress={() => (isFav ? removeFavorite(item.id) : addFavorite(item.id))}
              size={28}
            />
          </View>
        </SafeAreaView>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 24 }}>
          <Animated.Text
            entering={FadeInDown.delay(100)}
            style={{ fontSize: 28, fontWeight: 'bold', color: '#1f2937', marginBottom: 12 }}
          >
            {item.name}
          </Animated.Text>

          <Animated.View
            entering={FadeInDown.delay(200)}
            style={{
              flexDirection: 'row',
              gap: 20,
              marginBottom: 24,
              paddingBottom: 24,
              borderBottomWidth: 1,
              borderBottomColor: '#e5e7eb',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Clock size={18} color="#f97316" />
              <Text style={{ color: '#6b7280' }}>2-3 hours</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Users size={18} color="#f97316" />
              <Text style={{ color: '#6b7280' }}>All ages</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <MapPin size={18} color="#f97316" />
              <Text style={{ color: '#6b7280' }}>Beni Mellal</Text>
            </View>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(300)}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1f2937', marginBottom: 12 }}>
              About
            </Text>
            <Text style={{ fontSize: 16, color: '#6b7280', lineHeight: 24, marginBottom: 24 }}>
              {item.description}
            </Text>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(400)} style={{ gap: 12 }}>
            <TouchableOpacity
              onPress={() => router.push({ pathname: '/gallery', params: { id: item.id } })}
              style={{
                backgroundColor: '#f97316',
                paddingVertical: 16,
                borderRadius: 16,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>📸 View Photo Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push({ pathname: '/map', params: { id: item.id } })}
              style={{
                backgroundColor: '#10b981',
                paddingVertical: 16,
                borderRadius: 16,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 8,
                marginBottom: 20,
              }}
            >
              <Map size={20} color="#fff" />
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>View Location</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ScrollView>
    </View>
  );
}