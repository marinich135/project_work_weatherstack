import fetch from 'node-fetch';
import { urls, cred } from '../config/index';

const Tokens = {
  postToken: async () => {
    const r = await fetch(`${urls.airport}api/tokens`, { method: 'POST', cred });
    return r;
  },
};

export default Tokens;
