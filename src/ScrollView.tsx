import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, useWindowDimensions } from 'react-native';

export function ScrollViewAnimation() {
  const { width } = useWindowDimensions();
  const scrolling = useRef(new Animated.Value(0)).current;
  const translateY = scrolling.interpolate({
    inputRange: [0, 100],
    outputRange: [-220, -110],
    extrapolate: 'clamp',
  });

  return (
    <>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 110,
          zIndex: -1,
          backgroundColor: 'orange',
          transform: [
            {
              translateY
            }
          ]
        }}
      />
      <Animated.ScrollView
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrolling } } }], { useNativeDriver: true })}
        // Fires onScroll every 16ms
        scrollEventThrottle={16}
        style={{ flex: 1 }}
        contentContainerStyle={{ height: '100%' }}
      >
        <View style={{ flex: 1, width, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: '500', fontSize: 16 }}>Scroll Up to reveal the Header</Text>
        </View>
      </Animated.ScrollView>
    </>
  );
}
