import React, {Component, createContext, useContext, useState} from 'react';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Styles from '../styles/styles.js';
import {TouchableOpacity, Linking, Text, View, Image} from 'react-native';

import Return from '../assets/return.png';

const ScanContext = createContext();

const Scan = ({navigation, route}) => {
  const [data, setData] = useState('');

  const onSuccess = e => {
    navigation.navigate('Cart');
    setData(e.data); // data QR Code contains
    console.log(e.data);
  };

  return (
    <View>
      <View style={Styles.returnButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Receipts')}>
          <Image source={Return} />
        </TouchableOpacity>
      </View>
      <QRCodeScanner
        onRead={onSuccess}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={Styles.centerText}>Scans product's qrcode</Text>
        }
        bottomContent={
          <TouchableOpacity style={Styles.buttonTouchable}>
            <Text style={Styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />

      <ScanContext.Provider value={data}></ScanContext.Provider>
    </View>
  );
};

export const ScanOrder = () => useContext(ScanContext);

export default Scan;
