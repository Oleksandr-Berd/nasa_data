import axios from 'axios';
import { API_KEY } from 'Utilities/API_KEY';
import { ApodUrl } from './ApodUrl';

export const getApod = () => {
  return axios
    .get(`${ApodUrl}/?api_key=${API_KEY}`)
    .then(response => response.data);
};
