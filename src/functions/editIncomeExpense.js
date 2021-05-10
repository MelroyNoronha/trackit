import AsyncStorage from '@react-native-async-storage/async-storage';

export default async ({id, amount, description, isIncome, isExpense, date}) => {
  try {
    const trackItData = await AsyncStorage.getItem('@trackItData');
    const trackItDataParsed = JSON.parse(trackItData);
    let indexOfRecordToEdit = trackItDataParsed.findIndex(
      record => record.id === id,
    );
    let updatedTrackItData = trackItDataParsed;

    updatedTrackItData[indexOfRecordToEdit].amount = amount;
    updatedTrackItData[indexOfRecordToEdit].description = description;
    updatedTrackItData[indexOfRecordToEdit].isIncome = isIncome;
    updatedTrackItData[indexOfRecordToEdit].isExpense = isExpense;
    updatedTrackItData[indexOfRecordToEdit].date = date;

    await AsyncStorage.setItem(
      '@trackItData',
      JSON.stringify(updatedTrackItData),
    );

    return true;
  } catch (err) {
    alert('Could not save income/expense. Please try again.');
    return false;
  }
};
