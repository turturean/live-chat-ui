import { Component, Inject } from '@angular/core';
import { ChatService } from './services/chat.service';
import { Message } from './types';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'chat-ui-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss'],
})
export class ChatContainerComponent {
  userId = Math.random();
  messages$ = new BehaviorSubject<Message[]>([
    {
      userId: 2,
      text: "Hey, there! It's been a while!",
      createAt: new Date().toUTCString(),
    },
    {
      userId: 2,
      text: ' Wanted to know if you wanted to get lunch sometime this week?',
      createAt: new Date().toUTCString(),
    },
    {
      userId: 2,
      text: "  Or next week. I'm also free during the evenings next week.",
      createAt: new Date().toUTCString(),
    },
    {
      userId: 2,
      text: 'Oops! Sorry for the late response',
      createAt: new Date().toUTCString(),
    },
    {
      userId: 3,
      text: " I'd love to get lunch sometime next week!",
      createAt: new Date().toUTCString(),
    },
    {
      userId: 3,
      text: "Do you have any places in mind where you'd want to meet?",
      createAt: new Date().toUTCString(),
    },
  ]);

  constructor(
    public chatService: ChatService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.chatService.getMessage().subscribe((message) => {
      this.messages$.next([...this.messages$.value, message]);
    });
  }

  sendMessage(text: string): void {
    this.chatService.sendMessage({ text, userId: this.userId });
  }

  ngAfterViewChecked() {
    this.scrollToLastMessage();
  }

  private scrollToLastMessage() {
    const chatMessages = this.document.querySelector('chat-messages');

    if (chatMessages) {
      chatMessages.scrollTo({
        top: chatMessages.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
}
