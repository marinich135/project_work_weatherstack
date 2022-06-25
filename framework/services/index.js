import Current from './current.service';
import Autocomplete from './autocomplete.service';

const api = () => ({
  Current: () => ({ ...Current }),
  Autocomplete: () => ({ ...Autocomplete }),

});

export default api;
