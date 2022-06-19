import fetch from 'node-fetch';
import urls from '../config';

const Categories = {
  getAllCategories: async () => {
    const r = await fetch(`${urls.cats}v1/categories`, { method: 'GET' });
    return r;
  },

};
export default Categories;
