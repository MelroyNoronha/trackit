import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import ModalWrapper from '../common/ModalWrapper';
import AddEditForm from '../common/AddEditForm';
import editIncomeExpense from '../../functions/editIncomeExpense';
import validateInputs from '../../functions/validateInputs';

const EditIncomeExpenseModal = props => {
  const {visible, setVisible, data} = props;

  const [incomeOrExpense, setIncomeOrExpense] = useState(
    data.isExpense ? 'expense' : 'income',
  );

  const [amount, setAmount] = useState(data.amount);

  const [description, setDescription] = useState(data.description);

  const [date, setDate] = useState(new Date(data.date));

  useEffect(() => {
    const {isExpense, description, amount, date} = data;

    setIncomeOrExpense(isExpense ? 'expense' : 'income');
    setAmount(amount);
    setDescription(description);
    setDate(new Date(date));
  }, [data]);

  const handleAmountTextChange = amount => {
    setAmount(amount);
  };

  const handleDescriptionTextChange = description => {
    setDescription(description);
  };

  const handleSavePress = () => {
    const inputsAreValid = validateInputs({amount, description});

    if (inputsAreValid) {
      editIncomeExpense({
        id: data.id,
        amount,
        description,
        isIncome: incomeOrExpense === 'income',
        isExpense: incomeOrExpense === 'expense',
        date,
      });

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
      title="Edit Income/Expense"
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

export default EditIncomeExpenseModal;
