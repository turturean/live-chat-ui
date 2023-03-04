export interface Message {
  userId: number;
  text: string;
  createAt: string;
}

export interface CreateMessage {
  userId: number;
  text: string;
}

export enum MessageEvents {
  Message = 'message',
}
