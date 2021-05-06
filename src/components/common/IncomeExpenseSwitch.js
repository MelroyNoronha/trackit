import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import colors from '../../utils/colors';

const IncomeExpenseSwitch = props => {
  const {value, setValue} = props;

  const handleIncomePress = () => {
    setValue('income');
  };

  const handleExpensePress = () => {
    setValue('expense');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.incomeTouchable,
          {
            backgroundColor:
              value === 'income' ? colors.primary : colors.inactiveGrey,
          },
        ]}
        onPress={handleIncomePress}>
        <Text
          style={[
            styles.switchLabel,
            {color: value === 'income' ? colors.light : colors.darkText},
          ]}>
          Income
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.expenseTouchable,
          {
            backgroundColor:
              value === 'expense' ? colors.primary : colors.inactiveGrey,
          },
        ]}
        onPress={handleExpensePress}>
        <Text
          style={[
            styles.switchLabel,
            {color: value === 'expense' ? colors.light : colors.darkText},
          ]}>
          Expense
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  incomeTouchable: {
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    padding: 12,
  },
  switchLabel: {
    fontSize: 14,
  },
  expenseTouchable: {
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    padding: 12,
  },
});

export default IncomeExpenseSwitch;
