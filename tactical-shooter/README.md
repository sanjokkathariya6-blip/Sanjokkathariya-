# 🎯 Tactical Shooter - 3D FPS Mobile Game

A realistic 3D first-person shooter game built with React Native, Expo, and Three.js for Android and iOS platforms.

![Game Type](https://img.shields.io/badge/Type-FPS%20Game-red)
![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS-blue)
![Framework](https://img.shields.io/badge/Framework-React%20Native-61dafb)
![3D Engine](https://img.shields.io/badge/3D-Three.js-black)

## 🎮 Game Features

### Realistic 3D Graphics
- **Advanced 3D Rendering**: Powered by Three.js with WebGL
- **Realistic Gun Model**: Detailed 3D weapon with metallic materials
- **Dynamic Lighting**: Ambient, directional, and hemisphere lighting for realistic shadows
- **Immersive Environment**: 3D shooting range with walls, ground, and obstacles
- **Fog Effects**: Distance-based fog for atmospheric depth

### Gameplay Mechanics
- **First-Person Perspective**: Immersive FPS camera system
- **Target Shooting**: 7 targets positioned at various locations
- **Hit Detection**: Precise raycasting-based shooting mechanics
- **Score System**: Earn 100 points per target hit
- **Ammo Management**: 30 rounds per game session
- **Gun Recoil Animation**: Realistic weapon feedback on firing

### Mobile-Optimized Controls
- **Virtual Joystick**: Smooth movement control (left side)
- **Look Around**: Swipe-based camera rotation (right side)
- **Fire Button**: Large, accessible shoot button
- **Touch-Responsive**: Optimized for mobile touch input

### User Interface
- **HUD Display**: Real-time score, ammo, and health tracking
- **Crosshair**: Center-screen targeting reticle
- **Health Bar**: Visual health indicator with color coding
- **Menu Screen**: Professional game menu with instructions
- **Game Over Screen**: Victory screen with final score

## 📱 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Expo Go app (for testing on physical device)
- Android Studio (for Android emulator) or Xcode (for iOS simulator)

### Installation Steps

1. **Navigate to the project directory**:
   ```bash
   cd tactical-shooter
   ```

2. **Install dependencies** (already done):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   # or
   npx expo start
   ```

4. **Run on your device**:
   - **Physical Device**: 
     - Install "Expo Go" app from App Store (iOS) or Play Store (Android)
     - Scan the QR code displayed in terminal
   
   - **Android Emulator**:
     ```bash
     npm run android
     ```
   
   - **iOS Simulator** (macOS only):
     ```bash
     npm run ios
     ```

## 🎯 How to Play

### Controls
1. **Movement**: Use the left joystick to move forward, backward, left, and right
2. **Look Around**: Swipe on the right side of the screen to rotate the camera
3. **Shoot**: Tap the red "FIRE" button to shoot your weapon
4. **Objective**: Hit all 7 targets to complete the mission

### Gameplay Tips
- Aim carefully - you have limited ammo (30 rounds)
- Use the crosshair in the center of the screen for precise aiming
- Targets are positioned at different heights and distances
- Each successful hit awards 100 points
- Complete the mission by hitting all targets

## 🏗️ Project Structure

```
tactical-shooter/
├── src/
│   ├── components/
│   │   ├── Controls.tsx          # Touch controls (joystick, look, shoot)
│   │   ├── GameOverlay.tsx       # Game over/victory screen
│   │   └── HUD.tsx                # Heads-up display (score, ammo, health)
│   ├── screens/
│   │   ├── GameScreen.tsx        # Main game screen with 3D rendering
│   │   └── MenuScreen.tsx        # Main menu screen
│   ├── types/
│   │   └── game.ts               # TypeScript type definitions
│   └── utils/
│       └── GameEngine.ts         # Core game logic and 3D scene management
├── App.tsx                       # Root application component
├── app.json                      # Expo configuration
├── package.json                  # Dependencies and scripts
└── tsconfig.json                 # TypeScript configuration
```

## 🛠️ Technical Details

### Technologies Used
- **React Native**: Cross-platform mobile framework
- **Expo**: Development platform and toolchain
- **TypeScript**: Type-safe JavaScript
- **Three.js (v0.127.0)**: 3D graphics library
- **expo-gl**: OpenGL ES bindings for Expo
- **expo-three**: Three.js integration for Expo

### Key Components

#### GameEngine (`src/utils/GameEngine.ts`)
- Manages the 3D scene, camera, and renderer
- Creates realistic gun model with metallic materials
- Generates shooting range environment
- Implements raycasting for hit detection
- Handles camera movement and rotation
- Manages target creation and hit states

#### GameScreen (`src/screens/GameScreen.tsx`)
- Initializes WebGL context and 3D renderer
- Manages game state (score, ammo, health)
- Handles user input and game loop
- Coordinates between UI and 3D engine

#### Controls (`src/components/Controls.tsx`)
- Virtual joystick for movement
- Pan responder for camera rotation
- Fire button with visual feedback

#### HUD (`src/components/HUD.tsx`)
- Real-time game statistics display
- Crosshair overlay
- Health bar with color coding

## 🎨 Game Assets

### 3D Models
All 3D models are procedurally generated using Three.js geometry:
- **Gun**: Composite model with body, barrel, grip, and sight
- **Targets**: Cylindrical targets with emissive red material
- **Environment**: Geometric primitives (planes, boxes) for walls and obstacles

### Materials
- **Metallic Gun**: PBR materials with high metalness and low roughness
- **Targets**: Emissive red material for visibility
- **Environment**: Matte materials with realistic roughness values

## 🚀 Building for Production

### Android APK
```bash
# Build standalone APK
eas build --platform android

# Or using Expo classic build
expo build:android
```

### iOS IPA
```bash
# Build for iOS (requires macOS and Apple Developer account)
eas build --platform ios

# Or using Expo classic build
expo build:ios
```

## 🐛 Troubleshooting

### Common Issues

1. **"Unable to resolve module" errors**:
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules
   npm install
   npx expo start --clear
   ```

2. **3D rendering not working**:
   - Ensure device supports WebGL
   - Try restarting the Expo Go app
   - Check console for WebGL errors

3. **Performance issues**:
   - Close other apps to free memory
   - Reduce shadow quality in GameEngine.ts
   - Lower target count for older devices

4. **Touch controls not responsive**:
   - Ensure latest version of Expo Go
   - Check device touch sensitivity settings
   - Restart the app

## 📊 Performance Optimization

The game is optimized for mobile devices:
- Efficient raycasting for hit detection
- Optimized shadow map resolution (2048x2048)
- Limited draw calls with instanced geometry
- Fog to reduce far-plane rendering
- Efficient state management with React hooks

## 🔮 Future Enhancements

Potential features for future versions:
- Multiple weapons with different characteristics
- Enemy AI with movement and shooting
- Multiple levels and environments
- Sound effects and background music
- Multiplayer support
- Weapon upgrades and power-ups
- Leaderboard and achievements
- More realistic gun models and animations
- Particle effects for muzzle flash and impacts

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 👨‍💻 Development

### Running Tests
```bash
npm test
```

### Linting
```bash
npm run lint
```

### Type Checking
```bash
npx tsc --noEmit
```

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing documentation
- Review Expo and Three.js documentation

---

**Enjoy the game! 🎮🎯**

Made with ❤️ using React Native, Expo, and Three.js
