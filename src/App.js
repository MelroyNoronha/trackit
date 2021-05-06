import React, {useState} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

import colors from './utils/colors';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import IncomeExpenseList from './components/IncomeExpenseList';
import AddButton from './components/AddButton';
import AddIncomeExpenseModal from './components/AddIncomeExpenseModal';

const dummyData = [
  {
    title: 'Today',
    data: [
      {
        isExpense: true,
        isIncome: false,
        description: 'Car tyre change',
        value: '$329',
      },
      {
        isExpense: true,
        isIncome: false,
        description: 'Furniture',
        value: '$4,000',
      },
    ],
  },
  {
    title: 'April 12, 2021',
    data: [
      {
        isExpense: false,
        isIncome: true,
        description: 'Salary',
        value: '$7,329',
      },
    ],
  },
];

const App = () => {
  const [addModalVisible, setAddModalVisible] = useState(false);

  const handleAddButtonPress = () => {
    setAddModalVisible(true);
  };

  const handleAddModalClosePress = () => {
    setAddModalVisible(false);
  };

  const handleAddModalRequestClose = () => {
    setAddModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <Header />
      <Dashboard balance="$3,000" income="$7,329" expense="$4,329" />
      <IncomeExpenseList data={dummyData} />
      <AddButton handleAddButtonPress={handleAddButtonPress} />
      <AddIncomeExpenseModal
        visible={addModalVisible}
        onClosePress={handleAddModalClosePress}
        onRequestClose={handleAddModalRequestClose}
      />
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
