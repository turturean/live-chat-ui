import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketIoModule } from 'ngx-socket-io';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ChatContainerComponent } from './chat-container.component';
import { ChatMessageFormComponent } from './chat-message-form/chat-message-form.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { ChatSocketService } from './services/chat-socket.service';
import { ChatService } from './services/chat.service';
import { chatContainerRoutes } from './chat-container.routes';
import { TextFormatPipe } from './text-format.pipe';

@NgModule({
  declarations: [
    ChatContainerComponent,
    ChatMessagesComponent,
    ChatMessageFormComponent,
    TextFormatPipe,
  ],
  imports: [
    RouterModule.forChild(chatContainerRoutes),
    CommonModule,
    SocketIoModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [ChatSocketService, ChatService],
})
export class ChatContainerModule {}
