import { AfterViewChecked, Component, Inject, OnDestroy } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ChatService } from './services/chat.service';
import { Message } from './types';

@Component({
  selector: 'chat-ui-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss'],
})
export class ChatContainerComponent implements OnDestroy, AfterViewChecked {
  userId = Math.random();
  messages: Message[] = [];

  alive$ = new Subject();

  constructor(
    public chatService: ChatService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.chatService
      .getMessage()
      .pipe(
        takeUntil(this.alive$),
        tap((message) => (this.messages = [...this.messages, message]))
      )
      .subscribe();
  }

  sendMessage(text: string): void {
    this.chatService.sendMessage({ text, userId: this.userId });
  }

  ngAfterViewChecked() {
    this.scrollToLastMessage();
  }

  ngOnDestroy() {
    this.alive$.next(null);
    this.alive$.complete();
  }

  private scrollToLastMessage() {
    const chatMessages = this.document.querySelector('chat-messages');

    if (chatMessages && chatMessages.scrollTo) {
      chatMessages.scrollTo({
        top: chatMessages.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
}
