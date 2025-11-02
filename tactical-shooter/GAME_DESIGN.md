# 🎮 Tactical Shooter - Game Design Document

## Overview
Tactical Shooter is a 3D first-person shooter game designed for mobile platforms (Android & iOS) featuring realistic graphics, intuitive touch controls, and engaging target shooting gameplay.

## Game Concept

### Genre
- First-Person Shooter (FPS)
- Target Shooting / Training Simulator
- Single-Player

### Target Audience
- Mobile gamers aged 13+
- FPS enthusiasts
- Casual gamers looking for quick sessions
- Players interested in realistic shooting mechanics

### Core Gameplay Loop
1. Player spawns in shooting range
2. Player uses touch controls to move and look around
3. Player aims at targets using crosshair
4. Player shoots targets to earn points
5. Game ends when all targets are hit
6. Player can restart or exit

## Technical Specifications

### Platform
- **Primary**: Android (5.0+) and iOS (11.0+)
- **Framework**: React Native with Expo
- **3D Engine**: Three.js (WebGL)
- **Language**: TypeScript

### Performance Targets
- **Frame Rate**: 30-60 FPS on mid-range devices
- **Load Time**: < 5 seconds
- **Memory Usage**: < 200MB
- **Battery Impact**: Moderate (3D rendering intensive)

## Game Mechanics

### Movement System
- **Type**: Free movement in bounded area
- **Speed**: Moderate walking pace
- **Boundaries**: 18x18 unit area (9 units from center)
- **Height**: Fixed at 1.6 units (eye level)
- **Control**: Virtual joystick (left side of screen)

### Camera System
- **Type**: First-person perspective
- **FOV**: 75 degrees
- **Rotation**: 
  - Horizontal: 360° unlimited rotation
  - Vertical: Limited to ±60° (prevents disorientation)
- **Control**: Swipe gesture (right side of screen)
- **Sensitivity**: Adjustable via look speed multiplier

### Shooting Mechanics
- **Weapon**: Single assault rifle
- **Ammo**: 30 rounds per session
- **Reload**: Not implemented (limited ammo design)
- **Fire Rate**: Semi-automatic (tap to shoot)
- **Accuracy**: Perfect (no spread or recoil affecting aim)
- **Hit Detection**: Raycasting from camera center
- **Feedback**: 
  - Visual: Gun recoil animation
  - Target: Color change on hit (red → gray)

