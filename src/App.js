import React, {useReducer, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNBootSplash from 'react-native-bootsplash';

import Home from './components/Home';
import trackItDataReducer from './reducers/trackItData';
import MainContext from './contexts/MainContext';

const App = () => {
  const [trackItData, trackItDataDispatch] = useReducer(trackItDataReducer, []);

  useEffect(() => {
    const getTrackItData = async () => {
      try {
        const storedTrackItData = await AsyncStorage.getItem('@trackItData');

        if (storedTrackItData !== null) {
          trackItDataDispatch({
            type: 'POPULATE_DATA',
            data: JSON.parse(storedTrackItData),
          });
        }
      } catch (e) {
        alert('Something went wrong. Please restart the application.');
      }
    };

    getTrackItData().finally(() => {
      RNBootSplash.hide({fade: true});
    });
  }, []);

  useEffect(() => {
    const storeTrackItData = async () => {
      try {
        await AsyncStorage.setItem('@trackItData', JSON.stringify(trackItData));
      } catch (e) {
        alert('Something went wrong. Please restart the application.');
      }
    };

    storeTrackItData();
  }, [trackItData]);

  return (
    <MainContext.Provider value={{trackItData, trackItDataDispatch}}>
      <Home />
    </MainContext.Provider>
  );
};

export default App;
