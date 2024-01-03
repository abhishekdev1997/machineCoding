/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import AppNavigator from './src/navigator';
import { ToastCustom } from './src/components';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
      <ToastCustom />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

export default App;
