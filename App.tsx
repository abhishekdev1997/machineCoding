/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useCallback, useContext, useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PureComp from './PureComp';
import AppNavigator from './src/navigator';
import Screens from './src/screens';
import { ToastCustom } from './src/components';
import Provider, { MyContext } from './src/context/Provider';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isVisible, setIsVisible] = useState(false);
  const [keyCounter, setKeyCounter] = useState(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const testFun = () => useCallback(() => {
    console.log("testFun");
  }, [])

  const context = useContext(MyContext);

  useEffect(() => {
    console.log("app", context)
    setIsVisible(true);
    setKeyCounter(keyCounter + 1);
  }, [context.isVisible])

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
      <ToastCustom message='Screen1' isVisible={isVisible} keyCounter={keyCounter} />
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
