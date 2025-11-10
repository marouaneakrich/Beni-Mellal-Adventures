import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    RefreshControl,
    TouchableOpacity,
    TextInput,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Search } from 'lucide-react-native';
import useStore from '../store/useStore';
import { fetchAttractions } from '../services/api';
import AttractionCard from '../components/AttractionCard';

export default function HomeScreen() {
    const router = useRouter();
    const { attractions, loading, setAttractions, setLoading, setError, error, loadFavorites } = useStore();
    const [refreshing, setRefreshing] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const loadData = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchAttractions();
            setAttractions(data);
        } catch (err) {
            setError('Failed to load attractions. Please check your internet connection.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
        loadFavorites();
    }, []);

    const onRefresh = async () => {
        setRefreshing(true);
        await loadData();
        setRefreshing(false);
    };

    const filteredAttractions = attractions.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading && !refreshing) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                <ActivityIndicator size="large" color="#f97316" />
                <Text style={{ marginTop: 16, color: '#6b7280', fontSize: 16 }}>Loading attractions...</Text>
            </View>
        );
    }

    if (error && !attractions.length) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9fafb', padding: 20 }}>
                <Text style={{ fontSize: 40, marginBottom: 16 }}>📡</Text>
                <Text style={{ color: '#ef4444', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
                    Oops! Something went wrong
                </Text>
                <Text style={{ color: '#6b7280', textAlign: 'center', marginBottom: 20 }}>
                    {error}
                </Text>
                <TouchableOpacity
                    onPress={loadData}
                    style={{
                        backgroundColor: '#f97316',
                        paddingHorizontal: 24,
                        paddingVertical: 12,
                        borderRadius: 12,
                    }}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Try Again</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#f9fafb' }}>
            <StatusBar barStyle="dark-content" />

            {/* Header */}
            <SafeAreaView>
                <Animated.View
                    entering={FadeIn}
                    style={{
                        backgroundColor: '#fff',
                        paddingTop: 20,
                        paddingBottom: 20,
                        paddingHorizontal: 20,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        elevation: 4,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 8,
                    }}
                >
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#1f2937', marginBottom: 8 }}>
                        Beni Mellal Adventures
                    </Text>
                    <Text style={{ fontSize: 14, color: '#6b7280', marginBottom: 16 }}>
                        Discover the beauty of Morocco 🇲🇦
                    </Text>

                    {/* Search Bar */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#f3f4f6',
                            borderRadius: 12,
                            paddingHorizontal: 12,
                            paddingVertical: 12,
                        }}
                    >
                        <Search size={20} color="#9ca3af" />
                        <TextInput
                            placeholder="Search attractions..."
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            style={{ flex: 1, marginLeft: 8, fontSize: 16, color: '#1f2937' }}
                            placeholderTextColor="#9ca3af"
                        />
                    </View>
                </Animated.View>
            </SafeAreaView>

            {/* Attractions List */}
            <FlatList
                data={filteredAttractions}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 20 }}
                renderItem={({ item, index }) => (
                    <AttractionCard
                        item={item}
                        index={index}
                        onPress={() => router.push({ pathname: '/details', params: { id: item.id } })}
                    />
                )}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#f97316']} />}
                ListEmptyComponent={
                    <View style={{ alignItems: 'center', marginTop: 40 }}>
                        <Text style={{ fontSize: 40, marginBottom: 8 }}>🔍</Text>
                        <Text style={{ color: '#6b7280', fontSize: 16 }}>No attractions found</Text>
                    </View>
                }
            />
        </View>
    );
}