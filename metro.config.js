const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// 👇 Explicitly tell Metro how to handle these modules
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  '@react-native-maps/web': require.resolve('./app/map.web.js'),
};

module.exports = config;
