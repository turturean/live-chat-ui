import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = {
  url: 'ws://localhost:3001/',
  options: { autoConnect: true },
};
@Injectable()
export class ChatSocketService extends Socket {
  constructor() {
    super(config);
  }
}
