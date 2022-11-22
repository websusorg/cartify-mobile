import {createContext, useCallback, useContext, useMemo, useState} from 'react';

const CartContext = createContext(null);

const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = item => setCartItems(prev => [...prev, item]);

  const addQuantity = useCallback(itemId => {
    const newState = cartItems.map(item =>
      item.id === itemId
        ? {...cartItems, quantity: (item.quantity += 1)}
        : item,
    );
  }, []);

  const minusQuantity = useCallback(itemId => {
    const newState = cartItems.map(item =>
      item.id === itemId
        ? {...cartItems, quantity: (item.quantity -= 1)}
        : item,
    );
  }, []);

  const value = useMemo(() => ({cartItems, addItem}), [cartItems.addItem]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
