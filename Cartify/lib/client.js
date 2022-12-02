import axios from 'axios';

export const API_URL = 'https://cart-api-bsu.vercel.app/api';
export const LOCAL_URL = 'http://localhost:8080/api';

const client = axios.create({
  baseURL: API_URL,
});

export default client;
