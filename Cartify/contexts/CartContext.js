import {createContext, useCallback, useContext, useMemo, useState} from 'react';

const CartContext = createContext(null);

const CartProvider = ({children}) => {
  const proxyItems = [
    {id: 1, name: ' Rice', price: 9.0, quantity: 1},
    {id: 2, name: ' Rice', price: 9.0, quantity: 1},
    {id: 3, name: ' Rice', price: 9.0, quantity: 1},
  ];

  const [cartItems, setCartItems] = useState(proxyItems);

  const addItem = item => setCartItems(prev => [...prev, item]);

  const removeItem = useCallback(
    itemId => {
      return setCartItems(prevItems =>
        prevItems.filter(item => item.id !== itemId),
      );
    },
    [cartItems],
  );

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

  const value = useMemo(
    () => ({cartItems, addItem, minusQuantity, removeItem, addQuantity}),
    [cartItems, addItem, removeItem, minusQuantity, addQuantity],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
