import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { TuiRoot } from '@taiga-ui/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, StoreModule, TuiRoot],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
