import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export function Sequence() {
  const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    // Execute animations in sequence
    Animated.sequence([
      Animated.spring(translation.x, {
        toValue: 100,
        useNativeDriver: true,
      }),
      Animated.spring(translation.y, {
        toValue: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        alignSelf: 'center',
        backgroundColor: 'orange',
        transform: [{ translateX: translation.x }, { translateY: translation.y }]
      }}
    />
  );
}
