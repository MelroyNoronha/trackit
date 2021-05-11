import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import colors from '../../utils/colors';

const Header = props => {
  const {text} = props;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.light,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});

export default Header;
