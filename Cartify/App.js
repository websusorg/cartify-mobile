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
import Styles from './styles/styles.js';

import Cart from './screens/Cart';
import Scan from './screens/Scan';
import Checkout from './screens/Checkout';
import Receipts from './screens/Receipts';
import ReceiptDetails from './screens/ReceiptDetails';

import logo from './assets/Logo.jpg';
import CartProvider from './contexts/CartContext.js';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <CartProvider>
      <NavigationContainer ref={navigationRef} style={Styles.bgColorWhite}>
        <Stack.Navigator
          initialRouteName="Cart"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Scan" component={Scan} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="Receipts" component={Receipts} />
          <Stack.Screen name="ReceiptSummary" component={ReceiptDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
