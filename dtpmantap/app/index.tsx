import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useRouter } from 'expo-router';
import Home from './Home';

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const router = useRouter();
//mengatur waktu muncul splash screen
  useEffect(() => {
    const loadApp = async () => {
      await new Promise(resolve => setTimeout(resolve, 4000));

      await SplashScreen.hideAsync();

      console.log("Navigating to Home Screen...");
      router.push('/Home');
          };

    loadApp();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/splash.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 170,
    height: 170,
    marginBottom: 20,
  },
});
