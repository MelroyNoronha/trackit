import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

import colors from './utils/colors';
import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <Header />
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
