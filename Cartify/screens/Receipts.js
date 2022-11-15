import React, {useState} from 'react';
import {Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';

import Receipt from '../components/Receipt';
import Styles from '../styles/styles.js';

import noReciept from '../assets/noReciept.png';

const Receipts = ({navigation, route}) => {
  const initialData = [
    {date: '12 / 11 / 22', refno: 10909929, price: 100},
    {date: '09 / 22 / 22', refno: 98009890, price: 200},
    {date: '09 / 22 / 22', refno: 98009890, price: 200},
    {date: '09 / 22 / 22', refno: 98009890, price: 200},
    {date: '09 / 22 / 22', refno: 98009890, price: 200},
    {date: '09 / 22 / 22', refno: 98009890, price: 200},
  ];
  const [receiptList, setReceiptList] = useState(initialData);

  return (
    <View style={[Styles.containerUncenter, Styles.bgColorWhite]}>
      <Text
        style={[Styles.textBig, Styles.textColorPurple, Styles.paddingLeft30]}>
        History of Receipts
      </Text>
      {receiptList.length ? (
        <View style={[{height: '80%'}]}>
          <ScrollView
            style={[Styles.containerFlex, Styles.marginVertical10]}
            keyboardShouldPersistTaps="handled">
            {receiptList.map((data, index) => {
              return (
                <View style={Styles.containerUncenter} key={index}>
                  <Receipt
                    key={index}
                    date={data.date}
                    refno={data.refno}
                    price={data.price}
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
    </View>
  );
};

export default Receipts;
