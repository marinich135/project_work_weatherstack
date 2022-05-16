import fetch from 'node-fetch';
import urls from '../config/urls';
import cred from '../config/cred';

const Tokens = {
  postToken: async () => {
    const r = await fetch(`${urls.airport}api/tokens`, { method: 'POST', cred });
    return r;
  },
};

export default Tokens;
