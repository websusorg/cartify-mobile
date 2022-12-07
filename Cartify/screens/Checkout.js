import React, {useState} from 'react';
import moment from 'moment';
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import ItemSummary from '../components/ItemSummary';
import PriceSummary from '../components/PriceSummary';
import Alert from '../components/Alert';
import Styles from '../styles/styles.js';

import Return from '../assets/return.png';

import {useCart} from '../contexts/CartContext';
import {useGlobal} from '../contexts/GlobalContext';

const Checkout = ({navigation, route}) => {
  const {cartItems, removeAllItems} = useCart();
  const [isCancel, setIsCancel] = useState(false);

  const {generatedCode, referenceCode} = route.params;
  const {computeTotalPrice} = useGlobal();

  // console.log(cartItems);

  // const [lastReferenceCode, setLastReferenceCode] = useState(referenceCode);
  // const [checkoutCode, setCheckoutCode] = useState(refreshCode());

  const ReturnClearCart = () => {
    removeAllItems();
    navigation.navigate('Cart');
  };

  const DisplayAlert = () => {
    setIsCancel(true);
  };

  const HideAlert = () => {
    setIsCancel(false);
  };

  const Agree = () => {
    navigation.navigate('Cart');
  };

  const currTime = moment(new Date()).format('MMM DD YYYY HH:mm:ss A');

  const totalPriceToPay = computeTotalPrice(cartItems);

  const vat = (totalPriceToPay * 0.12).toFixed(2);
  const vatSale = (totalPriceToPay - vat).toFixed(2);

  return (
    <View style={[Styles.containerUncenter, Styles.bgColorWhite]}>
      {isCancel ? (
        <Alert
          alertMessage={'Do you want to cancel this order?'}
          onNo={() => HideAlert()}
          onYes={() => Agree()}
        />
      ) : null}
      <View style={Styles.returnButton}>
        <TouchableOpacity onPress={() => DisplayAlert()}>
          <Image source={Return} />
        </TouchableOpacity>

        <Pressable
          style={[
            Styles.checkout,
            Styles.bgColorPurple,
            {
              position: 'absolute',
              height: 30,
              right: 24,
              alignItems: 'center',
            },
          ]}
          onPress={() => ReturnClearCart()}>
          <Text style={{color: '#fff', fontSize: 16, fontWeight: '700'}}>
            Complete
          </Text>
        </Pressable>
      </View>
      <Text
        style={[Styles.textBig, Styles.textColorWhite, Styles.paddingLeft30]}>
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
            {referenceCode.slice(0, 8)}
          </Text>

          <Text style={Styles.textColorBlack}>{currTime}</Text>
        </View>
        {cartItems.map((data, index) => {
          return (
            <View style={Styles.containerUncenter} key={index}>
              {
                <ItemSummary
                  key={index}
                  itemName={data.name}
                  itemPrice={data.price}
                  itemQuantity={data.quantity}
                />
              }
            </View>
          );
        })}
        <View style={[Styles.horizontalLine, Styles.marginHorizontal30]} />

        <PriceSummary
          priceName={'Total:'}
          priceAmount={totalPriceToPay.toFixed(2)}
          hasSign={true}
          moreStyles={
            (Styles.textColorBlack, {fontWeight: '700', fontSize: 16})
          }
        />

        <PriceSummary
          priceName={'Items Purchased:'}
          priceAmount={cartItems.length}
        />
        <PriceSummary
          priceName={'Vatable Sale:'}
          priceAmount={vatSale}
          hasSign
        />
        <PriceSummary priceName={'VAT(12%)'} priceAmount={vat} hasSign />
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
            {generatedCode}
          </Text>
        </View>

        <Pressable
          style={[
            Styles.checkout,
            Styles.bgColorWhite,
            {position: 'absolute', height: 30, top: 24, right: 24},
          ]}
          // onPress={() => setCheckoutCode(refreshCode())}
        >
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
