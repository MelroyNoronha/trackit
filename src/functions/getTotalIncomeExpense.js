export default ({trackItData, income, expense}) => {
  const allAmounts = trackItData
    .filter(
      record => (income && record.isIncome) || (expense && record.isExpense),
    )
    .map(record => Number(record.amount));

  const totalAmount = allAmounts.reduce((a, b) => a + b, 0);

  return totalAmount;
};
