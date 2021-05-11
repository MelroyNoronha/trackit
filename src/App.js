import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNBootSplash from 'react-native-bootsplash';

import Home from './components/Home';
import parseDataForSectionList from './functions/parseDataForSectionList';
import getTotalIncomeExpense from './functions/getTotalIncomeExpense';

const App = () => {
  const [trackItData, setTrackItData] = useState([]);

  const [balance, setBalance] = useState(0);

  const [totalIncome, setTotalIncome] = useState(0);

  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const getTrackItData = async () => {
      try {
        const trackItData = await AsyncStorage.getItem('@trackItData');

        if (trackItData !== null) {
          const trackItDataParsed = parseDataForSectionList(
            JSON.parse(trackItData),
          );
          const totalIncome = getTotalIncomeExpense({
            trackItData: JSON.parse(trackItData),
            income: true,
          });
          const totalExpense = getTotalIncomeExpense({
            trackItData: JSON.parse(trackItData),
            expense: true,
          });
          const balance = totalIncome - totalExpense;

          setTotalIncome(totalIncome);
          setTotalExpense(totalExpense);
          setBalance(balance);
          setTrackItData(trackItDataParsed);
        } else {
          await AsyncStorage.setItem('@trackItData', JSON.stringify([]));
          setTrackItData([]);
        }
      } catch (e) {
        alert('Something went wrong. Please restart the application.');
      }
    };

    getTrackItData().finally(() => {
      RNBootSplash.hide({fade: true});
    });
  });

  return (
    <Home
      data={trackItData}
      balance={balance}
      totalIncome={totalIncome}
      totalExpense={totalExpense}
    />
  );
};

export default App;
