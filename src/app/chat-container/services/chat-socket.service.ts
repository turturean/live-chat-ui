import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from '../../../environments/environment';

@Injectable()
export class ChatSocketService extends Socket {
  constructor() {
    super(environment.socketConfig);
  }
}
