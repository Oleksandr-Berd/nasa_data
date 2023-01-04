import axios from 'axios';
import { API_KEY } from 'Utilities/API_KEY';
import { ImageryUrl } from './ImageryUrl';

export const imageryGet = ({ lat, lon }) => {
  return axios.get(`${ImageryUrl}?lon=${lon}&lat=${lat}&api_key=${API_KEY}`);
};
