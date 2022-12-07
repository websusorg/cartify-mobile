import {useCallback, useState} from 'react';
import useSWR from 'swr';
import client, {API_URL} from '../lib/client';
import DeviceInfo from 'react-native-device-info';

const useCheckout = () => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [isValidating, setIsValidating] = useState(false);

  const checkout = useCallback(async (payload = {}) => {
    try {
      setIsValidating(true);
      const {data} = await client.post('/cart/checkout', {...payload});
      setResponse(data);
      return data;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setIsValidating(false);
    }
  }, []);

  return {
    data: response,
    error,
    isValidating,
    checkout,
  };
};

// change useSWR(`/cart/receipts/DUB-L22`); -> useSWR(`/cart/receipts/${DeviceInfo.getDeviceId()}`);
const useRecoverReceipt = () => {
  const {...rest} = useSWR(`/cart/receipts/${DeviceInfo.getDeviceId()}`);
  return {...rest}; // get all data
};

const useGetCart = code => {
  const {...rest} = useSWR(`/cart/${code}`);

  return {...rest};
};

export {useCheckout, useRecoverReceipt, useGetCart};
