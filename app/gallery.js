import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView, StatusBar } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { X } from 'lucide-react-native';
import useStore from '../store/useStore';

const { width, height } = Dimensions.get('window');

export default function GalleryScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { attractions } = useStore();

  const item = attractions.find((a) => a.id === id);
  if (!item) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useSharedValue(0);

  const images = item.gallery || [item.image, item.image, item.image];

  const gesture = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = e.translationX;
    })
    .onEnd((e) => {
      const threshold = width * 0.3;

      if (e.translationX < -threshold && currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (e.translationX > threshold && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }

      translateX.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar barStyle="light-content" />

      {/* Close Button */}
      <SafeAreaView style={{ position: 'absolute', top: 0, right: 0, zIndex: 10 }}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            marginRight: 20,
            marginTop: 10,
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: 20,
            padding: 8,
          }}
        >
          <X size={24} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>

      {/* Image Counter */}
      <SafeAreaView style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
        <View
          style={{
            marginLeft: 20,
            marginTop: 10,
            backgroundColor: 'rgba(0,0,0,0.7)',
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>
            {currentIndex + 1} / {images.length}
          </Text>
        </View>
      </SafeAreaView>

      {/* Image Display */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[{ width: width, height: height * 0.7 }, animatedStyle]}>
            <Image source={{ uri: images[currentIndex] }} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
          </Animated.View>
        </GestureDetector>
      </View>

      {/* Pagination Dots */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 40,
          gap: 8,
        }}
      >
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: index === currentIndex ? 24 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: index === currentIndex ? '#f97316' : '#6b7280',
            }}
          />
        ))}
      </View>
    </View>
  );
}