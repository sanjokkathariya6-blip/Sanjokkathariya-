import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import HUD from '../components/HUD';
import Controls from '../components/Controls';
import GameOverlay from '../components/GameOverlay';
import { GameEngine } from '../utils/GameEngine';
import { GameState } from '../types/game';

interface GameScreenProps {
  onExit: () => void;
}

export default function GameScreen({ onExit }: GameScreenProps) {
  const gameEngineRef = useRef<GameEngine | null>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const moveInputRef = useRef({ x: 0, y: 0 });
  const lookInputRef = useRef({ x: 0, y: 0 });
  
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    ammo: 30,
    health: 100,
    targets: [],
    isGameOver: false,
  });

  const onContextCreate = async (gl: any) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    
    const renderer = new Renderer({ gl, width, height });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000);
    
    const gameEngine = new GameEngine();
    gameEngine.renderer = renderer;
    gameEngine.camera.aspect = width / height;
    gameEngine.camera.updateProjectionMatrix();
    
    gameEngineRef.current = gameEngine;
    
    setGameState(prev => ({
      ...prev,
      targets: gameEngine.targets,
    }));
    
    const render = () => {
      animationFrameRef.current = requestAnimationFrame(render);
      
      if (gameEngineRef.current) {
        gameEngineRef.current.updateCamera(
          moveInputRef.current.x,
          moveInputRef.current.y,
          lookInputRef.current.x,
          lookInputRef.current.y
        );
        
        lookInputRef.current = { x: 0, y: 0 };
        
        gameEngineRef.current.render();
      }
      
      gl.endFrameEXP();
    };
    
    render();
  };

  const handleMove = (x: number, y: number) => {
    moveInputRef.current = { x, y };
  };

  const handleLook = (deltaX: number, deltaY: number) => {
    lookInputRef.current = {
      x: lookInputRef.current.x + deltaX,
      y: lookInputRef.current.y + deltaY,
    };
  };

  const handleShoot = () => {
    if (!gameEngineRef.current || gameState.ammo <= 0 || gameState.isGameOver) {
      return;
    }
    
    const hitTarget = gameEngineRef.current.shoot();
    gameEngineRef.current.animateGunRecoil();
    
    setGameState(prev => {
      const newAmmo = prev.ammo - 1;
      const newScore = hitTarget ? prev.score + 100 : prev.score;
      
      const allTargetsHit = gameEngineRef.current?.checkGameComplete() || false;
      
      return {
        ...prev,
        ammo: newAmmo,
        score: newScore,
        isGameOver: allTargetsHit,
      };
    });
  };

  const handleRestart = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    setGameState({
      score: 0,
      ammo: 30,
      health: 100,
      targets: [],
      isGameOver: false,
    });
    
    gameEngineRef.current = null;
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <GLView
        style={styles.glView}
        onContextCreate={onContextCreate}
      />
      
      <HUD 
        score={gameState.score}
        ammo={gameState.ammo}
        health={gameState.health}
      />
      
      <Controls
        onMove={handleMove}
        onLook={handleLook}
        onShoot={handleShoot}
      />
      
      <GameOverlay
        isGameOver={gameState.isGameOver}
        score={gameState.score}
        onRestart={handleRestart}
        onExit={onExit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  glView: {
    flex: 1,
  },
});
