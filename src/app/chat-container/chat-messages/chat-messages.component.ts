import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Message } from '../types';

@Component({
  selector: 'chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessagesComponent {
  @Input() messages: Message[] = [];
  @Input() userId: number | null = null;
}
