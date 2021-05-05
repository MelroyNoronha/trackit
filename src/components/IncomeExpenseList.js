import React from 'react';
import {View, Text, SectionList, StyleSheet} from 'react-native';

import colors from '../utils/colors';

const IncomeExpenseList = props => {
  const {data} = props;

  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(_item, index) => index}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.title}>{title}</Text>
        )}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text
              style={[
                styles.itemValue,
                {color: item.isExpense ? colors.red : colors.green},
              ]}>
              {item.value}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGrey,
  },
  title: {
    alignSelf: 'center',
    marginTop: 15,
    color: colors.darkText,
    fontSize: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderWidth: 1,
    borderColor: colors.borderGrey,
    borderRadius: 10,
    backgroundColor: colors.light,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  itemDescription: {
    color: colors.darkText,
    fontSize: 14,
  },
  itemValue: {
    fontSize: 14,
  },
});

export default IncomeExpenseList;
