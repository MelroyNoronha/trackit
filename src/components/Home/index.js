import React, {useState} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import colors from '../../utils/colors';
import Header from './Header';
import Dashboard from './Dashboard';
import IncomeExpenseList from './IncomeExpenseList';
import AddButton from './AddButton';
import AddIncomeExpenseModal from '../Modal/AddIncomeExpense';

const Home = props => {
  const {data} = props;

  const [addModalVisible, setAddModalVisible] = useState(false);

  const handleAddButtonPress = () => {
    setAddModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <Header />
      <Dashboard balance="$3,000" income="$7,329" expense="$4,329" />
      <IncomeExpenseList data={data} />
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
