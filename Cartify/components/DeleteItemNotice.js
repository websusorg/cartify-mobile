import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Styles from '../styles/styles.js';

const DeleteItemNotice = ({onNo, onYes}) => {
  return (
    <View style={Styles.containerOverlay}>
      <View
        style={[Styles.contentCenter, Styles.bgColorWhite, Styles.noticeBox]}>
        <Text>Are you sure you want to</Text>
        <Text>delete this item?</Text>
        <View style={[Styles.contentAlign]}>
          <TouchableOpacity
            style={[
              Styles.bgColorPurple,
              Styles.contentButton,
              Styles.contentCenter,
              Styles.marginAll20,
            ]}
            onPress={onNo}>
            <Text style={Styles.textColorWhite}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.bgColorRed,
              Styles.contentButton,
              Styles.contentCenter,
              Styles.marginAll20,
            ]}
            onPress={onYes}>
            <Text>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default DeleteItemNotice;
