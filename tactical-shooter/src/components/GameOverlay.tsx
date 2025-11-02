import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface GameOverlayProps {
  isGameOver: boolean;
  score: number;
  onRestart: () => void;
  onExit: () => void;
}

export default function GameOverlay({ isGameOver, score, onRestart, onExit }: GameOverlayProps) {
  if (!isGameOver) return null;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>MISSION COMPLETE!</Text>
        <Text style={styles.subtitle}>All targets eliminated</Text>
        
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreLabel}>FINAL SCORE</Text>
          <Text style={styles.scoreValue}>{score}</Text>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={onRestart}>
            <Text style={styles.buttonText}>PLAY AGAIN</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.exitButton]} 
            onPress={onExit}
          >
            <Text style={styles.buttonText}>EXIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
    textShadowColor: '#00ff00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 30,
  },
  scoreContainer: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#ff4444',
    minWidth: 200,
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: 14,
    color: '#888',
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 10,
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ff4444',
  },
  buttons: {
    width: '100%',
  },
  button: {
    backgroundColor: '#ff4444',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: 'center',
  },
  exitButton: {
    backgroundColor: '#333',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
