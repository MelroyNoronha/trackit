import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import ModalWrapper from '../common/ModalWrapper';
import AddEditForm from '../common/AddEditForm';
import saveIncomeExpense from '../../functions/saveIncomeExpense';

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

  const handleSavePress = () => {
    if (!amount) {
      alert('Please enter amount.');
      return false;
    }

    if (!description) {
      alert('Please enter a description.');
      return false;
    }

    saveIncomeExpense({
      amount,
      description,
      isExpense: incomeOrExpense === 'expense',
      isIncome: incomeOrExpense === 'income',
      date,
    });

    setIncomeOrExpense('income');
    setAmount('');
    setDescription('');
    setDate(new Date());

    onClosePress();
    return true;
  };

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
