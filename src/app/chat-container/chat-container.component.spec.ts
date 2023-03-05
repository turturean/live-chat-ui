import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ChatContainerComponent } from './chat-container.component';
import { ChatService } from './services/chat.service';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { ChatMessageFormComponent } from './chat-message-form/chat-message-form.component';
import { TextFormatPipe } from './text-format.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { ChatSocketService } from './services/chat-socket.service';
import {of} from "rxjs";

describe('ChatContainerComponent', () => {
  let component: ChatContainerComponent;
  let fixture: ComponentFixture<ChatContainerComponent>;
  let mockChatService = { sendMessage: jest.fn(), getMessage: () => of() };
  let mockChatSocketService = { emit: jest.fn(), fromEvent: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatCardModule,
        FormsModule,
        CommonModule,
        MatFormFieldModule,
        NoopAnimationsModule,
      ],
      declarations: [
        ChatContainerComponent,
        ChatMessagesComponent,
        ChatMessageFormComponent,
        TextFormatPipe,
      ],
      providers: [
        {
          provide: ChatService,
          useValue: mockChatService,
        },
        {
          provide: ChatSocketService,
          useValue: mockChatSocketService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to call method sendMessage from ChatService', () => {
    const userId = 12;
    const chatMessageFormDebug = fixture.debugElement.query(
      By.directive(ChatMessageFormComponent)
    );

    component.userId = userId;
    chatMessageFormDebug.componentInstance.formGroup.patchValue({
      text: 'test',
    });

    chatMessageFormDebug.componentInstance.send({ stopPropagation: () => {} });

    expect(mockChatService.sendMessage).toHaveBeenCalled();
    expect(mockChatService.sendMessage).toHaveBeenCalledWith({
      userId,
      text: 'test',
    });
  });
});
