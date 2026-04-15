# Teatapp - React Native Finance Dashboard

A React Native application for a finance dashboard, featuring commission tracking, investor management, and modern UI components.

## Tools Used

### Development Tools
- **React Native CLI**: For creating and managing the React Native project
- **Metro**: JavaScript build tool for React Native
- **Android Studio**: For Android development and emulator
- **Xcode**: For iOS development and simulator
- **Visual Studio Code**: Primary code editor
- **Git**: Version control system
- **GitHub**: Repository hosting and collaboration

### AI Tools
- **GitHub Copilot**: AI-powered code completion and suggestions during development

## Libraries and Packages

### Core Dependencies
- `react`: ^19.2.3 - React library for building user interfaces
- `react-native`: 0.84.1 - React Native framework
- `react-native-gesture-handler`: ^2.31.0 - Gesture handling for React Native
- `react-native-reanimated`: ^4.3.0 - Animation library
- `react-native-safe-area-context`: ^5.7.0 - Safe area handling
- `react-native-screens`: ^4.24.0 - Screen management
- `react-native-vector-icons`: ^9.2.0 - Icon library
- `react-native-linear-gradient`: ^2.8.3 - Gradient backgrounds
- `@react-native-masked-view/masked-view`: ^0.3.2 - Masked view component
- `@react-navigation/native`: ^7.2.2 - Navigation library
- `@react-navigation/bottom-tabs`: ^7.15.9 - Bottom tab navigation
- `@react-navigation/native-stack`: ^7.14.10 - Stack navigation
- `axios`: ^1.14.0 - HTTP client for API calls

### Development Dependencies
- `@babel/core`: ^7.25.2 - Babel core
- `@babel/preset-env`: ^7.25.3 - Babel preset for environments
- `@babel/runtime`: ^7.25.0 - Babel runtime
- `@react-native-community/cli`: 20.1.0 - React Native CLI
- `@react-native-community/cli-platform-android`: 20.1.0 - Android CLI platform
- `@react-native-community/cli-platform-ios`: 20.1.0 - iOS CLI platform
- `@react-native/babel-preset`: 0.84.1 - React Native Babel preset
- `@react-native/eslint-config`: 0.84.1 - ESLint config for React Native
- `@react-native/metro-config`: 0.84.1 - Metro config for React Native
- `@react-native/typescript-config`: 0.84.1 - TypeScript config for React Native
- `@types/jest`: ^29.5.13 - TypeScript types for Jest
- `@types/react`: ^19.2.0 - TypeScript types for React
- `@types/react-test-renderer`: ^19.1.0 - TypeScript types for React Test Renderer
- `eslint`: ^8.19.0 - Linting tool
- `jest`: ^29.6.3 - Testing framework
- `prettier`: 2.8.8 - Code formatter
- `react-test-renderer`: 19.2.3 - React test renderer
- `typescript`: ^5.8.3 - TypeScript compiler

## Setup and Installation Instructions

### Prerequisites
- Node.js >= 22.11.0
- npm or yarn package manager
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- Git

### Installation Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Shivam55-bit/Figmaapp.git
   cd Teatapp
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # OR
   yarn install
   ```

3. **iOS Setup (macOS only):**
   - Install CocoaPods:
     ```sh
     bundle install
     bundle exec pod install
     ```

4. **Android Setup:**
   - Ensure Android SDK is installed via Android Studio
   - Set up environment variables for Android SDK

### Running the Application

1. **Start Metro bundler:**
   ```sh
   npm start
   # OR
   yarn start
   ```

2. **Run on Android:**
   ```sh
   npm run android
   # OR
   yarn android
   ```

3. **Run on iOS (macOS only):**
   ```sh
   npm run ios
   # OR
   yarn ios
   ```

### Development Commands
- `npm run lint` - Run ESLint for code linting
- `npm test` - Run Jest tests

## Assumptions and Decisions Made During Development

### Technical Decisions
- **TypeScript**: Used for type safety and better developer experience
- **React Navigation**: Chosen for navigation due to its flexibility and community support
- **Linear Gradient**: Used for modern UI effects in cards and buttons
- **Vector Icons**: Material Community Icons for consistent iconography
- **Reanimated**: For smooth animations and performance

### Design Decisions
- **Dark Theme**: Primary color scheme with dark backgrounds for modern finance app feel
- **Card-based Layout**: Modular components for better maintainability
- **Gradient Accents**: Yellow-gold gradients for highlights and CTAs
- **Responsive Design**: Using moderateScale for device-independent scaling

### Architecture Decisions
- **Component-based Structure**: Organized components, screens, and navigation
- **Theme System**: Centralized colors, spacing, and typography
- **Modular Navigation**: Bottom tabs with stack navigation for complex flows

### Development Assumptions
- Target platforms: Android and iOS
- Minimum React Native version: 0.84.1
- Node.js version: >= 22.11.0
- Development environment: VS Code with GitHub Copilot
- API integration: Axios for HTTP requests (assumed backend exists)

## Project Structure

```
Teatapp/
├── android/          # Android native code
├── ios/             # iOS native code
├── src/
│   ├── components/  # Reusable UI components
│   ├── navigation/  # Navigation configuration
│   ├── screens/     # Screen components
│   └── theme/       # Theme and styling
├── __tests__/       # Test files
└── package.json     # Dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private and proprietary.
