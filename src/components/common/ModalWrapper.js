import React from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';

import colors from '../../utils/colors';

const ModalWrapper = props => {
  const {visible, title, handleClosePress, children} = props;

  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent
      statusBarTranslucent
      onRequestClose={handleClosePress}>
      <View style={styles.modalBackground}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
              onPress={handleClosePress}
              style={styles.closeTouchable}>
              <Text style={styles.closeIcon}>&#x2715;</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.modalContent}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    zIndex: 0,
    backgroundColor: colors.darkOpacity,
  },
  modalView: {
    flex: 1,
    zIndex: 1,
    marginTop: 80,
    backgroundColor: colors.light,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    textAlign: 'center',
    width: '90%',
    paddingLeft: '10%',
    color: colors.darkText,
    fontSize: 18,
  },
  closeTouchable: {
    padding: 10,
  },
  closeIcon: {
    color: colors.darkText,
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContent: {
    alignItems: 'center',
  },
});

export default ModalWrapper;
