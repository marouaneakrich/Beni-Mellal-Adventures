# 🏔️ Beni Mellal Adventures

A beautiful React Native mobile application showcasing the stunning attractions of Beni Mellal, Morocco. Built with Expo Router, featuring smooth animations, persistent favorites, and an interactive photo gallery.

![React Native](https://img.shields.io/badge/React_Native-0.81.5-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-~54.0-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📱 Features

- ✅ **3 Beautiful Screens** - Home, Details, and Gallery
- ✅ **Smooth Animations** - Card entrances, heart button effects, gallery swipes
- ✅ **Persistent Favorites** - Save your favorite attractions with AsyncStorage
- ✅ **Interactive Gallery** - Swipeable photo gallery with gesture controls
- ✅ **Real-time Search** - Find attractions quickly
- ✅ **Pull-to-Refresh** - Update data with a simple swipe
- ✅ **API Integration** - Fetch data from MockAPI
- ✅ **Error Handling** - Graceful error states with retry functionality
- ✅ **Modern UI** - Clean, intuitive design following modern mobile patterns

## 🎥 Demo Video

<div align="center">
  <a href="https://streamable.com/8mxbza">
    <img src="https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg" alt="Beni Mellal Adventures Demo" width="600">
  </a>
  <p><em>Click the image above to watch the full demo video</em></p>
</div>

**Or download the demo:**
- [Download MP4 (Direct Link)](./demo/beni-mellal-demo.mp4)

## 🖼️ Screenshots

<div align="center">
  <img src="./screenshots/home.png" alt="Home Screen" width="250">
  <img src="./screenshots/details.png" alt="Details Screen" width="250">
  <img src="./screenshots/gallery.png" alt="Gallery Screen" width="250">
</div>

### Home Screen
Browse all attractions with beautiful card layouts and search functionality.

### Details Screen
View detailed information about each attraction with stats and animated favorites.

### Gallery Screen
Swipe through stunning photos with smooth gesture-based navigation.

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/beni-mellal-adventures.git
cd beni-mellal-adventures
```

2. **Install dependencies**
```bash
npm install
```

3. **Install Expo Router and required packages**
```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

4. **Start the development server**
```bash
npx expo start -c
```

5. **Run on your device**
- Press `i` for iOS simulator
- Press `a` for Android emulator
- Scan QR code with Expo Go app on your phone

## 📂 Project Structure

```
beni-mellal-adventures/
├── app/
│   ├── _layout.js          # Root layout with navigation setup
│   ├── index.js            # Home screen - List of attractions
│   ├── details.js          # Details screen - Attraction info
│   └── gallery.js          # Gallery screen - Photo viewer
├── components/
│   ├── AttractionCard.js   # Reusable card component
│   └── HeartButton.js      # Animated favorite button
├── store/
│   └── useStore.js         # Zustand state management
├── services/
│   └── api.js              # Axios API service
├── assets/                 # Images and icons
├── babel.config.js         # Babel configuration
├── app.json               # Expo configuration
└── package.json           # Dependencies
```

## 🛠️ Technologies Used

### Core
- **[React Native](https://reactnative.dev/)** - Mobile app framework
- **[Expo](https://expo.dev/)** - Development platform
- **[Expo Router](https://expo.github.io/router/)** - File-based routing

### State Management
- **[Zustand](https://github.com/pmndrs/zustand)** - Lightweight state management
- **[AsyncStorage](https://react-native-async-storage.github.io/async-storage/)** - Persistent local storage

### UI & Animations
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** - Smooth animations
- **[React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)** - Touch gestures
- **[Lucide React Native](https://lucide.dev/)** - Beautiful icons

### Data & API
- **[Axios](https://axios-http.com/)** - HTTP client for API calls
- **[MockAPI](https://mockapi.io/)** - Mock REST API

## 🎨 Design System

### Color Palette
```
Primary Orange:   #f97316
Dark Gray:        #1f2937
Medium Gray:      #6b7280
Light Gray:       #f3f4f6
Background:       #f9fafb
White:            #ffffff
Red (Favorite):   #ef4444
```

### Typography
- **Headers**: Bold, 28px
- **Titles**: Bold, 20px
- **Body**: Regular, 16px
- **Captions**: Regular, 14px

## 🔧 Configuration

### Update API Endpoint

Edit `services/api.js` to change the API URL:

```javascript
const API_BASE_URL = 'https://your-api-url.com/api/v1';
```

### Customize Colors

Update colors throughout the components or create a theme file.

## 📱 API Structure

The app expects the following data structure from the API:

```json
{
  "id": "1",
  "name": "Ouzoud Waterfalls",
  "description": "Spectacular waterfalls...",
  "image": "https://example.com/image.jpg",
  "gallery": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg"
  ]
}
```

## 🧪 Testing

```bash
# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web
```

## 📦 Building for Production

### iOS
```bash
eas build --platform ios
```

### Android
```bash
eas build --platform android
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Marouane Akrich** , **Siham Ouchrif** 
- GitHub: [@marouaneakrich](https://github.com/marouaneakrich)
- GitHub: [@siham1230](https://github.com/siham1230)


## 🙏 Acknowledgments

- Beni Mellal-Khénifra Regional Council for the project inspiration
- [Expo](https://expo.dev/) team for the amazing development platform
- [React Native](https://reactnative.dev/) community
- All the open-source libraries used in this project


## 🗺️ Attractions Featured

1. **Ouzoud Waterfalls** - Spectacular waterfalls
2. **Ain Asserdoun** - Historical natural spring
3. **Bin El Ouidane Lake** - Dam and picturesque lake
4. **Kasbah Ras El Ain** - Historic Fortress
5. **Ifrane National Park** - Nature and hiking
6. **Beni Mellal Souk** - Traditional Market

---

⭐️ Star this repo if you find it helpful!
