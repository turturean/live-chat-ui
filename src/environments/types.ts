import { SocketIoConfig } from 'ngx-socket-io';

export type Environment = {
  production: boolean;
  socketConfig: SocketIoConfig;
};
