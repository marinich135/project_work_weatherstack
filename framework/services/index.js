import Airports from './airports.service';
import Tokens from './tokens.service';
import Favorites from './favorites.service';
import Breeds from './breeds.service';
import Categories from './categories.service';

const api = () => ({
  Airports: () => ({ ...Airports }),
  Tokens: () => ({ ...Tokens }),
  Favorites: () => ({ ...Favorites }),
  Breeds: () => ({ ...Breeds }),
  Categories: () => ({ ...Categories }),

});

export default api;
