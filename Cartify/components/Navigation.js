import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Styles from '../styles/styles.js';

const ItemSummary = ({nav1, onPress1, nav2, onPress2}) => {
  return (
    <View style={[Styles.textNormal, Styles.nav]}>
      <TouchableOpacity
        style={[Styles.contentCenter, Styles.width50]}
        onPress={onPress1}>
        <Text style={[Styles.textBig, Styles.textColorWhite]}>{nav1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[Styles.contentCenter, Styles.width50]}
        onPress={onPress2}>
        <Text style={[Styles.textBig, Styles.textColorWhite]}>{nav2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemSummary;
