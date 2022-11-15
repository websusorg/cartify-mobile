import React, {Component} from 'react';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Styles from '../styles/styles.js';
import {TouchableOpacity, Text, StatusBar, Linking, View} from 'react-native';

const Scan = prop => {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  return (
    <View>
      <QRCodeScanner
        style={[Styles.containerUncenter, Styles.bgColorWhite]}
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={Styles.centerText}>
            Go to{' '}
            <Text style={Styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
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
