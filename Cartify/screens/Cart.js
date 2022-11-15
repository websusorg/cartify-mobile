import React, {useState, useEffect} from 'react';
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

import addItem from '../assets/addItem.png';
import add from '../assets/add.png';

const Cart = ({navigation, route}) => {
  const [isDelete, setIsDelete] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const [itemData, setItemData] = useState({});
  const [itemList, setItemList] = useState([]);

  const OpenCamera = () => {
    navigation.navigate('Scan');
  };

  const AddItem = () => {
    // setItemData({});
    setItemData({name: 'Bigas', price: 1, quantity: 1, total: 1}); // delete later for integration of back end
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
  return (
    <View style={[Styles.containerUncenter, Styles.bgColorWhite]}>
      {isDelete ? (
        <DeleteItemNotice
          onNo={HideNotice}
          onYes={() => RemoveItem(itemIndex)}
        />
      ) : null}

      {itemList.length ? (
        <View style={Styles.height100}>
          <ScrollView
            style={[Styles.containerFlex, Styles.marginBottom10]}
            keyboardShouldPersistTaps="handled">
            {itemList.map((data, index) => {
              return (
                <View style={Styles.containerUncenter} key={index}>
                  <Item
                    key={index}
                    itemName={data.name}
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
              <Text style={[Styles.textSuperBig, Styles.marginTop10]}>
                {itemList.reduce((total, current) => {
                  return (total = total + current.total);
                }, 0)}
              </Text>
            </View>

            <Pressable style={[Styles.checkout, Styles.bgColorWhite]}>
              <Text style={{color: '#656ACC', fontSize: 16, fontWeight: '700'}}>
                {' '}
                Checkout{' '}
              </Text>
            </Pressable>

            <Pressable onPress={AddItem} style={Styles.floatingButton}>
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
    </View>
  );
};

export default Cart;