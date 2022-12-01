import React, {useState} from 'react';
import {Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';

import Receipt from '../components/Receipt';
import Styles from '../styles/styles.js';
import Navigation from '../components/Navigation';
import Head from '../components/Head';

import noReciept from '../assets/noReciept.png';

import {useReceipt} from '../contexts/ReceiptContext';
import {useGlobal} from '../contexts/GlobalContext';

const Receipts = ({navigation, route}) => {
  const {receiptList} = useReceipt();
  const {computeTotalPrice} = useGlobal();

  const NavigateToCart = () => {
    navigation.navigate('Cart');
  };

  const NavigateToReceipts = () => {
    navigation.navigate('Receipts');
  };

  return (
    <View style={[Styles.containerUncenter, Styles.bgColorWhite]}>
      <Head />

      {receiptList.length ? (
        <View style={Styles.containerUncenter}>
          <Text
            style={[
              Styles.textBig,
              Styles.textColorPurple,
              Styles.paddingLeft30,
            ]}>
            History of Receipts
          </Text>
          <ScrollView
            style={[Styles.containerFlex, Styles.marginVertical10]}
            keyboardShouldPersistTaps="handled">
            {receiptList.map((data, index) => {
              return (
                <View style={Styles.containerUncenter} key={index}>
                  <Receipt
                    key={index}
                    date={data.date}
                    refno={data.referenceNo}
                    price={computeTotalPrice(data.items)}
                    onPress={navigation}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      ) : null}
      {!receiptList.length ? (
        <View style={Styles.containerCenter}>
          <Image source={noReciept}></Image>
          <Text style={[Styles.textNormal, Styles.marginVertical10]}>
            Opps! It looks a bit empty here
          </Text>
        </View>
      ) : null}
      <Navigation
        nav1={'Cart'}
        onPress1={NavigateToCart}
        nav2={'Receipt'}
        onPress2={NavigateToReceipts}
      />
    </View>
  );
};

export default Receipts;
