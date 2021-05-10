import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './components/Home';
import parseDataForSectionList from './functions/parseDataForSectionList';

const App = () => {
  const [trackItData, setTrackItData] = useState([]);

  useEffect(() => {
    const getTrackItData = async () => {
      try {
        const trackItData = await AsyncStorage.getItem('@trackItData');

        if (trackItData !== null) {
          const trackItDataParsed = parseDataForSectionList(
            JSON.parse(trackItData),
          );
          setTrackItData(trackItDataParsed);
        } else {
          await AsyncStorage.setItem('@trackItData', JSON.stringify([]));
          setTrackItData([]);
        }
      } catch (e) {
        alert('Something went wrong. Please restart the application.');
      }
    };

    getTrackItData();
  });

  return <Home data={trackItData} />;
};

export default App;
