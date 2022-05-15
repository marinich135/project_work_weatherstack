import Tokens from './tokens.service';

const api1 = () => ({
  Tokens: () => ({ ...Tokens }),
});

export default api1;
