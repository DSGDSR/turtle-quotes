import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent, ButtonVariant } from '@components';

@Component({
  standalone: true, 
  imports: [
    // Angular imports
    RouterModule,

    // Components
    ButtonComponent
  ],
  selector: 'tq-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';
  public buttonVariants = ButtonVariant

  public buttonClicked(): void {
    console.log('button');
  }
}
