import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, RouterLink } from '@angular/router';

import { TuiRoot } from '@taiga-ui/core';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreFirstGuard } from './storeFirst.guard';

import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cartDetail.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule,
    TuiRoot,
    RouterLink,
    RouterModule.forRoot([
      {
        path: 'store',
        component: StoreComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: 'cart',
        component: CartDetailComponent,
        canActivate: [StoreFirstGuard],
      },
      { path: '**', redirectTo: '/store' },
    ]),
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
