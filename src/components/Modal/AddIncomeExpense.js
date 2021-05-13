import React, {useState, useContext} from 'react';
import {StyleSheet} from 'react-native';
import uuid from 'react-native-uuid';

import ModalWrapper from '../common/ModalWrapper';
import AddEditForm from '../common/AddEditForm';
import validateInputs from '../../functions/validateInputs';
import MainContext from '../../contexts/MainContext';

const AddIncomeExpenseModal = props => {
  const {visible, setVisible} = props;

  const {trackItDataDispatch} = useContext(MainContext);

  const [incomeOrExpense, setIncomeOrExpense] = useState('income');

  const [amount, setAmount] = useState('');

  const [description, setDescription] = useState('');

  const [date, setDate] = useState(new Date());

  const handleAmountTextChange = amount => {
    setAmount(amount);
  };

  const handleDescriptionTextChange = description => {
    setDescription(description);
  };

  const handleSavePress = () => {
    const inputsAreValid = validateInputs({amount, description});

    if (inputsAreValid) {
      trackItDataDispatch({
        type: 'ADD_RECORD',
        newRecord: {
          id: uuid.v4(),
          amount,
          description,
          isExpense: incomeOrExpense === 'expense',
          isIncome: incomeOrExpense === 'income',
          date,
        },
      });

      setIncomeOrExpense('income');
      setAmount('');
      setDescription('');
      setDate(new Date());
      setVisible(false);
    }
  };

  handleClosePress = () => {
    setVisible(false);
  };

  handleRequestClose = () => {
    setVisible(false);
  };

  return (
    <ModalWrapper
      title="Add Income/Expense"
      visible={visible}
      onClosePress={handleClosePress}
      onRequestClose={handleRequestClose}>
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
