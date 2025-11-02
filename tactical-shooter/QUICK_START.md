# 🚀 Quick Start Guide - Tactical Shooter

Get your 3D FPS mobile game up and running in minutes!

## ⚡ Fast Setup (3 Steps)

### 1. Start the Development Server
```bash
cd tactical-shooter
npm start
```

### 2. Install Expo Go on Your Phone
- **iOS**: Download from [App Store](https://apps.apple.com/app/expo-go/id982107779)
- **Android**: Download from [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

### 3. Scan & Play
- Open Expo Go app
- Scan the QR code from your terminal
- Wait for the game to load
- Tap "START GAME" and enjoy! 🎮

## 🎯 Game Controls

### Movement
- **Left Joystick**: Move forward, backward, left, right

### Aiming
- **Right Side Swipe**: Look around and aim

### Shooting
- **Red FIRE Button**: Shoot your weapon

### Objective
- Hit all 7 red targets to win!

## 🖥️ Running on Emulator/Simulator

### Android Emulator
```bash
npm run android
```
**Requirements**: Android Studio with emulator installed

### iOS Simulator (macOS only)
```bash
npm run ios
```
**Requirements**: Xcode installed

## 🐛 Troubleshooting

### "Metro bundler not starting"
```bash
npx expo start --clear
```

### "Cannot connect to device"
- Ensure phone and computer are on same WiFi network
- Try restarting Expo Go app
- Check firewall settings

### "3D scene not rendering"
- Ensure device supports WebGL
- Restart the app
- Try on a different device

### "Touch controls not working"
- Update Expo Go to latest version
- Restart the app
- Check device touch sensitivity

## 📱 Device Requirements

### Minimum
- **Android**: 5.0 (Lollipop) or higher
- **iOS**: 11.0 or higher
- **RAM**: 2GB
- **Storage**: 100MB free space

### Recommended
- **Android**: 8.0 (Oreo) or higher
- **iOS**: 13.0 or higher
- **RAM**: 4GB+
- **GPU**: WebGL 2.0 support

## 🎮 Gameplay Tips

1. **Take Your Time**: You have unlimited time to aim
2. **Use the Crosshair**: The red crosshair shows exactly where you'll shoot
3. **Manage Ammo**: You have 30 rounds - make them count!
4. **Move Around**: Get different angles on targets
5. **Look Up**: Some targets are positioned higher

## 📊 Game Stats

- **Targets**: 7 total
- **Points per Hit**: 100
- **Maximum Score**: 700
- **Starting Ammo**: 30 rounds
- **Starting Health**: 100%

## 🔧 Development Commands

```bash
# Start development server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on web (experimental)
npm run web

# Type checking
npx tsc --noEmit

# Clear cache
npx expo start --clear
```

## 📚 Additional Resources

- **Full Documentation**: See `README.md`
- **Game Design**: See `GAME_DESIGN.md`
- **Expo Docs**: https://docs.expo.dev
- **Three.js Docs**: https://threejs.org/docs

## 🎉 You're Ready!

That's it! You now have a fully functional 3D FPS game running on your mobile device. 

**Enjoy the game and happy shooting! 🎯**

---

Need help? Check the full README.md or open an issue on GitHub.
