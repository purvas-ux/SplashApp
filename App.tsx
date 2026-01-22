/**
 * Splash Screen App
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from './src/SplashScreen';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <SplashScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
