export interface Target {
  id: string;
  position: { x: number; y: number; z: number };
  isHit: boolean;
  mesh?: any;
}

export interface GameState {
  score: number;
  ammo: number;
  health: number;
  targets: Target[];
  isGameOver: boolean;
}

export interface TouchControl {
  x: number;
  y: number;
  active: boolean;
}
