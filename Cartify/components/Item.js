import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Styles from '../styles/styles.js';

const Item = ({
  itemName,
  itemPrice,
  itemQuantity,
  itemTotalPrice,
  onRemove,
  onIncrease,
  onDecrease,
}) => {
  const total = itemPrice * itemQuantity;

  return (
    <View
      style={[
        Styles.componentRect,
        Styles.bgColorLightPurple,
        Styles.marginHorizontal10,
      ]}>
      <View style={[Styles.marginHorizontal20, Styles.marginVertical10]}>
        <Text style={Styles.textNormal}>{itemName}</Text>
        <Text style={[Styles.textSuperBig, Styles.marginTop10]}>
          &#8369;{total}
        </Text>
      </View>

      {/* Quantity Counter */}
      <View style={Styles.counter}>
        <TouchableOpacity
          style={Styles.counterButtonNegative}
          onPress={onDecrease}>
          <Text style={[Styles.marginHorizontal10, Styles.textColorBlack]}>
            &#8722;
          </Text>
        </TouchableOpacity>

        <Text style={Styles.marginHorizontal10}>{itemQuantity}</Text>

        <TouchableOpacity
          style={Styles.counterButtonPositive}
          onPress={onIncrease}>
          <Text style={[Styles.marginHorizontal10, Styles.textColorWhite]}>
            &#43;
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onRemove} style={Styles.contentCloseButton}>
        <Text style={[Styles.textSmall, Styles.textColorRed]}>&#x2715;</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
