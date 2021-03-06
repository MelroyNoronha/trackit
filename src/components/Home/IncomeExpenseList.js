import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SectionList,
  StyleSheet,
} from 'react-native';

import colors from '../../utils/colors';
import strings from '../../utils/strings';
import IncomeExpenseDetailsModal from '../Modal/IncomeExpenseDetails';
import EditIncomeExpenseModal from '../Modal/EditIncomeExpense';
import parseDataForSectionList from '../../functions/parseDataForSectionList';

const IncomeExpenseList = props => {
  const {data} = props;

  const parsedData = parseDataForSectionList(data);

  const [detailsModalVisible, setDetailsModalVisible] = useState(false);

  const [editModalVisible, setEditModalVisible] = useState(false);

  const [selectedItem, setSelectedItem] = useState({});

  const handleItemPress = selectedItem => {
    setSelectedItem(selectedItem);
    setDetailsModalVisible(true);
  };

  const handleEditPress = () => {
    setDetailsModalVisible(false);
    setEditModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <SectionList
        stickySectionHeadersEnabled={false}
        sections={parsedData}
        keyExtractor={(_item, index) => index}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.title}>{title}</Text>
        )}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handleItemPress(item)}>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text
              style={[
                styles.itemValue,
                {color: item.isExpense ? colors.red : colors.green},
              ]}>
              {strings.currencySymbol}
              {item.amount}
            </Text>
          </TouchableOpacity>
        )}
      />

      <IncomeExpenseDetailsModal
        visible={detailsModalVisible}
        setVisible={setDetailsModalVisible}
        data={selectedItem}
        onEditPress={handleEditPress}
      />

      <EditIncomeExpenseModal
        visible={editModalVisible}
        setVisible={setEditModalVisible}
        data={selectedItem}
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
