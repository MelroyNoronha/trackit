import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

import colors from '../../utils/colors';

const CustomTextInput = props => {
  const {value, onChangeText, placeholder, keyboardType} = props;

  const [borderColor, setBorderColor] = useState(colors.borderGrey);

  const handleInputFocus = () => {
    setBorderColor(colors.primary);
  };

  const handleInputBlur = () => {
    setBorderColor(colors.borderGrey);
  };

  return (
    <TextInput
      style={[
        styles.textInput,
        {
          borderColor,
        },
      ]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={colors.borderGrey}
      keyboardType={keyboardType}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: colors.darkText,
  },
});

export default CustomTextInput;
