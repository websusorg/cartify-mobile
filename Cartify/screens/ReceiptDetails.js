import React from 'react';
import {Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';

import ItemSummary from '../components/ItemSummary';
import PriceSummary from '../components/PriceSummary';
import Styles from '../styles/styles.js';

import Return from '../assets/return.png';

import {useGlobal} from '../contexts/GlobalContext';
import {useReceipt} from '../contexts/ReceiptContext';

import {useGetCart} from '../integration/cartaction';

const ReceiptDetails = ({navigation, route}) => {
  const {generatedCode} = route.params;

  const {data, error, isValidating} = useGetCart(generatedCode);

  if (isValidating)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  const vat = (data?.total * 0.12).toFixed(2);
  const vatSale = (data?.total - vat).toFixed(2);

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
            {data?._id.slice(0, 8)}
          </Text>

          <Text style={Styles.textColorBlack}>15:23 04/11/22</Text>
        </View>
        {data?.products?.map((p, index) => {
          return (
            <View style={Styles.containerUncenter} key={index}>
              {
                <ItemSummary
                  key={index}
                  itemName={p.product.name}
                  itemPrice={p.product.price}
                  itemQuantity={p.quantity}
                />
              }
            </View>
          );
        })}
        <View style={[Styles.horizontalLine, Styles.marginHorizontal30]} />
        <PriceSummary
          priceName={'Total:'}
          priceAmount={data?.total.toFixed(2)}
          hasSign={true}
          moreStyles={
            (Styles.textColorBlack, {fontWeight: '700', fontSize: 16})
          }
        />
        <PriceSummary
          priceName={'Cash:'}
          priceAmount={data?.paymentAmount.toFixed(2)}
          hasSign
        />
        <PriceSummary
          priceName={'Change Due:'}
          priceAmount={data?.paymentAmount - data?.total}
          hasSign
        />
        <PriceSummary
          priceName={'Items Purchased:'}
          priceAmount={data?.products.length}
        />
        <PriceSummary
          priceName={'Vatable Sale:'}
          priceAmount={vatSale}
          hasSign
        />
        <PriceSummary priceName={'VAT(12%)'} priceAmount={vat} hasSign />
      </ScrollView>
    </View>
  );
};

export default ReceiptDetails;
