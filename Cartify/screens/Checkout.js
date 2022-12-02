import React, {useState} from 'react';
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
import Styles from '../styles/styles.js';

import Return from '../assets/return.png';

import {useCart} from '../contexts/CartContext';
import {useGlobal} from '../contexts/GlobalContext';

const Checkout = ({navigation, route}) => {
  const {cartItems, removeAllItems} = useCart();
  const {
    referenceCode,
    getReferenceCode,
    refreshCode,
    getTimeDate,
    computeTotalPrice,
  } = useGlobal();

  const [lastReferenceCode, setLastReferenceCode] = useState(referenceCode);
  const [checkoutCode, setCheckoutCode] = useState(refreshCode());

  const ReturnClearCart = () => {
    removeAllItems();
    navigation.navigate('Cart');
  };
  // const GenerateReferenceCode = () => {
  //   return Math.floor(Math.random() * 999999999999999) + 100000000000001;
  // };

  // const current = new Date();
  // const timeDate = `${current.getHours()}:${current.getMinutes()} ${current.getDate()}/${
  //   current.getMonth() + 1
  // }/${current.getFullYear()}`;

  const totalPriceToPay = computeTotalPrice(cartItems);

  return (
    <View style={[Styles.containerUncenter, Styles.bgColorWhite]}>
      <View style={Styles.returnButton}>
        <TouchableOpacity onPress={() => ReturnClearCart()}>
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
            {getReferenceCode(lastReferenceCode)}
          </Text>

          <Text style={Styles.textColorBlack}>{getTimeDate()}</Text>
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
          priceName={'Subtotal:'}
          priceAmount={totalPriceToPay}
          hasSign={true}
        />
        <PriceSummary
          priceName={'Total:'}
          priceAmount={totalPriceToPay}
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
            {checkoutCode}
          </Text>
        </View>

        <Pressable
          style={[Styles.checkout, Styles.bgColorWhite]}
          onPress={() => setCheckoutCode(refreshCode())}>
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
