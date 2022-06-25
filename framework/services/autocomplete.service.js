import fetch from 'node-fetch';
import urls from '../config/urls';

const Autocomplete = {
  get: async (accessKey, city) => {
    const r = await fetch(`${urls.weather}autocomplete?access_key=${accessKey}&query=${city}`, { method: 'GET' });
    return r;
  },

};
export default Autocomplete;
