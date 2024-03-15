import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonTarget } from './button.enum';

@Component({
  selector: 'tq-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() href!: string;
  @Input() target: ButtonTarget = ButtonTarget.Self;

  @Output() action = new EventEmitter<string>();

  public onClick(): void {
    this.action.emit();
  }
}
