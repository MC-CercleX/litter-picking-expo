import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import MainStack from './src/navigation/MainStackNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Black': require('./assets/fonts/CircularStd-Black.ttf'),
    'BlackItalic': require('./assets/fonts/CircularStd-BlackItalic.ttf'),
    'Bold': require('./assets/fonts/CircularStd-Bold.ttf'),
    'BoldItalic': require('./assets/fonts/CircularStd-BoldItalic.ttf'),
    'Book': require('./assets/fonts/CircularStd-Book.ttf'),
    'BookItalic': require('./assets/fonts/CircularStd-BookItalic.ttf'),
    'Medium': require('./assets/fonts/CircularStd-Medium.ttf'),
    'MediumItalic': require('./assets/fonts/CircularStd-MediumItalic.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});