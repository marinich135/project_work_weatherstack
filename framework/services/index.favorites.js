import Favorites from './favorites.service';

const api2 = () => ({
  Favorites: () => ({ ...Favorites }),

});

export default api2;
