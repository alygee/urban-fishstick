import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../model/cart.model';

@Component({
  standalone: false,
  selector: 'cart-summary',
  templateUrl: 'cartSummary.component.html',
})
export class CartSummaryComponent {
  constructor(
    public cart: Cart,
    private _router: Router,
  ) {}

  navgiateToCart(event: any) {
    this._router.navigate(['/cart']);
  }
}
