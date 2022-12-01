import {createContext, useCallback, useContext, useMemo, useState} from 'react';

const CartContext = createContext(null);

const CartProvider = ({children}) => {
  const proxyItems = [
    {id: 1, name: 'Rice', price: 45.0, quantity: 5},
    {id: 2, name: 'Coke', price: 15.0, quantity: 2},
    {id: 3, name: 'Fruties', price: 8.0, quantity: 2},
  ];

  const [cartItems, setCartItems] = useState(proxyItems);

  // const addItem = item => setCartItems(prev => [...prev, item]);

  const addItem = item => {
    if (cartItems.some(obj => obj.id == item.id)) {
      addQuantity(item.id);
    } else {
      setCartItems(prev => [...prev, item]);
    }
  };

  const removeItem = useCallback(
    itemId => {
      return setCartItems(prevItems =>
        prevItems.filter(item => item.id !== itemId),
      );
    },
    [cartItems],
  );

  const removeAllItems = useCallback(() => {
    return setCartItems([]);
  });

  const addQuantity = useCallback(
    itemId => {
      const newState = cartItems.map(item =>
        item.id === itemId ? {...item, quantity: (item.quantity += 1)} : item,
      );

      setCartItems(newState);
    },
    [cartItems],
  );

  const minusQuantity = useCallback(
    itemId => {
      const newState = cartItems.map(item =>
        item.id === itemId
          ? {
              ...item,
              quantity: (item.quantity =
                item.quantity > 1 ? item.quantity - 1 : 1),
            }
          : item,
      );

      setCartItems(newState);
    },
    [cartItems],
  );

  // decrecated code
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

  const value = useMemo(
    () => ({
      cartItems,
      addItem,
      minusQuantity,
      removeItem,
      addQuantity,
      removeAllItems,
    }),
    [
      cartItems,
      addItem,
      removeItem,
      minusQuantity,
      addQuantity,
      removeAllItems,
    ],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
