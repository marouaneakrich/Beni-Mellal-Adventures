import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MapPin, Navigation } from 'lucide-react-native';

export default function MapFallback({ coordinates, placeName, onOpenMaps }) {
  return (
    <View style={styles.container}>
      <MapPin size={48} color="#f97316" />
      <Text style={styles.title}>
        {placeName}
      </Text>
      <Text style={styles.coordinates}>
        {`${coordinates.latitude.toFixed(4)}, ${coordinates.longitude.toFixed(4)}`}
      </Text>
      <TouchableOpacity
        onPress={onOpenMaps}
        style={styles.button}
      >
        <Navigation size={20} color="#fff" />
        <Text style={styles.buttonText}>
          Open in Google Maps
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9fafb',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
    color: '#1f2937',
  },
  coordinates: {
    color: '#6b7280',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f97316',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});