import Airports from './airports.service';
import Tokens from './tokens.service';
import Favorites from './favorites.service';

const api = () => ({
  Airports: () => ({ ...Airports }),
  Tokens: () => ({ ...Tokens }),
  Favorites: () => ({ ...Favorites }),

});

export default api;
