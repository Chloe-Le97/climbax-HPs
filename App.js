import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
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
    <View style={styles.container}>
      <Header/>
      <Footer/>
    </View>
  );
};

export default App;