import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStore = create((set, get) => ({
  attractions: [],
  loading: false,
  error: null,
  favorites: [],

  // Load attractions from API
  setAttractions: (data) => set({ attractions: data }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  // Favorites management
  loadFavorites: async () => {
    try {
      const saved = await AsyncStorage.getItem('favorites');
      if (saved) {
        set({ favorites: JSON.parse(saved) });
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  },

  addFavorite: async (id) => {
    const { favorites } = get();
    if (!favorites.includes(id)) {
      const newFavorites = [...favorites, id];
      set({ favorites: newFavorites });
      await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  },

  removeFavorite: async (id) => {
    const { favorites } = get();
    const newFavorites = favorites.filter(f => f !== id);
    set({ favorites: newFavorites });
    await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
  },

  isFavorite: (id) => {
    const { favorites } = get();
    return favorites.includes(id);
  },
}));

export default useStore;