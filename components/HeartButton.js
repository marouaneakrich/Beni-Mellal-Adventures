import React from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Heart } from 'lucide-react-native';

const HeartButton = ({ isFavorite, onPress, size = 24 }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    scale.value = withSpring(1.3, {}, () => {
      scale.value = withSpring(1);
    });
    onPress();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={{ padding: 8 }}>
      <Animated.View style={animatedStyle}>
        <Heart
          size={size}
          color={isFavorite ? '#ef4444' : '#fff'}
          fill={isFavorite ? '#ef4444' : 'transparent'}
          strokeWidth={2}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default HeartButton;