import { Environment } from './types';

export const environment: Environment = {
  production: true,
  socketConfig: {
    url: 'wss://chat.dorinturturean.com/',
    options: {
      autoConnect: true
    },
  },
};
