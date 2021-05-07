import React from 'react';

import IncomeExpenseSwitch from '../common/IncomeExpenseSwitch';
import CustomTextInput from '../common/CustomTextInput';
import DateInput from '../common/DateInput';
import TouchableText from '../common/TouchableText';
import colors from '../../utils/colors';

const AddEditForm = props => {
  const {
    incomeOrExpense,
    setIncomeOrExpense,
    amount,
    onAmountTextChange,
    description,
    onDescriptionTextChange,
    date,
    setDate,
    onSavePress,
  } = props;

  return (
    <>
      <IncomeExpenseSwitch
        value={incomeOrExpense}
        setValue={setIncomeOrExpense}
      />
      <CustomTextInput
        value={amount}
        onChangeText={onAmountTextChange}
        placeholder="Amount"
        keyboardType="numeric"
      />
      <CustomTextInput
        value={description}
        onChangeText={onDescriptionTextChange}
        placeholder="Description"
      />
      <DateInput date={date} setDate={setDate} maximumDate={new Date()} />
      <TouchableText
        text="Save"
        textColor={colors.green}
        onPress={onSavePress}
      />
    </>
  );
};

export default AddEditForm;
