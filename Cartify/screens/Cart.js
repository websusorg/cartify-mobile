import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';

import Item from '../components/Item';
import Styles from '../styles/styles.js';
import Alert from '../components/Alert';
import Navigation from '../components/Navigation';
import Head from '../components/Head';

import addItem from '../assets/addItem.png';
import add from '../assets/add.png';

import {useCart} from '../contexts/CartContext';
import {useGlobal} from '../contexts/GlobalContext';

import {useCheckout} from '../integration/cartaction';

import DeviceInfo from 'react-native-device-info';

const Cart = ({navigation, route}) => {
  const {cartItems, addQuantity, minusQuantity, removeItem} = useCart();
  const {computeTotalPrice} = useGlobal();

  const [isDelete, setIsDelete] = useState(false);
  const [id, setID] = useState();

  const OpenCamera = () => {
    navigation.navigate('Scan');
  };

  const Agree = id => {
    removeItem(id);
    HideAlert();
  };
  const DisplayAlert = id => {
    setIsDelete(true);
    setID(id);
  };
  const HideAlert = () => {
    setIsDelete(false);
  };

  const NavigateToCart = () => {
    navigation.navigate('Cart');
  };

  const NavigateToReceipts = () => {
    navigation.navigate('Receipts');
  };

  const {data, error, isValidating, checkout} = useCheckout();

  const cartPost = useMemo(
    () => ({
      products: cartItems.map(item => ({
        product: item._id,
        quantity: item.quantity,
      })),
      deviceId: DeviceInfo.getDeviceId(),
      total: computeTotalPrice(cartItems),
    }),
    [cartItems],
  );
  const checkoutCart = useCallback(async () => {
    // console.log(cartPost);
    await checkout(cartPost);
  }, [cartPost]);

  useEffect(() => {
    (() => {
      if (!data && !error) {
        return;
      }
      if (error) {
        return console.log({error});
      }

      navigation.navigate('Checkout', {
        generatedCode: data?.generatedCode,
        referenceCode: data?._id,
      });
    })();
  }, [data, error]);

  return (
    <View style={[Styles.containerUncenter, Styles.bgColorWhite]}>
      <Head />

      {isDelete ? (
        <Alert
          alertMessage={'Are you sure you want to \n\t\t\t delete this item?'}
          onNo={HideAlert}
          onYes={() => Agree(id)}
        />
      ) : null}

      {cartItems.length ? (
        <View style={[Styles.containerUncenter]}>
          <ScrollView
            style={[Styles.containerFlex, Styles.marginBottom10]}
            keyboardShouldPersistTaps="handled">
            {cartItems.map((mapData, index) => {
              return (
                <View style={Styles.containerUncenter} key={index}>
                  <Item
                    key={index}
                    itemName={mapData.name}
                    itemPrice={mapData.price}
                    itemQuantity={mapData.quantity}
                    onRemove={() => DisplayAlert(mapData._id)}
                    onIncrease={() => addQuantity(mapData._id)}
                    onDecrease={() => minusQuantity(mapData._id)}
                  />
                </View>
              );
            })}
          </ScrollView>

          <View style={[Styles.bgColorLightPurple, Styles.summary]}>
            <View style={[Styles.marginHorizontal30, Styles.marginVertical20]}>
              <Text style={Styles.textNormal}>Total</Text>
              <Text style={Styles.textSuperBig}>
                {computeTotalPrice(cartItems)}
              </Text>
            </View>

            <Pressable
              style={[
                Styles.checkout,
                Styles.bgColorWhite,
                {position: 'absolute', height: 30, top: 30, right: 40},
              ]}
              onPress={checkoutCart}>
              <Text style={{color: '#656ACC', fontSize: 16, fontWeight: '700'}}>
                {' '}
                Checkout{' '}
              </Text>
            </Pressable>

            <Pressable onPress={OpenCamera} style={Styles.floatingButton}>
              <Image source={add} />
            </Pressable>
          </View>
        </View>
      ) : null}

      {!cartItems.length ? (
        <View style={Styles.containerCenter}>
          <TouchableOpacity onPress={OpenCamera} style={Styles.contentCenter}>
            <Image source={addItem} />

            <Text style={[Styles.textNormal, Styles.marginVertical10]}>
              Please add an item
            </Text>

            <Image source={add} />
          </TouchableOpacity>
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

export default Cart;
