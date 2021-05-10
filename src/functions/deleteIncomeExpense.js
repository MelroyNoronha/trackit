import AsyncStorage from '@react-native-async-storage/async-storage';

export default async id => {
  try {
    const trackItData = await AsyncStorage.getItem('@trackItData');
    const trackItDataParsed = JSON.parse(trackItData);

    const updatedTrackItData = trackItDataParsed.filter(
      record => record.id !== id,
    );
    await AsyncStorage.setItem(
      '@trackItData',
      JSON.stringify(updatedTrackItData),
    );

    return true;
  } catch (err) {
    alert('Could not delete income/expense. Please try again.');
    return false;
  }
};
