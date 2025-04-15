import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  TuiButton,
  TuiTitle,
  TuiRoot,
  TuiIcon,
  TuiTextfield,
} from '@taiga-ui/core';
import { TuiBadgedContent, TuiBadgeNotification } from '@taiga-ui/kit';
import { TuiHeader } from '@taiga-ui/layout';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    FormsModule,
    TuiRoot,
    TuiBadgeNotification,
    TuiButton,
    TuiHeader,
    TuiTitle,
    TuiBadgedContent,
    TuiIcon,
    TuiTextfield,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private list = new TodoList('Albert', [new TodoItem('Go for run', true)]);

  value = '';

  get username(): string {
    return this.list.user;
  }

  clear() {}
}
