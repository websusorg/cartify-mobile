import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Styles from '../styles/styles.js';

const NavActiveBar = () => (
  <View
    style={{
      width: '40%',
      position: 'absolute',
      top: -16,
      height: 5,
      backgroundColor: 'white',
      borderRadius: 100,
    }}></View>
);

const ItemSummary = ({nav1, onPress1, nav2, onPress2}) => {
  const route = useRoute();

  return (
    <View style={[Styles.textNormal, Styles.nav]}>
      <TouchableOpacity
        style={[Styles.contentCenter, Styles.width50]}
        onPress={onPress1}>
        {route.name === 'Cart' && <NavActiveBar />}
        <Text style={[Styles.textBig, Styles.textColorWhite]}>{nav1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[Styles.contentCenter, Styles.width50]}
        onPress={onPress2}>
        {route.name === 'Receipts' && <NavActiveBar />}
        <Text style={[Styles.textBig, Styles.textColorWhite]}>{nav2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemSummary;
