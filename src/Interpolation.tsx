import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export function Interpolation() {
  const translateX = useRef(new Animated.Value(0)).current;
  const opacity = translateX.interpolate({
    inputRange: [25, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp' // Keeps the last opacity value while translateX is lower than or bigger than the inputRange. The default value is "extend"
  });
  const rotate = translateX.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
  });
  const backgroundColor = translateX.interpolate({
    inputRange: [0, 100],
    outputRange: ['orange', 'blue'],
  });

  useEffect(() => {
    // Allow to estimate values at intermediate points
    Animated.timing(translateX, {
      toValue: 100,
      duration: 1500,
      // useNativeDriver: true,
      useNativeDriver: false, // Color animations does not work on native driver
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        alignSelf: 'center',
        backgroundColor: backgroundColor,
        opacity,
        transform: [{ translateX }, { rotate }],
      }}
    />
  );
}
