import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SectionList,
  StyleSheet,
} from 'react-native';

import colors from '../utils/colors';
import IncomeExpenseDetailsModal from './IncomeExpenseDetailsModal';
import EditIncomeExpenseModal from './EditIncomeExpenseModal';

const IncomeExpenseList = props => {
  const {data} = props;

  const [detailsModalVisible, setDetailsModalVisible] = useState(false);

  const [editModalVisible, setEditModalVisible] = useState(false);

  const [selectedItem, setSelectedItem] = useState({});

  const handleItemPress = selectedItem => {
    setSelectedItem(selectedItem);
    setDetailsModalVisible(true);
  };

  const handleDetailsModalClosePress = () => {
    setDetailsModalVisible(false);
  };

  const handleDetailsModalRequestClose = () => {
    setDetailsModalVisible(false);
  };

  const handleEditModalClosePress = () => {
    setEditModalVisible(false);
  };

  const handleEditModalRequestClose = () => {
    setEditModalVisible(false);
  };

  const handleEditPress = () => {
    setDetailsModalVisible(false);
    setEditModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
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
              {item.value}
            </Text>
          </TouchableOpacity>
        )}
      />

      <IncomeExpenseDetailsModal
        visible={detailsModalVisible}
        onClosePress={handleDetailsModalClosePress}
        onRequestClose={handleDetailsModalRequestClose}
        data={selectedItem}
        onEditPress={handleEditPress}
      />

      <EditIncomeExpenseModal
        visible={editModalVisible}
        onClosePress={handleEditModalClosePress}
        onRequestClose={handleEditModalRequestClose}
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
