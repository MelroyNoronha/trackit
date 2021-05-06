import React from 'react';
import {Text, StyleSheet} from 'react-native';

import ModalWrapper from './common/ModalWrapper';
import TouchableText from './common/TouchableText';
import colors from '../utils/colors';

const IncomeExpenseDetailsModal = props => {
  const {visible, onClosePress, onRequestClose, data} = props;

  const {isExpense, description, value, date} = data;

  const formattedDate = new Date(date).toDateString();

  const handleEditPress = () => {};

  const handleDeletePress = () => {};

  return (
    <ModalWrapper
      title={isExpense ? 'Expense' : 'Income'}
      visible={visible}
      onClosePress={onClosePress}
      onRequestClose={onRequestClose}>
      <Text
        style={[styles.value, {color: isExpense ? colors.red : colors.green}]}>
        {value}
      </Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.date}>{formattedDate}</Text>
      <TouchableText
        text="Edit"
        textColor={colors.primary}
        onPress={handleEditPress}
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
