import React from 'react';
import {View, Text} from 'react-native';

import Styles from '../styles/styles.js';

const ItemSummary = ({itemName, itemQuantity, itemPrice}) => {
  const totalPrice = itemPrice * itemQuantity;

  return (
    <View
      style={[
        Styles.marginHorizontal30,
        Styles.contentAlign,
        Styles.paddingVertical10,
      ]}>
      <View style={[Styles.contentAlign, Styles.width75]}>
        <Text style={Styles.textColorBlack}>{itemQuantity + '  '}</Text>
        <Text style={Styles.textColorBlack}>{itemName}</Text>
      </View>
      <View style={Styles.contentAlign}>
        <Text style={Styles.textColorBlack}>&#8369; {totalPrice}</Text>
      </View>
    </View>
  );
};

export default ItemSummary;
