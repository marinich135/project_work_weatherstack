import fetch from 'node-fetch';
import urls from '../config/urls';
import headers from '../config/headers';

const Airports = {
  get: async () => {
    const r = await fetch(`${urls.airport}api/airports`, { method: 'GET' });
    return r;
  },
  getById: async (airId) => {
    const r = await fetch(`${urls.airport}api/airports/${airId}`, { method: 'GET' });
    return r;
  },

  postDistanceBetweenAirports: async (from, to) => {
    const params = new URLSearchParams(
      {
        from,
        to,
      },
    );
    const r = await fetch(`${urls.airport}api/airports/distance?${params}`, { method: 'POST', headers });
    return r;
  },

};

export default Airports;
