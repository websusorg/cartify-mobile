import React from 'react';

import DeviceInfo from 'react-native-device-info';
import {Text, View, Image} from 'react-native';

import Styles from '../styles/styles.js';

import logo from '../assets/Logo.jpg';

const Head = () => {
  return (
    <View
      style={[
        Styles.bgColorWhite,
        Styles.contentCenter,
        Styles.paddingVertical10,
      ]}>
      <Image source={logo} />
      <Text>ID: {DeviceInfo.getDeviceId()}</Text>
    </View>
  );
};

export default Head;
