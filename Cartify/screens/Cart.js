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

const Cart = ({navigation, route}) => {
  const scannedData = useContext(ScanContext);

  const initialDatas = [
    {name: scannedData, price: 1, quantity: 1, total: 1},
    {name: scannedData, price: 1, quantity: 1, total: 1},
    {name: scannedData, price: 1, quantity: 1, total: 1},
  ];

  const [isDelete, setIsDelete] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const [itemData, setItemData] = useState({});
  const [itemList, setItemList] = useState(initialDatas);

  const OpenCamera = () => {
    navigation.navigate('Scan');
  };

  const AddItem = () => {
    // setItemData({});
    setItemData({name: data, price: 1, quantity: 1, total: 1}); // delete later for integration of back end
    setItemList([...itemList, itemData]);
    //setItemData(null);
  };

  const RemoveItem = index => {
    let itemsCopy = [...itemList];
    itemsCopy.splice(index, 1);
    setItemList(itemsCopy);

    HideNotice();
  };

  const HandleIncrement = itemName => {
    const newItemList = [...itemList];
    const newItemData = newItemList.find(data => data.name === itemName);
    newItemData.quantity = newItemData.quantity + 1;
    newItemData.total = newItemData.price * newItemData.quantity;
    setItemList(newItemList);
  };

  const HandleDecrement = itemName => {
    const newItemList = [...itemList];
    const newItemData = newItemList.find(data => data.name === itemName);
    if (newItemData.quantity > 1) {
      newItemData.quantity = newItemData.quantity - 1;
      newItemData.total = newItemData.price * newItemData.quantity;
    }

    setItemList(newItemList);
  };
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
          onYes={() => RemoveItem(itemIndex)}
        />
      ) : null}

      {itemList.length ? (
        <View style={Styles.containerUncenter}>
          <ScrollView
            style={[Styles.containerFlex, Styles.marginBottom10]}
            keyboardShouldPersistTaps="handled">
            {itemList.map((data, index) => {
              return (
                <View style={Styles.containerUncenter} key={index}>
                  <Item
                    key={index}
                    itemName={scannedData}
                    itemPrice={data.price}
                    itemQuantity={data.quantity}
                    itemTotalPrice={data.total}
                    onRemove={() => ShowNotice(index)}
                    onIncrease={() => HandleIncrement(data.name)}
                    onDecrease={() => HandleDecrement(data.name)}
                  />
                </View>
              );
            })}
          </ScrollView>

          <View style={[Styles.bgColorLightPurple, Styles.summary]}>
            <View style={[Styles.marginHorizontal20, Styles.marginVertical10]}>
              <Text style={Styles.textNormal}>Total</Text>
              <Text style={Styles.textSuperBig}>
                {itemList.reduce((total, current) => {
                  return (total = total + current.total);
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

      {!itemList.length ? (
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
