import React, {useState, useContext} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import colors from '../../utils/colors';
import Header from './Header';
import Dashboard from './Dashboard';
import IncomeExpenseList from './IncomeExpenseList';
import AddButton from './AddButton';
import AddIncomeExpenseModal from '../Modal/AddIncomeExpense';
import MainContext from '../../contexts/MainContext';
import getTotalIncomeExpense from '../../functions/getTotalIncomeExpense';

const Home = () => {
  const {trackItData} = useContext(MainContext);

  const totalIncome = getTotalIncomeExpense({trackItData, income: true});
  const totalExpense = getTotalIncomeExpense({trackItData, expense: true});
  const balance = totalIncome - totalExpense;

  const [addModalVisible, setAddModalVisible] = useState(false);

  const handleAddButtonPress = () => {
    setAddModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <Header text="TrackIt" />
      <Dashboard
        balance={balance}
        income={totalIncome}
        expense={totalExpense}
      />
      <IncomeExpenseList data={trackItData} />
      <AddButton handleAddButtonPress={handleAddButtonPress} />
      <AddIncomeExpenseModal
        visible={addModalVisible}
        setVisible={setAddModalVisible}
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

export default Home;
