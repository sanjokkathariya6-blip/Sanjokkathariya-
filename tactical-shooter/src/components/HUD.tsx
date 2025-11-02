import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface HUDProps {
  score: number;
  ammo: number;
  health: number;
}

export default function HUD({ score, ammo, health }: HUDProps) {
  const healthColor = health > 60 ? '#4CAF50' : health > 30 ? '#FFC107' : '#F44336';

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>SCORE</Text>
          <Text style={styles.statValue}>{score}</Text>
        </View>
        
        <View style={styles.centerInfo}>
          <View style={styles.crosshair}>
            <View style={styles.crosshairHorizontal} />
            <View style={styles.crosshairVertical} />
            <View style={styles.crosshairDot} />
          </View>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statLabel}>AMMO</Text>
          <Text style={styles.statValue}>{ammo}</Text>
        </View>
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.healthContainer}>
          <Text style={styles.healthLabel}>HEALTH</Text>
          <View style={styles.healthBarBg}>
            <View 
              style={[
                styles.healthBarFill, 
                { width: `${health}%`, backgroundColor: healthColor }
              ]} 
            />
          </View>
          <Text style={[styles.healthValue, { color: healthColor }]}>{health}%</Text>
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
    pointerEvents: 'none',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
    paddingTop: 40,
  },
  statBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ff4444',
    minWidth: 100,
  },
  statLabel: {
    color: '#888',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  statValue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  centerInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  crosshair: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crosshairHorizontal: {
    position: 'absolute',
    width: 20,
    height: 2,
    backgroundColor: '#ff4444',
    opacity: 0.8,
  },
  crosshairVertical: {
    position: 'absolute',
    width: 2,
    height: 20,
    backgroundColor: '#ff4444',
    opacity: 0.8,
  },
  crosshairDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ff4444',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
  },
  healthContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#333',
  },
  healthLabel: {
    color: '#888',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 6,
  },
  healthBarBg: {
    width: '100%',
    height: 20,
    backgroundColor: '#222',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 6,
  },
  healthBarFill: {
    height: '100%',
    borderRadius: 10,
  },
  healthValue: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
