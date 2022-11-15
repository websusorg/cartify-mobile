import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Styles from '../styles/styles.js';

const PriceSummary = ({priceName, priceAmount, hasSign, moreStyles}) => {
  return (
    <View
      style={[
        Styles.marginHorizontal30,
        Styles.contentAlign,
        Styles.paddingTop10,
      ]}>
      <View style={[Styles.contentAlign, Styles.width75]}>
        <Text style={[Styles.textColorBlack, moreStyles]}>{priceName}</Text>
      </View>
      <View style={Styles.contentAlign}>
        <Text style={Styles.textColorBlack}>
          {hasSign ? <Text>&#8369; </Text> : null}
          {priceAmount}
        </Text>
      </View>
    </View>
  );
};

export default PriceSummary;
