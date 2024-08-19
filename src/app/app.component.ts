import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RatingComponentComponent } from './rating-component/rating-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RatingComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
