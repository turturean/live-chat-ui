import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketIoModule } from 'ngx-socket-io';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatContainerComponent } from './chat-container.component';
import { ChatWriteFormComponent } from './chat-write-form/chat-write-form.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { ChatSocketService } from './services/chat-socket.service';
import { ChatService } from './services/chat.service';
import { chatContainerRoutes } from './chat-container.routes';
import { FlyingHeroesImpurePipe } from './text-format.pipe';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ChatContainerComponent,
    ChatMessagesComponent,
    ChatWriteFormComponent,
    FlyingHeroesImpurePipe,
  ],
  imports: [
    RouterModule.forChild(chatContainerRoutes),
    CommonModule,
    SocketIoModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [ChatSocketService, ChatService],
})
export class ChatContainerModule {}
