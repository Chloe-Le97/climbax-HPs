import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Footer from './src/components/Footer';
import Details from './src/components/Details';
import Feed from './src/components/Feed'

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
        

        <Switch>
          <Route path="/" exact>
            <Feed/>
          </Route>
          <Route path="/:id" exact>
            <Details/>
          </Route>
        </Switch>

        <Footer/>

      </View>
    </NativeRouter>

  );
};

export default App;