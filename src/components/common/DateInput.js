import React, {useState} from 'react';
import {TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import colors from '../../utils/colors';

const DateInput = props => {
  const {date, setDate, maximumDate} = props;

  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const formattedDateString = new Date(date).toDateString();

  const handlePress = () => {
    setDatePickerVisible(true);
  };

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) setDate(selectedDate);
    setDatePickerVisible(false);
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
        <DateTimePicker
          value={date}
          onChange={handleDateChange}
          mode="date"
          maximumDate={maximumDate}
          display="spinner"
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: '90%',
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.borderGrey,
    borderRadius: 10,

    marginVertical: 15,
    paddingHorizontal: 15,
    color: colors.darkText,
  },
});

export default DateInput;
