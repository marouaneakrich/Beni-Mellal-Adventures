import axios from 'axios';

const API_BASE_URL = 'https://69086a582d902d0651b03223.mockapi.io/api/v1';

export const fetchAttractions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/places`);
    // Normalize API shape: some endpoints return `images` (array) and `thumbnail`.
    // Map those to the app's expected `image` (single URL) and `gallery` (array).
    const normalized = response.data.map((place) => {
      const imagesArr = Array.isArray(place.images) ? place.images : [];
      const image = place.thumbnail || imagesArr[0] || place.image || place.url || '';
      return {
        ...place,
        image,
        gallery: imagesArr,
      };
    });

    return normalized;
  } catch (error) {
    console.error('Error fetching attractions:', error);
    throw error;
  }
};

export const fetchAttractionById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/places/${id}`);
    const place = response.data;
    const imagesArr = Array.isArray(place.images) ? place.images : [];
    const image = place.thumbnail || imagesArr[0] || place.image || place.url || '';
    return {
      ...place,
      image,
      gallery: imagesArr,
    };
  } catch (error) {
    console.error('Error fetching attraction:', error);
    throw error;
  }
};