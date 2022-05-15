import fetch from 'node-fetch';
import urls from '../config/urls';

const Tokens = {
  postToken: async () => {
    const credentials = {
      email: 'test@airportgap.com',
      password: 'airportgappassword',
    };
    const r = await fetch(`${urls.airport}api/tokens`, { method: 'POST', credentials });
    return r;
  },
};

export default Tokens;
