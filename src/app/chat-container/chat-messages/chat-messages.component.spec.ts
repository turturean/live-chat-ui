import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';
import { ChatMessagesComponent } from './chat-messages.component';
import { Message } from '../types';
import { TextFormatPipe } from '../text-format.pipe';

describe('ChatMessageComponent', () => {
  let component: ChatMessagesComponent;
  let fixture: ComponentFixture<ChatMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatMessagesComponent, TextFormatPipe],
    })
      .overrideComponent(ChatMessagesComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ChatMessagesComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when has messages', () => {
    let messages: Message[] = [];

    beforeEach(() => {
      messages = [
        {
          userId: 2,
          text: "Hey, there! It's been a while!",
          createAt: new Date().toUTCString(),
        },
        {
          userId: 1,
          text: ' Wanted to know if you wanted to get lunch sometime this week?',
          createAt: new Date().toUTCString(),
        },
        {
          userId: 2,
          text: "  Or next week. I'm also free during the evenings next week.",
          createAt: new Date().toUTCString(),
        },
      ];
      component.messages = messages;

      fixture.detectChanges();
    });

    it('should show all messages', () => {
      const messagesElements = fixture.debugElement.queryAll(
        By.css('.chat-message')
      );
      expect(messagesElements.length).toEqual(messages.length);
    });

    it('should have class "chat-message__own" if user is owner of message', () => {
      component.userId = 2;

      fixture.detectChanges();

      const messagesElements = fixture.debugElement.queryAll(
        By.css('.chat-message__own')
      );
      expect(messagesElements.length).toEqual(2);
    });
  });
});
