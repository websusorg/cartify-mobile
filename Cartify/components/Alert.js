import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import Styles from '../styles/styles.js';

const Alert = ({alertMessage, onNo, onYes}) => {
  return (
    <View style={Styles.containerOverlay}>
      <View
        style={[Styles.contentCenter, Styles.bgColorWhite, Styles.noticeBox]}>
        <Text>{alertMessage}</Text>
        <View style={Styles.alertButtons}>
          <TouchableOpacity
            style={[
              Styles.bgColorPurple,
              Styles.contentButton,
              Styles.contentCenter,
              Styles.marginAll10,
            ]}
            onPress={onNo}>
            <Text style={Styles.textColorWhite}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.bgColorRed,
              Styles.contentButton,
              Styles.contentCenter,
              Styles.marginAll10,
            ]}
            onPress={onYes}>
            <Text>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Alert;
