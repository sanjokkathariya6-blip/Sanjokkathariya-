import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, PanResponder } from 'react-native';

interface ControlsProps {
  onMove: (x: number, y: number) => void;
  onLook: (deltaX: number, deltaY: number) => void;
  onShoot: () => void;
}

export default function Controls({ onMove, onLook, onShoot }: ControlsProps) {
  const [joystickPosition, setJoystickPosition] = useState({ x: 0, y: 0 });

  const movementPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      setJoystickPosition({ x: 0, y: 0 });
    },
    onPanResponderMove: (_, gestureState) => {
      const maxDistance = 40;
      const distance = Math.sqrt(
        gestureState.dx * gestureState.dx + gestureState.dy * gestureState.dy
      );
      
      let x = gestureState.dx;
      let y = gestureState.dy;
      
      if (distance > maxDistance) {
        const ratio = maxDistance / distance;
        x *= ratio;
        y *= ratio;
      }
      
      setJoystickPosition({ x, y });
      onMove(x / maxDistance, y / maxDistance);
    },
    onPanResponderRelease: () => {
      setJoystickPosition({ x: 0, y: 0 });
      onMove(0, 0);
    },
  });

  const lookPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      onLook(gestureState.dx * 0.5, gestureState.dy * 0.5);
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.leftControls}>
        <View style={styles.joystickContainer} {...movementPanResponder.panHandlers}>
          <View style={styles.joystickOuter}>
            <View 
              style={[
                styles.joystickInner,
                {
                  transform: [
                    { translateX: joystickPosition.x },
                    { translateY: joystickPosition.y },
                  ],
                },
              ]}
            />
          </View>
          <Text style={styles.joystickLabel}>MOVE</Text>
        </View>
      </View>

      <View style={styles.rightControls}>
        <View style={styles.lookArea} {...lookPanResponder.panHandlers}>
          <Text style={styles.lookLabel}>SWIPE TO LOOK</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.shootButton}
          onPress={onShoot}
          activeOpacity={0.7}
        >
          <Text style={styles.shootButtonText}>FIRE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  leftControls: {
    justifyContent: 'flex-end',
  },
  joystickContainer: {
    alignItems: 'center',
  },
  joystickOuter: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  joystickInner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 68, 68, 0.8)',
    borderWidth: 2,
    borderColor: '#fff',
  },
  joystickLabel: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 8,
    letterSpacing: 1,
  },
  rightControls: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  lookArea: {
    position: 'absolute',
    top: -150,
    right: 0,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  lookLabel: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  shootButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ff4444',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#fff',
    shadowColor: '#ff0000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  shootButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
