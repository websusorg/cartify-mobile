import React, {useState, useEffect, useContext} from 'react';
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
import DeleteItemNotice from '../components/DeleteItemNotice';
import Navigation from '../components/Navigation';
import Head from '../components/Head';
import ScanContext from './Scan';

import addItem from '../assets/addItem.png';
import add from '../assets/add.png';
import {useCart} from '../contexts/CartContext';

const Cart = ({navigation, route}) => {
  const {cartItems, addQuantity, minusQuantity, removeItem} = useCart();

  const [isDelete, setIsDelete] = useState(false);

  const OpenCamera = () => {
    navigation.navigate('Scan');
  };

  // const AddItem = () => {
  //   // setItemData({});
  //   setItemData({name: data, price: 1, quantity: 1, total: 1}); // delete later for integration of back end
  //   setItemList([...itemList, itemData]);
  //   //setItemData(null);
  // };

  // const RemoveItem = index => {
  //   let itemsCopy = [...itemList];
  //   itemsCopy.splice(index, 1);
  //   setItemList(itemsCopy);

  //   HideNotice();
  // };

  const ShowNotice = index => {
    setIsDelete(true);
    setItemIndex(index);
  };
  const HideNotice = () => {
    setIsDelete(false);
  };

  const NavigateToCart = () => {
    navigation.navigate('Cart');
  };

  const NavigateToReceipts = () => {
    navigation.navigate('Receipts');
  };

  return (
    <View style={[Styles.containerUncenter, Styles.bgColorWhite]}>
      <Head />

      {isDelete ? (
        <DeleteItemNotice
          onNo={HideNotice}
          onYes={() => removeItem(itemIndex)}
        />
      ) : null}

      {cartItems.length ? (
        <View style={[Styles.containerUncenter]}>
          <ScrollView
            style={[Styles.containerFlex, Styles.marginBottom10]}
            keyboardShouldPersistTaps="handled">
            {cartItems.map((data, index) => {
              return (
                <View style={Styles.containerUncenter} key={index}>
                  <Item
                    key={index}
                    itemName={data.name}
                    itemPrice={data.price}
                    itemQuantity={data.quantity}
                    itemTotalPrice={data.total}
                    onRemove={() => removeItem(data.id)}
                    onIncrease={() => addQuantity(data.id)}
                    onDecrease={() => minusQuantity(data.id)}
                  />
                </View>
              );
            })}
          </ScrollView>

          <View style={[Styles.bgColorLightPurple, Styles.summary]}>
            <View style={[Styles.marginHorizontal20, Styles.marginVertical10]}>
              <Text style={Styles.textNormal}>Total</Text>
              <Text style={Styles.textSuperBig}>
                {cartItems.reduce((total, current) => {
                  return (total += current.price * current.quantity);
                }, 0)}
              </Text>
            </View>

            <Pressable
              style={[Styles.checkout, Styles.bgColorWhite]}
              onPress={() => navigation.navigate('Checkout')}>
              <Text style={{color: '#656ACC', fontSize: 16, fontWeight: '700'}}>
                {' '}
                Checkout{' '}
              </Text>
            </Pressable>

            <Pressable onPress={OpenCamera} style={Styles.floatingButton}>
              <Image source={add}></Image>
            </Pressable>
          </View>
        </View>
      ) : null}

      {!cartItems.length ? (
        <View style={Styles.containerCenter}>
          <TouchableOpacity onPress={OpenCamera} style={Styles.contentCenter}>
            <Image source={addItem}></Image>

            <Text style={[Styles.textNormal, Styles.marginVertical10]}>
              Please add an item
            </Text>

            <Image source={add}></Image>
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
