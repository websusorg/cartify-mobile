import React, {Component} from 'react';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Styles from '../styles/styles.js';
import {TouchableOpacity, Text, View, Image} from 'react-native';

import Return from '../assets/return.png';

const Scan = ({navigation, route}) => {
  // onSuccess = e => {
  //   Linking.openURL(e.data).catch(err =>
  //     console.error('An error occured', err),
  //   );
  // };

  return (
    <View>
      <View style={Styles.returnButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Receipts')}>
          <Image source={Return} />
        </TouchableOpacity>
      </View>
      <QRCodeScanner
        // onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={Styles.centerText}>Scans product's qrcode</Text>
        }
        bottomContent={
          <TouchableOpacity style={Styles.buttonTouchable}>
            <Text style={Styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default Scan;
