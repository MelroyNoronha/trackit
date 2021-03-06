import React, {useContext} from 'react';
import {Text, StyleSheet} from 'react-native';

import ModalWrapper from '../common/ModalWrapper';
import TouchableText from '../common/TouchableText';
import colors from '../../utils/colors';
import strings from '../../utils/strings';
import MainContext from '../../contexts/MainContext';

const IncomeExpenseDetailsModal = props => {
  const {visible, setVisible, data, onEditPress} = props;

  const {trackItDataDispatch} = useContext(MainContext);

  const {id, isExpense, description, amount, date} = data;

  const formattedDate = new Date(date).toDateString();

  const handleDeletePress = () => {
    trackItDataDispatch({
      type: 'DELETE_RECORD',
      id,
    });
    setVisible(false);
  };

  handleClosePress = () => {
    setVisible(false);
  };

  handleRequestClose = () => {
    setVisible(false);
  };

  return (
    <ModalWrapper
      title={isExpense ? 'Expense' : 'Income'}
      visible={visible}
      onClosePress={handleClosePress}
      onRequestClose={handleRequestClose}>
      <Text
        style={[styles.value, {color: isExpense ? colors.red : colors.green}]}>
        {strings.currencySymbol}
        {amount}
      </Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.date}>{formattedDate}</Text>
      <TouchableText
        text="Edit"
        textColor={colors.primary}
        onPress={onEditPress}
      />
      <TouchableText
        text="Delete"
        textColor={colors.darkText}
        onPress={handleDeletePress}
      />
    </ModalWrapper>
  );
};

const styles = StyleSheet.create({
  value: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  description: {
    color: colors.darkText,
    fontSize: 18,
    marginTop: 10,
  },
  date: {
    color: colors.darkText,
    fontSize: 13,
    marginTop: 7,
    marginBottom: 30,
  },
});

export default IncomeExpenseDetailsModal;
