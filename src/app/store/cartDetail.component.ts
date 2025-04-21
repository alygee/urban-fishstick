import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  standalone: false,
  selector: 'cart-detail',
  templateUrl: 'cartDetail.component.html',
})
export class CartDetailComponent {
  constructor(private cart: Cart) {}
}
