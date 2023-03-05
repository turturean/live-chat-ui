import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChatWriteFormComponent } from './chat-write-form.component';
import { By } from '@angular/platform-browser';

describe('ChatWriteFormComponent', () => {
  let component: ChatWriteFormComponent;
  let fixture: ComponentFixture<ChatWriteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatWriteFormComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatWriteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send button to be disabled when the message is empty', () => {
    component.formGroup.setValue({ message: '' });
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('button')).nativeElement.disabled
    ).toBeTruthy();
  });

  it('should send button to be enabled when the message is not empty', () => {
    component.formGroup.setValue({ message: 'test' });
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('button')).nativeElement.disabled
    ).toBeFalsy();
  });

  it('should emit called setValue emitter when user clicked on send button', () => {
    component.formGroup.setValue({ message: 'test' });
    jest.spyOn(component.sendMessage, 'emit');

    fixture.detectChanges();
    fixture.debugElement.query(By.css('button')).nativeElement.click();

    expect(component.sendMessage.emit).toHaveBeenCalled();
    expect(component.sendMessage.emit).toHaveBeenCalledWith('test');
  });

  it('should clear the form when user clicked on send button', () => {
    component.formGroup.setValue({ message: 'test' });
    jest.spyOn(component.sendMessage, 'emit');

    fixture.detectChanges();
    fixture.debugElement.query(By.css('button')).nativeElement.click();

    expect(component.formGroup.controls.message.value).toBe('');
  });
});
