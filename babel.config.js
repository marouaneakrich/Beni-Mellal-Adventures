module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'expo-router/babel',
      'react-native-reanimated/plugin',
      ['module-resolver', {
        alias: {
          'react-native-maps': '@react-native-maps/web',
        },
      }],
    ],
  };
};