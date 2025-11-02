import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface MenuScreenProps {
  onStart: () => void;
}

export default function MenuScreen({ onStart }: MenuScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>TACTICAL SHOOTER</Text>
        <Text style={styles.subtitle}>3D FPS Mobile Game</Text>
        
        <View style={styles.instructions}>
          <Text style={styles.instructionText}>🎯 HOW TO PLAY:</Text>
          <Text style={styles.instructionItem}>• Use left joystick to move</Text>
          <Text style={styles.instructionItem}>• Swipe right side to look around</Text>
          <Text style={styles.instructionItem}>• Tap FIRE button to shoot</Text>
          <Text style={styles.instructionItem}>• Hit all targets to win!</Text>
        </View>

        <TouchableOpacity style={styles.startButton} onPress={onStart}>
          <Text style={styles.startButtonText}>START GAME</Text>
        </TouchableOpacity>

        <View style={styles.features}>
          <Text style={styles.featureText}>✓ Realistic 3D Graphics</Text>
          <Text style={styles.featureText}>✓ Smooth Touch Controls</Text>
          <Text style={styles.featureText}>✓ Immersive Gameplay</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ff4444',
    marginBottom: 10,
    textShadowColor: '#ff0000',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 40,
    letterSpacing: 3,
  },
  instructions: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#333',
  },
  instructionText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  instructionItem: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 8,
    paddingLeft: 10,
  },
  startButton: {
    backgroundColor: '#ff4444',
    paddingHorizontal: 60,
    paddingVertical: 18,
    borderRadius: 30,
    marginBottom: 30,
    shadowColor: '#ff0000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  features: {
    alignItems: 'center',
  },
  featureText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
});
