import axios from 'axios';
import { API_KEY } from 'Utilities/API_KEY';
import { ImageryUrl } from './ImageryUrl';

export const imageryGet = ({ lat, lon, dim }) => {
  return axios.get(
    `${ImageryUrl}&lon=${lon}&lat=${lat}&dim=${dim}&api_key=${API_KEY}`
  );
};