### Scoring System
- **Points per Hit**: 100
- **Maximum Score**: 700 (7 targets × 100)
- **Penalties**: None (missed shots don't reduce score)
- **Tracking**: Real-time display in HUD

### Win Condition
- Hit all 7 targets
- No time limit
- No ammo requirement (can win with any remaining ammo)

## Level Design

### Environment
- **Setting**: Indoor shooting range
- **Size**: 20x20 units
- **Walls**: 
  - Back wall at -10 units (Z-axis)
  - Side walls at ±10 units (X-axis)
  - Height: 5 units
- **Floor**: Grass-textured ground plane
- **Obstacles**: 15 randomly placed crates for visual interest

### Target Placement
7 targets strategically positioned:
1. **Left Target**: (-5, 1.5, -8)
2. **Center Target**: (0, 1.5, -9)
3. **Right Target**: (5, 1.5, -8)
4. **Far Left**: (-7, 1.5, -6)
5. **Far Right**: (7, 1.5, -6)
6. **High Left**: (-3, 2.5, -7)
7. **High Right**: (3, 2.5, -7)

**Design Rationale**:
- Varied heights (1.5 and 2.5 units) for vertical aiming practice
- Different distances (6-9 units) for depth perception
- Spread across horizontal plane for camera rotation practice

### Lighting
- **Ambient Light**: 60% intensity (soft overall illumination)
- **Directional Light**: 80% intensity from (10, 20, 10) position
  - Simulates sunlight
  - Casts dynamic shadows
- **Hemisphere Light**: 50% intensity (sky/ground color gradient)
- **Fog**: Linear fog from 10-50 units (atmospheric depth)

## User Interface

### Main Menu
- **Title**: "TACTICAL SHOOTER"
- **Subtitle**: "3D FPS Mobile Game"
- **Elements**:
  - How to Play instructions
  - Start Game button
  - Feature highlights
- **Style**: Dark theme with red accents

### HUD (Heads-Up Display)
- **Top Left**: Score display
- **Top Right**: Ammo counter
- **Center**: Crosshair (red, multi-line design)
- **Bottom**: Health bar (color-coded: green/yellow/red)
- **Style**: Semi-transparent black panels with red borders

### Controls Overlay
- **Left Side**: Virtual joystick
  - Outer ring: 120px diameter
  - Inner stick: 50px diameter
  - Color: White outline, red stick
- **Right Side**: 
  - Look area: 200x200px swipe zone
  - Fire button: 80px diameter, red with white border
- **Style**: Translucent with clear visual feedback

### Game Over Screen
- **Title**: "MISSION COMPLETE!"
- **Elements**:
  - Final score display
  - Play Again button
  - Exit button
- **Trigger**: All targets hit
- **Style**: Dark overlay with green success color

## Art Style

### Visual Direction
- **Realism**: Semi-realistic 3D graphics
- **Color Palette**: 
  - Environment: Earth tones (browns, greens)
  - UI: Dark with red accents
  - Targets: Bright red for visibility
- **Materials**: PBR (Physically Based Rendering)
  - Metallic surfaces for gun
  - Matte surfaces for environment

### 3D Assets

#### Gun Model
- **Type**: Assault rifle (generic design)
- **Components**:
  - Body: 0.08 × 0.15 × 0.4 units
  - Barrel: 0.015 radius, 0.3 length
  - Grip: 0.06 × 0.12 × 0.08 units
  - Sight: 0.02 × 0.03 × 0.02 units (red)
- **Material**: Dark metallic (metalness: 0.8, roughness: 0.3)
- **Position**: Right side of camera, slightly below center

#### Targets
- **Shape**: Cylinder (0.3 radius, 0.05 height)
- **Material**: Red emissive (emissive intensity: 0.3)
- **Detail**: White ring (torus) at center
- **States**: 
  - Active: Bright red with emission
  - Hit: Dark gray, no emission

#### Environment
- **Ground**: 100×100 unit plane, green color
- **Walls**: Box geometry, brown wood texture
- **Crates**: 0.8×0.8×0.8 units, brown wood, random placement

## Audio Design

### Sound Effects (Not Implemented - Future Feature)
- **Gunshot**: Sharp, realistic rifle sound
- **Hit**: Metallic impact sound
- **Miss**: Bullet whiz sound
- **UI**: Button click sounds
- **Ambient**: Subtle range atmosphere

### Music (Not Implemented - Future Feature)
- **Menu**: Tense, atmospheric track
- **Gameplay**: Minimal, non-distracting background
- **Victory**: Triumphant fanfare

## Controls Specification

### Touch Input Mapping

#### Movement Joystick
- **Location**: Bottom-left corner
- **Type**: Floating joystick (returns to center)
- **Range**: 40px maximum displacement
- **Output**: Normalized X/Y values (-1 to 1)
- **Movement Speed**: 0.1 units per frame

#### Look Control
- **Location**: Right side of screen (200×200px area)
- **Type**: Pan gesture (swipe)
- **Sensitivity**: 0.002 radians per pixel
- **Output**: Delta X/Y rotation values
- **Accumulation**: Continuous (doesn't reset)

#### Fire Button
- **Location**: Bottom-right corner
- **Type**: Tap button
- **Size**: 80px diameter
- **Feedback**: Scale animation on press
- **Cooldown**: None (semi-automatic)

### Control Scheme Rationale
- **Left-hand movement**: Standard for mobile FPS games
- **Right-hand aiming**: Allows precise camera control
- **Large fire button**: Easy to tap during intense gameplay
- **Separated zones**: Prevents accidental input conflicts

## Game States

### State Machine
1. **Menu State**
   - Display main menu
   - Wait for Start button press
   - Transition to Game state

2. **Game State**
   - Initialize 3D scene
   - Enable controls
   - Run game loop
   - Check win condition
   - Transition to GameOver state when complete

3. **GameOver State**
   - Display victory screen
   - Show final score
   - Options: Restart (→ Game) or Exit (→ Menu)

### State Transitions
```
Menu → [Start] → Game → [All Targets Hit] → GameOver
                   ↑                            ↓
                   └────────[Restart]───────────┘
GameOver → [Exit] → Menu
```

## Progression System (Future Feature)

### Potential Additions
- **Levels**: Multiple shooting ranges with increasing difficulty
- **Weapons**: Unlock different guns with unique characteristics
- **Challenges**: Time trials, accuracy challenges, moving targets
- **Upgrades**: Improve weapon stats, ammo capacity, movement speed
- **Achievements**: Milestones for skilled play

## Monetization (Future Consideration)

### Potential Models
- **Free-to-Play**: Ad-supported with optional ad removal
- **Premium**: One-time purchase, no ads
- **Freemium**: Free base game with cosmetic purchases
- **Hybrid**: Free with optional weapon packs

## Accessibility Features

### Current
- **Large UI Elements**: Easy to tap on small screens
- **High Contrast**: Clear visibility of important elements
- **Simple Controls**: Intuitive touch-based input

### Future Considerations
- **Adjustable Sensitivity**: Customize look/move speed
- **Colorblind Modes**: Alternative target colors
- **Haptic Feedback**: Vibration on shoot/hit
- **Tutorial**: Interactive first-time user experience

## Testing Checklist

### Functional Testing
- ✅ Game launches without errors
- ✅ Menu navigation works
- ✅ 3D scene renders correctly
- ✅ Movement controls respond accurately
- ✅ Camera rotation works smoothly
- ✅ Shooting detects hits correctly
- ✅ Score updates on target hit
- ✅ Ammo decreases on shot
- ✅ Game over triggers when all targets hit
- ✅ Restart functionality works

### Performance Testing
- Frame rate on various devices
- Memory usage over time
- Battery consumption
- Load times
- Touch input latency

### Compatibility Testing
- Android versions (5.0 - 13+)
- iOS versions (11.0 - 16+)
- Various screen sizes and aspect ratios
- Different device performance tiers

## Known Limitations

### Current Version
- **No Sound**: Audio not implemented
- **Single Level**: Only one shooting range
- **No Enemies**: Static targets only
- **Limited Weapons**: One gun type
- **No Multiplayer**: Single-player only
- **No Persistence**: No save system or progress tracking

### Technical Constraints
- **WebGL Dependency**: Requires WebGL-capable device
- **Performance**: May struggle on very old devices
- **Battery**: 3D rendering is power-intensive
- **File Size**: Three.js adds significant bundle size

## Future Roadmap

### Version 1.1 (Short-term)
- Add sound effects
- Implement haptic feedback
- Add sensitivity settings
- Create tutorial level

### Version 2.0 (Mid-term)
- Multiple levels
- Additional weapons
- Moving targets
- Leaderboard system
- Achievement system

### Version 3.0 (Long-term)
- Enemy AI
- Story mode
- Multiplayer support
- Advanced graphics options
- Weapon customization

## Conclusion

Tactical Shooter provides a solid foundation for a mobile FPS game with realistic 3D graphics and intuitive touch controls. The current implementation focuses on core shooting mechanics and can be expanded with additional features, levels, and gameplay modes in future updates.

---

**Document Version**: 1.0  
**Last Updated**: November 2, 2025  
**Status**: Initial Release
