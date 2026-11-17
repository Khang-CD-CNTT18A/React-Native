
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import ProgressCard from './components/ProgressCard';
import ActionButton from './components/ActionButton';
import AnimatedMessage from './components/AnimatedMessage';

export default function App() {
  const [progress, setProgress] = useState(0);

  const startLearning = () => {
    setProgress(old => Math.min(old + 25, 100));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ANIMATE APP</Text>
      <Text style={styles.subtitle}>Mục tiêu học tập của tôi</Text>

      <ProgressCard progress={progress} />

      <ActionButton
        onPress={startLearning}
        title={progress === 100 ? 'Đã hoàn thành' : 'Bắt đầu học'}
        disabled={progress === 100}
      />

      <TouchableOpacity
        style={styles.reset}
        onPress={() => setProgress(0)}
      >
        <Text style={styles.resetText}>Đặt lại thử nghiệm</Text>
      </TouchableOpacity>

      <AnimatedMessage progress={progress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF3FF',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1976D2',
    textAlign: 'center'
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 16
  },
  reset: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    marginTop: 12,
    alignItems: 'center'
  },
  resetText: {
    color: '#1976D2',
    fontWeight: 'bold'
  }
});
