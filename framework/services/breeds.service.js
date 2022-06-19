import fetch from 'node-fetch';
import urls from '../config/urls';

const Breeds = {
  getAllBreeds: async () => {
    const r = await fetch(`${urls.cats}v1/breeds`, { method: 'GET' });
    return r;
  },
  getOneBreed: async (breedName) => {
    const r = await fetch(`${urls.cats}v1/breeds/search?q=${breedName}`, { method: 'GET' });
    return r;
  },

};

export default Breeds;
