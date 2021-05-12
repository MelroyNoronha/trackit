import React, {useState} from 'react';
import {TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';

import colors from '../../utils/colors';

const DateInput = props => {
  const {date, setDate} = props;

  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const formattedDateString = new Date(date).toDateString();

  const handlePress = () => {
    setDatePickerVisible(!datePickerVisible);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.touchable}>
      <TextInput
        style={styles.textInput}
        value={formattedDateString}
        placeholder="Date"
        placeholderTextColor={colors.borderGrey}
        editable={false}
      />
      {datePickerVisible && (
        <DatePicker date={date} onDateChange={setDate} mode="date" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: '90%',
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.borderGrey,
    marginVertical: 15,
  },
  textInput: {
    paddingLeft: 15,
    paddingVertical: 0,
    color: colors.darkText,
  },
});

export default DateInput;
