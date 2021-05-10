import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export default async ({value, description, isIncome, isExpense, date}) => {
  try {
    const trackItData = await AsyncStorage.getItem('@trackItData');
    const trackItDataParsed = JSON.parse(trackItData);
    const id = uuid.v4();
    const newRecord = {
      id,
      value,
      description,
      isIncome,
      isExpense,
      date,
    };
    const updatedTrackItData = [...trackItDataParsed, newRecord];
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
