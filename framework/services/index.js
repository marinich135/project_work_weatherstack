import Airports from './airports.service';
import Breeds from './breeds.service';
import Categories from './categories.service';

const api = () => ({
  Airports: () => ({ ...Airports }),
  Breeds: () => ({ ...Breeds }),
  Categories: () => ({...Categories}),
});

export default api;
