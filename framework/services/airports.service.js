import fetch from 'node-fetch';
import urls from '../config/urls';

const Airports = {
  get: async () => {
    const r = await fetch(`${urls.airport}api/airports`, { method: 'GET' });
    return r;
  },
  getById: async () => {
    const r = await fetch(`${urls.airport}api/airports/KIX`, { method: 'GET' });
    return r;
  },
  postToken: async () => {
    const r = await fetch(`${urls.airport}api/tokens`, { method: 'POST' /* , body: JSON.stringify(credentials) */ });
    return r;
  },
  postDistanceBetweenAirports: async (Auth, from, to) => {
    const params = new URLSearchParams(
      {
        from,
        to,
      },
    );
    const r = await fetch(`${urls.airport}api/airports/distance?${params}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authentication: Auth,
      },
    });
    return r;
  },
  saveFavorites: async (BearerToken, id) => {
    const params = new URLSearchParams(
      {
        airport_id: id,
      },
    );
    const r = await fetch(`${urls.airport}api/favorites?${params}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer token=${BearerToken}`,
      },
    });
    return r;
  },
  getFavorites: async (BearerToken) => {
    const r = await fetch(`${urls.airport}api/favorites`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer token=${BearerToken}`,
      },
    });
    return r;
  },
  deleteAllFavorites: async (BearerToken) => {
    const r = await fetch(`${urls.airport}api/favorites/clear_all`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer token=${BearerToken}`,
      },
    });
    return r;
  },
};

export default Airports;
