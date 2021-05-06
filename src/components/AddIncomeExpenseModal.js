import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import ModalWrapper from './common/ModalWrapper';
import IncomeExpenseSwitch from './common/IncomeExpenseSwitch';
import CustomTextInput from './common/CustomTextInput';
import DateInput from './common/DateInput';
import TouchableText from './common/TouchableText';
import colors from '../utils/colors';

const AddIncomeExpenseModal = props => {
  const {visible, onClosePress, onRequestClose} = props;

  const [incomeOrExpense, setIncomeOrExpense] = useState('income');

  const [amount, setAmount] = useState('');

  const handleAmountTextChange = amount => {
    setAmount(amount);
  };

  const [description, setDescription] = useState('');

  const handleDescriptionTextChange = description => {
    setDescription(description);
  };

  const [date, setDate] = useState(new Date());

  const handleSavePress = () => {};

  return (
    <ModalWrapper
      title="Add Income/Expense"
      visible={visible}
      onClosePress={onClosePress}
      onRequestClose={onRequestClose}>
      <IncomeExpenseSwitch
        value={incomeOrExpense}
        setValue={setIncomeOrExpense}
      />
      <CustomTextInput
        value={amount}
        onChangeText={handleAmountTextChange}
        placeholder="Amount"
        keyboardType="numeric"
      />
      <CustomTextInput
        value={description}
        onChangeText={handleDescriptionTextChange}
        placeholder="Description"
      />
      <DateInput date={date} setDate={setDate} maximumDate={new Date()} />
      <TouchableText
        text="Save"
        textColor={colors.green}
        onPress={handleSavePress}
      />
    </ModalWrapper>
  );
};

const styles = StyleSheet.create({});

export default AddIncomeExpenseModal;
