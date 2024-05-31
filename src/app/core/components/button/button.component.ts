import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input('btn-text') btnText: string = "";
  @Input('btn-save-text') btnSaveText: string = "";
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();

  id: boolean = false;

  onClick() {
    this.submit.emit();
  }
}
