import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  TuiButton,
  TuiTitle,
  TuiRoot,
  TuiIcon,
  TuiTextfield,
} from '@taiga-ui/core';
import {
  TuiBadgedContent,
  TuiBadgeNotification,
  TuiCheckbox,
  TuiSwitch,
} from '@taiga-ui/kit';
import { TuiHeader, TuiCell } from '@taiga-ui/layout';
import { TuiTable } from '@taiga-ui/addon-table';
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
    TuiTable,
    NgForOf,
    TuiCheckbox,
    TuiSwitch,
    TuiCell,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private list = new TodoList('Albert', [
    new TodoItem('Go for run', true),
    new TodoItem('Get flowers'),
    new TodoItem('Collect tickets'),
  ]);

  showComplete: boolean = false;

  get username(): string {
    return this.list.user;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(
      (item) => this.showComplete || !item.complete,
    );
  }

  get itemCount(): number {
    return this.list.items.filter((item) => this.showComplete || !item.complete)
      .length;
  }

  addItem(newItem: string) {
    if (newItem != '') {
      this.list.addItem(newItem);
    }
  }
}
