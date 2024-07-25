import { AppRegistry } from 'react-native';
import App from './App'; // Make sure this points to your main App component file
import { name as appName } from './app.json'; // This file should exist in your project root

// Register the main application component
AppRegistry.registerComponent(appName, () => App);
