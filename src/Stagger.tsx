import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export function Stagger() {
  const firstOpacity = useRef(new Animated.Value(0)).current;
  const secondOpacity = useRef(new Animated.Value(0)).current;
  const thirdOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Execute next animation after a determined time interval
    Animated.stagger(1000, [
      Animated.timing(firstOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(secondOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(thirdOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start()
  }, []);

  return (
    <>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          backgroundColor: 'orange',
          marginBottom: 10,
          opacity: firstOpacity,
        }}
      />
      <Animated.View
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          backgroundColor: 'orange',
          marginBottom: 10,
          opacity: secondOpacity,
        }}
      />
      <Animated.View
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          backgroundColor: 'orange',
          marginBottom: 10,
          opacity: thirdOpacity,
        }}
      />
    </>
  );
}
