import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Styles from '../styles/styles.js';

const Receipt = ({date, refno, price, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          Styles.componentRect,
          Styles.bgColorLightPurple,
          Styles.marginHorizontal10,
          Styles.contentAlign,
        ]}
        onPress={() =>
          onPress.navigate('ReceiptSummary', {referenceNo: refno})
        }>
        <View style={[Styles.marginAll10, Styles.subDetails]}>
          <Text style={Styles.textNormal}>{date}</Text>
          <Text style={[Styles.textBig, Styles.marginTop10]}>{refno}</Text>
        </View>
        <View style={[Styles.marginAll10]}>
          <Text style={Styles.textSmall}>Total Price:</Text>
          <Text style={[Styles.textNormal]}>&#8369; {price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Receipt;
