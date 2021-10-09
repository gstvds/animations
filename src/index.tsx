import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

import * as animations from './animations';

export function App() {
  const [animation, setAnimation] = useState(0);
  const totalAnimations = Object.keys(animations).length - 1;

  function handleNextAnimation() {
    if (animation >= totalAnimations) setAnimation(0);
    else setAnimation(animation + 1);
  }

  function handlePreviousAnimation() {
    if (animation <= 0) setAnimation(totalAnimations);
    else setAnimation(animation - 1);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
        <View style={{ flex: 0.1, justifyContent: 'center', zIndex: 10 }}>
          <Text style={{ fontWeight: '600', fontSize: 32 }}>{Object.keys(animations)[animation]}</Text>
        </View>
        <View style={{ flex: 0.9, marginBottom: 50, alignItems: 'center', justifyContent: 'center' }}>
          {Object.values(animations).map((AnimatedComponent, index) => {
            if (index === animation) return <AnimatedComponent key={Math.random()} />
          })}
        </View>
      </View>
      <View style={{ marginBottom: 100 }}>
        <Button title="Next Animation" color="orange" onPress={handleNextAnimation} />
        <Button title="Previous Animation" color="orange" onPress={handlePreviousAnimation} />
      </View>
    </View>
  );
}
