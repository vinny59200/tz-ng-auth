import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EasyUserListComponent } from './user-management/app-easy-user-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EasyUserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-auth';
}
