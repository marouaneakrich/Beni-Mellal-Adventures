import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ChevronLeft, Navigation, MapPin } from 'lucide-react-native';
import useStore from '../store/useStore';

// Default coordinates for Beni Mellal attractions
const ATTRACTION_COORDINATES = {
  '1': { latitude: 32.0833, longitude: -6.7333, name: 'Ouzoud Waterfalls' },
  '2': { latitude: 32.3394, longitude: -6.3655, name: 'Ain Asserdoun' },
  '3': { latitude: 32.0833, longitude: -6.5000, name: 'Bin El Ouidane Lake' },
  '4': { latitude: 32.3394, longitude: -6.3655, name: 'Kasbah Ras El Ain' },
  '5': { latitude: 33.5228, longitude: -5.1107, name: 'Ifrane National Park' },
  '6': { latitude: 32.3394, longitude: -6.3655, name: 'Beni Mellal Souk' },
};

export default function MapScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { attractions } = useStore();

  const item = attractions.find((a) => String(a.id) === String(id));
  const coordinates = ATTRACTION_COORDINATES[id] || { latitude: 32.3394, longitude: -6.3655 };

  const openGoogleMaps = () => {
    const latLng = `${coordinates.latitude},${coordinates.longitude}`;
    const label = item ? encodeURIComponent(item.name) : 'Attraction';
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latLng}&query_place_id=${label}`;
    window.open(googleMapsUrl, '_blank');
  };

  if (!item) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Attraction not found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#f9fafb' }}>
      <StatusBar barStyle="dark-content" />
      
      {/* Main Content */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <MapPin size={48} color="#f97316" />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 16, marginBottom: 8, textAlign: 'center', color: '#1f2937' }}>
          {item.name}
        </Text>
        <Text style={{ color: '#6b7280', marginBottom: 24, textAlign: 'center' }}>
          {`${coordinates.latitude.toFixed(4)}, ${coordinates.longitude.toFixed(4)}`}
        </Text>
        <TouchableOpacity
          onPress={openGoogleMaps}
          style={{
            backgroundColor: '#f97316',
            paddingHorizontal: 24,
            paddingVertical: 12,
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Navigation size={20} color="#fff" />
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
            View in Google Maps
          </Text>
        </TouchableOpacity>
      </View>

      {/* Back Button */}
      <SafeAreaView style={{ position: 'absolute', top: 0, left: 0 }}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            marginLeft: 20,
            marginTop: 10,
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: 8,
            elevation: 4,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
          }}
        >
          <ChevronLeft size={24} color="#1f2937" />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}