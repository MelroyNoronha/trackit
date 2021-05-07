import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import ModalWrapper from './common/ModalWrapper';
import AddEditForm from './common/AddEditForm';

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
      <AddEditForm
        incomeOrExpense={incomeOrExpense}
        setIncomeOrExpense={setIncomeOrExpense}
        amount={amount}
        onAmountTextChange={handleAmountTextChange}
        description={description}
        onDescriptionTextChange={handleDescriptionTextChange}
        date={date}
        setDate={setDate}
        onSavePress={handleSavePress}
      />
    </ModalWrapper>
  );
};

const styles = StyleSheet.create({});

export default AddIncomeExpenseModal;
