import axios from 'axios';
import useFetch from '../hooks/useFetch';

export const apiClient = axios.create({
  baseURL: `https://restcountries.com/v3.1`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export const api = (url, endpoint) => {
  useFetch(url)
}
