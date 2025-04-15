import { Component } from '@angular/core';
import { TuiButton, TuiTitle, TuiRoot } from '@taiga-ui/core';
import { TuiBadgeNotification } from '@taiga-ui/kit';
import { TuiHeader } from '@taiga-ui/layout';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [TuiRoot, TuiBadgeNotification, TuiButton, TuiHeader, TuiTitle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo';
}
