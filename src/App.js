import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

import colors from './utils/colors';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <Header />
      <Dashboard balance="$3,000" income="$7,329" expense="$4,329" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default App;
