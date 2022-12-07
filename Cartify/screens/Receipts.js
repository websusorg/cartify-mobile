import React from 'react';
import moment from 'moment';
import {Image, Text, View, ScrollView} from 'react-native';

import Receipt from '../components/Receipt';
import Styles from '../styles/styles.js';
import Navigation from '../components/Navigation';
import Head from '../components/Head';
import Loading from '../components/Loading';
import noReciept from '../assets/noReciept.png';

import {useRecoverReceipt} from '../integration/cartaction';

const Receipts = ({navigation, route}) => {
  const {data, isValidating} = useRecoverReceipt();

  const NavigateToCart = () => {
    navigation.navigate('Cart');
  };

  const NavigateToReceipts = () => {
    navigation.navigate('Receipts');
  };

  if (isValidating) {
    return <Loading />;
  }

  const receiptList = data?.map(product => ({
    date: moment(product.createdAt).format('MM DD YYYY'),
    refno: product._id,
    price: product.total,
    generatedCode: product.generatedCode,
  }));

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
            {receiptList.map((mapData, index) => {
              return (
                <View style={Styles.containerUncenter} key={index}>
                  <Receipt
                    key={index}
                    date={mapData.date}
                    refno={mapData.refno}
                    price={mapData.price}
                    generatedCode={mapData.generatedCode}
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
          <Image source={noReciept} />
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
