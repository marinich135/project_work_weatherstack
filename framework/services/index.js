import Breeds from './breeds.service';
import Categories from './categories.service';

const api = () => ({
  Breeds: () => ({ ...Breeds }),
  Categories: () => ({ ...Categories }),

});

export default api;
