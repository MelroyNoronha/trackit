import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import colors from '../../utils/colors';

const TouchableText = props => {
  const {onPress, text, textColor} = props;
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPress}>
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: colors.darkText,
  },
});

export default TouchableText;
