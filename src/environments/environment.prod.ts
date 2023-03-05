import { Environment } from './types';

export const environment: Environment = {
  production: true,
  socketConfig: {
    url: 'ws://localhost:3001/',
    options: { autoConnect: true },
  },
};
