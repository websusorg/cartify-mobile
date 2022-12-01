import {createContext, useCallback, useContext, useMemo, useState} from 'react';

const ReceiptContext = createContext(null);

const ReceiptProvider = ({children}) => {
  const proxyReceipt = [
    {
      date: '12 / 11 / 22',
      referenceNo: 10909929,
      items: [
        {id: 1, name: 'Rice', price: 45.0, quantity: 5},
        {id: 2, name: 'Coke', price: 15.0, quantity: 2},
        {id: 3, name: 'Fruties', price: 8.0, quantity: 2},
      ],
    },
    {
      date: '25 / 11 / 22',
      referenceNo: 16213,
      items: [
        {id: 1, name: 'Biscuit', price: 8.0, quantity: 5},
        {id: 2, name: 'Royal', price: 15.0, quantity: 1},
      ],
    },
  ];

  const [receiptList, setReceiptList] = useState(proxyReceipt);

  const getReceiptDetails = referenceNo => {
    const detail = receiptList.find(details => {
      return details.referenceNo === referenceNo;
    });

    return detail;
  };
  const value = useMemo(
    () => ({
      receiptList,
      getReceiptDetails,
    }),
    [receiptList, getReceiptDetails],
  );

  return (
    <ReceiptContext.Provider value={value}>{children}</ReceiptContext.Provider>
  );
};

export const useReceipt = () => useContext(ReceiptContext);

export default ReceiptProvider;
