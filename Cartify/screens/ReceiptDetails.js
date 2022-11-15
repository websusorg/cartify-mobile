import React from 'react';
import {Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';

import Receipt from '../components/Receipt';
import ItemSummary from '../components/ItemSummary';
import PriceSummary from '../components/PriceSummary';
import Styles from '../styles/styles.js';

import Return from '../assets/return.png';

const ReceiptDetails = ({refno, time, itemList, total, navigation}) => {
  return (
    <View style={[Styles.containerUncenter, Styles.bgColorWhite]}>
      <View style={Styles.returnButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Receipts')}>
          <Image source={Return} />
        </TouchableOpacity>
      </View>
      <Text
        style={[Styles.textBig, Styles.textColorPurple, Styles.paddingLeft30]}>
        Receipt
      </Text>
      <ScrollView>
        {/* Header */}
        <View style={Styles.containerCenter}>
          <Text
            style={[Styles.textColorBlack, {fontWeight: '700', fontSize: 16}]}>
            Korean Store
          </Text>
          <Text style={Styles.textColorBlack}>
            Brgy. Balagtas, Batangas City Batangas,
          </Text>
          <Text style={Styles.textColorBlack}>Philippines 4200</Text>
        </View>
        {/* List of item */}
        <View style={[Styles.marginHorizontal30, Styles.marginVertical20]}>
          <Text
            style={[Styles.textColorBlack, {fontWeight: '700', fontSize: 16}]}>
            Reference No.
          </Text>

          <Text style={Styles.textColorBlack}>15:23 04/11/22</Text>
        </View>
        <ItemSummary />
        <ItemSummary />
        <ItemSummary />
        <View style={[Styles.horizontalLine, Styles.marginHorizontal30]} />
        <PriceSummary
          priceName={'Subtotal:'}
          priceAmount={100}
          hasSign={true}
        />
        <PriceSummary
          priceName={'Total:'}
          priceAmount={100}
          hasSign={true}
          moreStyles={
            (Styles.textColorBlack, {fontWeight: '700', fontSize: 16})
          }
        />
        <PriceSummary priceName={'Cash:'} />
        <PriceSummary priceName={'Change Due:'} />
        <PriceSummary priceName={'Items Purchased:'} />
        <PriceSummary priceName={'Vatable Sale:'} />
        <PriceSummary priceName={'VAT(12%)'} />
        <PriceSummary priceName={'VAT Exempt Sale:'} />
        <PriceSummary priceName={'Zero Rated Sale:'} />
      </ScrollView>
    </View>
  );
};

export default ReceiptDetails;
