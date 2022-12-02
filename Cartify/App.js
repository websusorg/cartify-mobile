/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Styles from './styles/styles.js';
import {SWRConfig} from 'swr';

import Cart from './screens/Cart';
import Scan from './screens/Scan';
import Checkout from './screens/Checkout';
import Receipts from './screens/Receipts';
import ReceiptDetails from './screens/ReceiptDetails';
import swrConfig from './lib/swrConfig';

import CartProvider from './contexts/CartContext.js';
import ReceiptProvider from './contexts/ReceiptContext.js';
import GlobalProvider from './contexts/GlobalContext.js';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <SWRConfig value={swrConfig}>
      <GlobalProvider>
        <CartProvider>
          <ReceiptProvider>
            <NavigationContainer
              ref={navigationRef}
              style={Styles.bgColorWhite}>
              <Stack.Navigator
                initialRouteName="Cart"
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="Scan" component={Scan} />
                <Stack.Screen name="Checkout" component={Checkout} />
                <Stack.Screen name="Receipts" component={Receipts} />
                <Stack.Screen
                  name="ReceiptSummary"
                  component={ReceiptDetails}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </ReceiptProvider>
        </CartProvider>
      </GlobalProvider>
    </SWRConfig>
  );
};

export default App;
