import fetch from 'node-fetch';
import urls from '../config/urls';

const Current = {

  getCurrentWeather: async (accessKey1, city1) => {
    const r = await fetch(`${urls.weather}current?access_key=${accessKey1}&query=${city1}`, { method: 'GET' });
    return r;
  },
  getWeatherWithoutCity: async (accessKey1) => {
    const r = await fetch(`${urls.weather}current?access_key=${accessKey1}&query=`, { method: 'GET' });
    return r;
  },

};

export default Current;
