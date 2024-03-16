import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';import AppNavigator from './src/navigation';

export default function Main() {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);