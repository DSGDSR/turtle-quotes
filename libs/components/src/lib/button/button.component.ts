import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ButtonTarget, ButtonVariant } from './button.enum';

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
  @Input() variant!: ButtonVariant;

  @Output() action = new EventEmitter<string>();

  public onClick(): void {
    this.action.emit();
  }
}
