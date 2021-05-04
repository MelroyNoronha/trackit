import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import colors from '../utils/colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TrackIt</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height / 16,
    width: '100%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.light,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
