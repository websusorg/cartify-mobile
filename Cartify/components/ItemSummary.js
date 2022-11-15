import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Styles from '../styles/styles.js';

const ItemSummary = ({itemName, itemQuantity, itemTotalPrice}) => {
  return (
    <View
      style={[
        Styles.marginHorizontal30,
        Styles.contentAlign,
        Styles.paddingVertical10,
      ]}>
      <View style={[Styles.contentAlign, Styles.width75]}>
        <Text style={Styles.textColorBlack}>QTY. {itemQuantity} 1</Text>
        <Text style={Styles.textColorBlack}>{itemName} pepsi</Text>
      </View>
      <View style={Styles.contentAlign}>
        <Text style={Styles.textColorBlack}>&#8369; {itemTotalPrice} 100</Text>
      </View>
    </View>
  );
};

export default ItemSummary;
