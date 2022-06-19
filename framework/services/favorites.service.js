import fetch from 'node-fetch';
import urls from '../config/urls';
import headers from '../config/headers';

const Favorites = {
  saveFavorites: async (id) => {
    const params = new URLSearchParams(
      {
        airport_id: id,
      },
    );
    const r = await fetch(`${urls.airport}api/favorites?${params}`, {
      method: 'POST',
      headers,
    });
    return r;
  },
  getFavorites: async () => {
    const r = await fetch(`${urls.airport}api/favorites`, {
      method: 'GET',
      headers,
    });
    return r;
  },
  deleteAllFavorites: async () => {
    const r = await fetch(`${urls.airport}api/favorites/clear_all`, { method: 'DELETE', headers });
    return r;
  },
};
export default Favorites;
