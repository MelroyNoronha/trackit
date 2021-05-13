export default (state, action) => {
  switch (action.type) {
    case 'POPULATE_DATA':
      return action.data;

    case 'ADD_RECORD':
      return [...state, action.newRecord];

    case 'EDIT_RECORD':
      let updatedState = [...state];
      const {
        amount,
        description,
        date,
        isIncome,
        isExpense,
      } = action.updatedRecord;
      const recordIndexToEdit = state.findIndex(
        record => record.id === action.id,
      );

      updatedState[recordIndexToEdit] = {
        ...updatedState[recordIndexToEdit],
        amount,
        description,
        date,
        isIncome,
        isExpense,
      };

      return [...updatedState];

    case 'DELETE_RECORD':
      return state.filter(record => record.id !== action.id);
  }
};
