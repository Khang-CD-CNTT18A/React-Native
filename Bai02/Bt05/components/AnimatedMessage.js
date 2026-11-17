
import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

export default function AnimatedMessage({ progress }) {
  const scale = useRef(new Animated.Value(0.5)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const move = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    if (progress === 0) return;

    scale.setValue(0.5);
    opacity.setValue(0);
    move.setValue(30);

    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(move, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      })
    ]).start();
  }, [progress]);

  if (progress === 0) return null;

  return (
    <Animated.View
      style={[
        styles.message,
        {
          opacity,
          transform: [
            { scale },
            { translateY: move }
          ]
        }
      ]}
    >
      <Text style={styles.text}>
        {progress === 100
          ? '🎉 Chúc mừng! Bạn đã hoàn thành mục tiêu!'
          : '👏 Bạn đã hoàn thành một buổi học!'}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: '#D1F5D3',
    padding: 18,
    borderRadius: 12,
    marginTop: 25
  },
  text: {
    color: '#167A2E',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
