import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import colors from '../../utils/colors';
import strings from '../../utils/strings';

const Dashboard = props => {
  const {balance, income, expense} = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftPane}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.balanceValue}>
          {strings.currencySymbol}
          {balance}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.rightPane}>
        <View style={styles.incomeContainer}>
          <Text style={styles.label}>Income</Text>
          <Text style={styles.incomeValue}>
            {strings.currencySymbol}
            {income}
          </Text>
        </View>

        <View style={styles.expenseContainer}>
          <Text style={styles.expenseValue}>
            {strings.currencySymbol}
            {expense}
          </Text>
          <Text style={styles.label}>Expense</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: Dimensions.get('screen').width / 30,
    backgroundColor: colors.light,
    borderWidth: 1,
    borderColor: colors.borderGrey,
    borderRadius: 10,
  },
  leftPane: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: colors.darkText,
    fontSize: 12,
  },
  balanceValue: {
    color: colors.blue,
    fontSize: 20,
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: colors.borderGrey,
    width: 1,
    margin: 7,
  },
  rightPane: {
    alignItems: 'center',
  },
  incomeContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  incomeValue: {
    color: colors.green,
    fontSize: 18,
    fontWeight: 'bold',
  },
  expenseContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  expenseValue: {
    color: colors.red,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Dashboard;
