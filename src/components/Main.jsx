import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import Analysis from './Details';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <Text>Feed</Text>
        </Route>
        <Route path="/:id" exact>
          <Analysis/>
        </Route>
      </Switch>
    </View>
  );
};

export default Main;