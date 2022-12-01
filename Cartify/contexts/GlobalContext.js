import {createContext, useCallback, useContext, useMemo, useState} from 'react';

const GlobalContext = createContext(null);

const GlobalProvider = ({children}) => {
  const [referenceCode, setReferenceCode] = useState(100000000000000);

  const getReferenceCode = lastReferenceCode => {
    setReferenceCode(prev => lastReferenceCode + 1);
    return referenceCode;
  };

  const refreshCode = () => {
    return Math.floor(Math.random() * 99999) + 10001;
  };

  const getTimeDate = () => {
    const current = new Date();
    const timeDate = `${current.getHours()}:${current.getMinutes()} ${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    return timeDate;
  };

  const computeTotalPrice = itemList => {
    const totalPriceToPay = itemList.reduce((total, current) => {
      return (total += current.price * current.quantity);
    }, 0);

    return totalPriceToPay;
  };

  const value = useMemo(
    () => ({
      referenceCode,
      getReferenceCode,
      refreshCode,
      getTimeDate,
      computeTotalPrice,
    }),
    [
      referenceCode,
      getReferenceCode,
      refreshCode,
      getTimeDate,
      computeTotalPrice,
    ],
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);

export default GlobalProvider;
