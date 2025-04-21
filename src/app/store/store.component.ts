import { Component, Signal, computed, signal } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { FormControl, FormGroup } from '@angular/forms';
import { tuiItemsHandlersProvider } from '@taiga-ui/core';
import { Cart } from '../model/cart.model';

@Component({
  standalone: false,
  selector: 'store',
  templateUrl: 'store.component.html',
  styleUrl: './store.component.less',
  providers: [
    tuiItemsHandlersProvider({
      stringify: signal((x: any) => {
        if (typeof x === 'number') {
          return x + ' per Page';
        }
        return x() + ' per Page';
      }),
    }),
  ],
})
export class StoreComponent {
  products: Signal<Product[]>;
  categories: Signal<string[]>;
  selectedCategory = signal<string | undefined>(undefined);
  productsPerPage = signal(4);
  selectedPage = signal(1);
  pagedProducts: Signal<Product[]>;
  //pageNumbers: Signal<number[]>;
  pageCount: Signal<number>;
  protected readonly pageSizes = [3, 4, 6, 8];

  categoryForm = new FormGroup({
    categoryValue: new FormControl('home'),
  });

  constructor(
    private repository: ProductRepository,
    private cart: Cart,
  ) {
    this.products = computed(() => {
      if (this.selectedCategory() == undefined) {
        return this.repository.products();
      } else {
        return this.repository
          .products()
          .filter((p) => p.category === this.selectedCategory());
      }
    });
    this.categories = repository.categories;
    let pageIndex = computed(() => {
      return (this.selectedPage() - 1) * this.productsPerPage();
    });
    this.pagedProducts = computed(() => {
      return this.products().slice(
        pageIndex(),
        pageIndex() + this.productsPerPage(),
      );
    });
    // this.pageNumbers = computed(() => {
    //     return Array(Math.ceil(this.products().length
    //             / this.productsPerPage()))
    //         .fill(0).map((x, i) => i + 1);
    // });
    this.pageCount = computed(() => {
      return Math.ceil(this.products().length / this.productsPerPage());
    });
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory.set(newCategory);
    this.changePage(1);
  }

  changePage(newPage: number) {
    this.selectedPage.set(newPage);
  }

  protected goToPage(index: number): void {
    this.selectedPage.set(index + 1);
  }

  changePageSize(newSize: number) {
    this.productsPerPage.set(Number(newSize));
    this.changePage(1);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }
}
