import { ChatSocketService } from './chat-socket.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CreateMessage, Message, MessageEvents } from '../types';

@Injectable()
export class ChatService {
  constructor(private socket: ChatSocketService) {}

  sendMessage(payload: CreateMessage) {
    this.socket.emit(MessageEvents.Message, payload);
  }
  getMessage() {
    return this.socket
      .fromEvent<Message>(MessageEvents.Message)
      .pipe(map((data) => data));
  }
}
