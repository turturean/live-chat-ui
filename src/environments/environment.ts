import { Environment } from './types';

export const environment: Environment = {
  production: false,
  socketConfig: {
    url: 'ws://localhost:4200/',
    options: {
      autoConnect: true,
    },
  },
};
