import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbNavModule, NgbProgressbarModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgbNavModule,NgbProgressbarModule,NgbTimepickerModule,FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exam-app';
  active = 1;
  time = { hour: 13, minute: 30 };
  
}
