import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'chat-message-form',
  templateUrl: './chat-message-form.component.html',
  styleUrls: ['./chat-message-form.component.scss'],
})
export class ChatMessageFormComponent {
  @Output() sendMessage = new EventEmitter<string>();

  formGroup = this.fb.group({
    message: new FormControl<string>(''),
  });
  constructor(private fb: FormBuilder) {}

  send(event: Event) {
    event.stopPropagation();
    const message = this.formGroup.value.message as string;

    this.sendMessage.emit(message);
    this.formGroup.setValue({ message: '' });
  }
}
