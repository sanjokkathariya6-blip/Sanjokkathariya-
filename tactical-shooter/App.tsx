import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import GameScreen from './src/screens/GameScreen';
import MenuScreen from './src/screens/MenuScreen';

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {gameStarted ? (
        <GameScreen onExit={() => setGameStarted(false)} />
      ) : (
        <MenuScreen onStart={() => setGameStarted(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
