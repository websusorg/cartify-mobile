/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DeviceInfo from 'react-native-device-info';
import {
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styles from './styles/styles.js';

import Cart from './screens/Cart';
import Scan from './screens/Scan';
import Receipts from './screens/Receipts';
import ReceiptDetails from './screens/ReceiptDetails';

import logo from './assets/Logo.jpg';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef} style={Styles.bgColorWhite}>
      <View
        style={[
          Styles.bgColorWhite,
          Styles.contentCenter,
          Styles.paddingVertical10,
        ]}>
        <Image source={logo} />
        <Text>
          ID: {DeviceInfo.getCodename() + '-' + DeviceInfo.getDeviceId()}
        </Text>
      </View>
      <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Receipts" component={Receipts} />
        <Stack.Screen name="ReceiptSummary" component={ReceiptDetails} />
      </Stack.Navigator>
      <View style={[Styles.textNormal, Styles.nav]}>
        <TouchableOpacity
          style={[Styles.contentCenter, Styles.width50]}
          onPress={() => navigationRef.navigate('Cart')}>
          <Text style={[Styles.textBig, Styles.textColorWhite]}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.contentCenter, Styles.width50]}
          onPress={() => navigationRef.navigate('Receipts')}>
          <Text style={[Styles.textBig, Styles.textColorWhite]}>Receipts</Text>
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
};

export default App;
