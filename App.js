import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const App = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Header/>
        <Footer/>
      </View>
    </NativeRouter>

  );
};

export default App;