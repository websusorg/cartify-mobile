import React from 'react';

import {Text, View, Image} from 'react-native';

import Styles from '../styles/styles.js';

import logo from '../assets/Logo.jpg';

import {useGlobal} from '../contexts/GlobalContext';

const Head = () => {
  const {getDeviceId} = useGlobal();

  return (
    <View
      style={[
        Styles.bgColorWhite,
        Styles.contentCenter,
        Styles.paddingVertical10,
      ]}>
      <Image source={logo} />
      <Text>ID: {getDeviceId()}</Text>
    </View>
  );
};

export default Head;
