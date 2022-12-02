import {createContext, useCallback, useContext, useMemo, useState} from 'react';

const CartContext = createContext(null);

const CartProvider = ({children}) => {
  const proxyItems = [
    {_id: '6389e3182bd61e587393a5e8', name: 'Cheese', price: 50, quantity: 1},
    {_id: '638a225e7c543875d722e91f', name: 'Milk', price: 50, quantity: 1},
  ];

  const [cartItems, setCartItems] = useState([]);

  // const addItem = item => setCartItems(prev => [...prev, item]);

  const addItem = item => {
    if (cartItems.some(obj => obj._id === item._id)) {
      addQuantity(item._id);
    } else {
      setCartItems(prev => [...prev, item]);
    }
  };

  const removeItem = useCallback(
    itemId => {
      return setCartItems(prevItems =>
        prevItems.filter(item => item._id !== itemId),
      );
    },
    [cartItems],
  );

  const removeAllItems = useCallback(() => {
    return setCartItems([]);
  }, [cartItems]);

  const addQuantity = useCallback(
    itemId => {
      const newState = cartItems.map(item =>
        item._id === itemId ? {...item, quantity: (item.quantity += 1)} : item,
      );

      setCartItems(newState);
    },
    [cartItems],
  );

  const minusQuantity = useCallback(
    itemId => {
      const newState = cartItems.map(item =>
        item._id === itemId
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

  // deprecated code
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
