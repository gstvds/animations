import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export function Mixing() {
  const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    // It is possible to mix different types of animations
    Animated.sequence([
      Animated.spring(translation.x, {
        toValue: 100,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.spring(translation.x, {
          toValue: -100,
          useNativeDriver: true,
        }),
        Animated.spring(translation.y, {
          toValue: 100,
          useNativeDriver: true,
        }),
      ]),
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
