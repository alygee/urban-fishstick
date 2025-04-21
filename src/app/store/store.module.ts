import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetailComponent } from './cartDetail.component';
import { CounterDirective } from './counter.directive';
import {
  TuiButton,
  TuiIcon,
  TuiLink,
  TuiTitle,
  TuiGroup,
  TuiTextfield,
} from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBadge,
  TuiBadgeNotification,
  TuiSensitive,
  TuiTiles,
  TuiBlock,
  TuiRadio,
  TuiTooltip,
  TuiPagination,
  TuiChevron,
  TuiDataListWrapper,
  TuiSelect,
} from '@taiga-ui/kit';
import { TuiHeader, TuiCell } from '@taiga-ui/layout';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    TuiBlock,
    TuiAvatar,
    TuiBadge,
    TuiBadgeNotification,
    TuiButton,
    TuiHeader,
    TuiIcon,
    TuiLink,
    TuiSensitive,
    TuiTitle,
    TuiTooltip,
    TuiTiles as any,
    TuiRadio,
    TuiGroup,
    TuiCell,
    TuiPagination,
    TuiChevron,
    TuiDataListWrapper,
    TuiSelect,
    TuiTextfield,
  ],
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent,
    CartDetailComponent,
  ],
  exports: [StoreComponent],
})
export class StoreModule {}
