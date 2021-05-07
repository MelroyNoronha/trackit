import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import ModalWrapper from '../common/ModalWrapper';
import AddEditForm from '../common/AddEditForm';

const EditIncomeExpenseModal = props => {
  const {visible, onClosePress, onRequestClose, data} = props;

  const [incomeOrExpense, setIncomeOrExpense] = useState(
    data.isExpense ? 'expense' : 'income',
  );

  const [amount, setAmount] = useState(data.value);

  const [description, setDescription] = useState(data.description);

  const [date, setDate] = useState(new Date(data.date));

  useEffect(() => {
    const {isExpense, description, value, date} = data;

    setIncomeOrExpense(isExpense ? 'expense' : 'income');
    setAmount(value);
    setDescription(description);
    setDate(new Date(date));
  }, [data]);

  const handleAmountTextChange = amount => {
    setAmount(amount);
  };

  const handleDescriptionTextChange = description => {
    setDescription(description);
  };

  const handleSavePress = () => {};

  return (
    <ModalWrapper
      title="Edit Income/Expense"
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

export default EditIncomeExpenseModal;
