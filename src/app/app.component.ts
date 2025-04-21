import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app',
  template: '<tui-root><router-outlet></router-outlet></tui-root>',
  styleUrl: 'app.component.less',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}
