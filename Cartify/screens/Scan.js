import React, {Component, Dimensions, useContext, useState} from 'react';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Styles from '../styles/styles.js';
import {TouchableOpacity, Linking, Text, View, Image} from 'react-native';

import Return from '../assets/return.png';
import Scanner from '../assets/scan.png';
import {useCart} from '../contexts/CartContext.js';

const Scan = ({navigation, route}) => {
  const {addItem} = useCart();

  const onSuccess = e => {
    navigation.navigate('Cart');
    const data = JSON.parse(e.data);
    console.log(data);
    // addItem(data);
    addItem({...data, quantity: 1});
  };

  return (
    <View>
      <QRCodeScanner
        reactivate={true}
        showMarker={true}
        fadeIn={true}
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        cameraStyle={{marginTop: '50%'}}
      />
      {/* <Image source={Scanner} style={{marginTop: -310}} /> */}
      <TouchableOpacity
        style={Styles.returnButton}
        onPress={() => navigation.navigate('Cart')}>
        <Image source={Return} />
      </TouchableOpacity>
      <View style={{alignItems: 'center', marginTop: 25}}>
        <Text style={Styles.textNormal}>Scan the QR Code of the item</Text>
      </View>
    </View>
  );
};

export default Scan;
