import React from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import Receipt from '../components/Receipt';
import ItemSummary from '../components/ItemSummary';
import PriceSummary from '../components/PriceSummary';
import Styles from '../styles/styles.js';

import Return from '../assets/return.png';

const Checkout = ({navigation, route}) => {
  return (
    <View style={[Styles.containerUncenter, Styles.bgColorWhite]}>
      <View style={Styles.returnButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image source={Return} />
        </TouchableOpacity>
      </View>
      <Text
        style={[Styles.textBig, Styles.textColorPurple, Styles.paddingLeft30]}>
        Checkout
      </Text>
      <ScrollView style={Styles.marginBottom30}>
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
        <ItemSummary />
        <ItemSummary />
        <ItemSummary />
        <ItemSummary />
        <ItemSummary />
        <ItemSummary />
        <ItemSummary />
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
      </ScrollView>
      <View style={[Styles.bgColorPurple, Styles.summary]}>
        <View
          style={{
            position: 'absolute',
            height: 30,
            top: 24,
            left: 24,
            borderRadius: 10,

            paddingHorizontal: 24,
            paddingVertical: 4,
          }}>
          <Text style={[Styles.textBig, Styles.textColorWhite, {height: 25}]}>
            X166712
          </Text>
        </View>

        <Pressable
          style={[Styles.checkout, Styles.bgColorWhite]}
          onPress={() => navigation.navigate('Checkout')}>
          <Text style={{color: '#656ACC', fontSize: 16, fontWeight: '700'}}>
            {' '}
            Refresh Code{' '}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Checkout;
