import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import colors from '../utils/colors';

const AddButton = props => {
  const {handleAddButtonPress} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={handleAddButtonPress}>
        <Text style={styles.label}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundGrey,
  },
  touchable: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height: 65,
    width: 65,
    borderRadius: 20,
    marginVertical: 20,
  },
  label: {
    color: colors.light,
    fontSize: 30,
  },
});

export default AddButton;
