import { Platform } from 'react-native';

let Map;
if (Platform.OS === 'web') {
  Map = require('./map.web').default;
} 


export default Map;