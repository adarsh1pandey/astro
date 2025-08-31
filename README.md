This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:


# Astro Journal App

## Overview
Astro Journal is a React Native mobile app for daily horoscopes and journaling. Users can view horoscopes for any zodiac sign, write and save daily journal entries, and access their data offline. The app is built with a clean, scalable architecture for easy future enhancements.

## Features
- View daily horoscopes for all zodiac signs
- Write & save daily journal entries (offline/local)
- Toggle between zodiac signs
- Responsive, clean UI
- Modular, scalable folder structure
- React Navigation for smooth transitions

## Folder Structure
```
/src
	/components
	/screens
	/services
	/hooks
	/utils
	/store
App.js
```

## Tech Stack
- React Native
- Redux Toolkit (state management)
- React Navigation (routing)
- AsyncStorage (local persistence)
- TypeScript (type safety)

## Setup & Run
1. **Install dependencies:**
	 ```sh
	 npm install
	 # or
	 yarn install
	 ```
2. **Install required packages:**
	 ```sh
	 npm install @react-navigation/native @react-navigation/stack @react-native-async-storage/async-storage @react-native-picker/picker axios @reduxjs/toolkit react-redux
	 # or
	 yarn add @react-navigation/native @react-navigation/stack @react-native-async-storage/async-storage @react-native-picker/picker axios @reduxjs/toolkit react-redux
	 ```
3. **iOS setup:**
	 ```sh
	 cd ios && pod install && cd ..
	 ```
4. **Run the app:**
	 ```sh
	 npx react-native run-ios # for iOS
	 npx react-native run-android # for Android
	 ```

## UX Flow & Product Insights
- **Home Screen:**
	- Shows today’s date and horoscope for the selected zodiac sign
	- Dropdown to choose zodiac sign
	- Button to write a journal entry
- **Journal Screen:**
	- Editable input for the day’s journal entry
	- Explicit save button (auto-save can be added)
	- Shows previously saved entry if available
- **Navigation:**
	- React Navigation stack for Home and Journal screens

### Growth & Future Enhancements
- Push notification reminders to journal (using Expo Notifications)
- Calendar view for past entries
- Horoscope history and trends
- Rich text journal editor
- Cloud sync and backup
- User authentication and profile
- Theming and dark mode
- Smooth animations and micro-interactions

## Recording
Please refer to the attached video for a walkthrough of the app’s flow and features.

---

**Note:**
- Do not commit `node_modules`.
- The codebase is ready for further enhancements and scalable for new features.
