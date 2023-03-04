import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWriteFormComponent } from './chat-write-form.component';

describe('ChatWriteFormComponent', () => {
  let component: ChatWriteFormComponent;
  let fixture: ComponentFixture<ChatWriteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatWriteFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatWriteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
